var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import * as React from "react";
import React__default, { Component, useState, useEffect, useRef } from "react";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, Menu, ArrowRight, Megaphone, Lightbulb, Globe, Bot, BarChart, Code, ExternalLink, ChevronRight, Quote, MessageCircle, BarChart3, Target, CalendarCheck, Star, TrendingUp, Heart, CheckCircle2, Bell, ClipboardList, UserCheck, Stethoscope, Clock, Calendar, Users, Phone, Mail, MapPin, Shield, Award, ArrowLeft, ChevronUp, ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation, Link, useParams, Navigate, Routes, Route } from "react-router-dom";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React__default.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React__default.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => [],
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var major = parseInt(React__default.version.split(".")[0], 10);
var isReact19 = major >= 19;
var defaultValue = {};
var Context = React__default.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    if (isReact19) {
      this.helmetData = null;
    } else {
      this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
    }
  }
  render() {
    if (isReact19) {
      return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, this.props.children);
    }
    return /* @__PURE__ */ React__default.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            const cssText = tag.cssText;
            newElement.appendChild(document.createTextNode(cssText));
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const { context: _context, ...props } = instance.props;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var react19Instances = [];
var toHtmlAttributes = (props) => {
  const result = {};
  for (const key of Object.keys(props)) {
    result[HTML_TAG_MAP[key] || key] = props[key];
  }
  return result;
};
var toReactProps = (attrs) => {
  const result = {};
  for (const key of Object.keys(attrs)) {
    const mapped = REACT_TAG_MAP[key];
    result[mapped || key] = attrs[key];
  }
  return result;
};
var applyAttributes = (tagName, attributes) => {
  if (!isDocument)
    return;
  const el = document.getElementsByTagName(tagName)[0];
  if (!el)
    return;
  const managedAttr = "data-rh-managed";
  const prev = el.getAttribute(managedAttr);
  const prevKeys = prev ? prev.split(",") : [];
  const nextKeys = Object.keys(attributes);
  for (const key of prevKeys) {
    if (!nextKeys.includes(key)) {
      el.removeAttribute(key);
    }
  }
  for (const key of nextKeys) {
    const value = attributes[key];
    if (value === void 0 || value === null || value === false) {
      el.removeAttribute(key);
    } else if (value === true) {
      el.setAttribute(key, "");
    } else {
      el.setAttribute(key, String(value));
    }
  }
  if (nextKeys.length > 0) {
    el.setAttribute(managedAttr, nextKeys.join(","));
  } else {
    el.removeAttribute(managedAttr);
  }
};
var syncAllAttributes = () => {
  const htmlAttrs = {};
  const bodyAttrs = {};
  for (const instance of react19Instances) {
    const { htmlAttributes, bodyAttributes } = instance.props;
    if (htmlAttributes) {
      Object.assign(htmlAttrs, toHtmlAttributes(htmlAttributes));
    }
    if (bodyAttributes) {
      Object.assign(bodyAttrs, toHtmlAttributes(bodyAttributes));
    }
  }
  applyAttributes("html", htmlAttrs);
  applyAttributes("body", bodyAttrs);
};
var React19Dispatcher = class extends Component {
  componentDidMount() {
    react19Instances.push(this);
    syncAllAttributes();
  }
  componentDidUpdate() {
    syncAllAttributes();
  }
  componentWillUnmount() {
    const index = react19Instances.indexOf(this);
    if (index !== -1) {
      react19Instances.splice(index, 1);
    }
    syncAllAttributes();
  }
  resolveTitle() {
    const { title, titleTemplate, defaultTitle } = this.props;
    if (title && titleTemplate) {
      return titleTemplate.replace(/%s/g, () => Array.isArray(title) ? title.join("") : title);
    }
    return title || defaultTitle || void 0;
  }
  renderTitle() {
    const title = this.resolveTitle();
    if (title === void 0)
      return null;
    const titleAttributes = this.props.titleAttributes || {};
    return React__default.createElement("title", toReactProps(titleAttributes), title);
  }
  renderBase() {
    const { base } = this.props;
    if (!base)
      return null;
    return React__default.createElement("base", toReactProps(base));
  }
  renderMeta() {
    const { meta } = this.props;
    if (!meta || !Array.isArray(meta))
      return null;
    return meta.map(
      (attrs, i) => React__default.createElement("meta", {
        key: i,
        ...toReactProps(attrs)
      })
    );
  }
  renderLink() {
    const { link } = this.props;
    if (!link || !Array.isArray(link))
      return null;
    return link.map(
      (attrs, i) => React__default.createElement("link", {
        key: i,
        ...toReactProps(attrs)
      })
    );
  }
  renderScript() {
    const { script } = this.props;
    if (!script || !Array.isArray(script))
      return null;
    return script.map((attrs, i) => {
      const { innerHTML, ...rest } = attrs;
      const props = toReactProps(rest);
      if (innerHTML) {
        props.dangerouslySetInnerHTML = { __html: innerHTML };
      }
      return React__default.createElement("script", { key: i, ...props });
    });
  }
  renderStyle() {
    const { style } = this.props;
    if (!style || !Array.isArray(style))
      return null;
    return style.map((attrs, i) => {
      const { cssText, ...rest } = attrs;
      const props = toReactProps(rest);
      if (cssText) {
        props.dangerouslySetInnerHTML = { __html: cssText };
      }
      return React__default.createElement("style", { key: i, ...props });
    });
  }
  renderNoscript() {
    const { noscript } = this.props;
    if (!noscript || !Array.isArray(noscript))
      return null;
    return noscript.map((attrs, i) => {
      const { innerHTML, ...rest } = attrs;
      const props = toReactProps(rest);
      if (innerHTML) {
        props.dangerouslySetInnerHTML = { __html: innerHTML };
      }
      return React__default.createElement("noscript", { key: i, ...props });
    });
  }
  render() {
    return React__default.createElement(
      React__default.Fragment,
      null,
      this.renderTitle(),
      this.renderBase(),
      this.renderMeta(),
      this.renderLink(),
      this.renderScript(),
      this.renderStyle(),
      this.renderNoscript()
    );
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React__default.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    if (isReact19) {
      return /* @__PURE__ */ React__default.createElement(React19Dispatcher, { ...newProps });
    }
    return helmetData ? /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React__default.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React__default.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-6"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-custom flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png",
                alt: "Logo da Agência",
                className: "h-12 w-auto object-contain"
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-extrabold ml-2 text-blue-900", children: "AGÊNCIA" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
            /* @__PURE__ */ jsx("a", { href: "#work", className: "font-medium hover:text-blue-700 transition-colors", children: "Projetos" }),
            /* @__PURE__ */ jsx("a", { href: "#services", className: "font-medium hover:text-blue-700 transition-colors", children: "Serviços" }),
            /* @__PURE__ */ jsx("a", { href: "#about", className: "font-medium hover:text-blue-700 transition-colors", children: "Sobre" }),
            /* @__PURE__ */ jsx("a", { href: "#team", className: "font-medium hover:text-blue-700 transition-colors", children: "Equipe" }),
            /* @__PURE__ */ jsx("a", { href: "#contact", children: /* @__PURE__ */ jsx(Button, { variant: "default", className: "bg-blue-900 text-white hover:bg-blue-800", children: "Contato" }) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-black",
              onClick: toggleMobileMenu,
              "aria-label": "Toggle menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        mobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden fixed inset-0 z-50 bg-white pt-20 px-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-6 items-center", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#work",
              className: "text-xl font-medium",
              onClick: () => setMobileMenuOpen(false),
              children: "Projetos"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#services",
              className: "text-xl font-medium",
              onClick: () => setMobileMenuOpen(false),
              children: "Serviços"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#about",
              className: "text-xl font-medium",
              onClick: () => setMobileMenuOpen(false),
              children: "Sobre"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#team",
              className: "text-xl font-medium",
              onClick: () => setMobileMenuOpen(false),
              children: "Equipe"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setMobileMenuOpen(false),
              children: /* @__PURE__ */ jsx(Button, { variant: "default", className: "bg-blue-900 text-white hover:bg-blue-800 w-full", children: "Contato" })
            }
          )
        ] }) })
      ]
    }
  );
};
const Hero = () => {
  const headingRef = useRef(null);
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headingRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = headingRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      headingRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
      setMousePosition({ x: clientX, y: clientY });
    };
    const handleMouseLeave = () => {
      if (!headingRef.current) return;
      headingRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    };
    const element = headingRef.current;
    const heroElement = heroRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (heroElement) {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  useEffect(() => {
    const createParticles = () => {
      const particlesContainer = document.querySelector(".hero-particles");
      if (!particlesContainer) return;
      particlesContainer.innerHTML = "";
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "tech-dot";
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5}`;
        particle.style.animationDuration = `${3 + Math.random() * 5}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particlesContainer.appendChild(particle);
      }
    };
    createParticles();
    const revealElements = document.querySelectorAll(".hero-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach((el) => observer.observe(el));
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 pointer-events-none hero-particles" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 bottom-1/2 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-900/10 to-blue-400/5 pointer-events-none parallax parallax-slow",
        style: {
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.2)`
        }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -left-40 -top-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-400/5 to-blue-900/10 pointer-events-none parallax parallax-medium",
        style: {
          transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px) scale(1.1)`
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl font-medium mb-6 hero-reveal animate-fade-up opacity-0 text-blue-800", style: { animationDelay: "0.2s", animationFillMode: "forwards" }, children: "AGÊNCIA ESPECIALIZADA EM MARKETING DIGITAL" }) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden mb-10", children: /* @__PURE__ */ jsxs(
        "h1",
        {
          ref: headingRef,
          className: "heading-xl text-gradient hero-reveal animate-fade-up opacity-0 transition-all duration-300 ease-out",
          style: { animationDelay: "0.4s", animationFillMode: "forwards", transformStyle: "preserve-3d" },
          children: [
            "TRANSFORMAMOS",
            /* @__PURE__ */ jsx("br", {}),
            "IDEIAS EM",
            /* @__PURE__ */ jsx("br", {}),
            "RESULTADOS"
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl max-w-2xl mb-10 hero-reveal animate-fade-up opacity-0", style: { animationDelay: "0.6s", animationFillMode: "forwards" }, children: "Desenvolvemos estratégias avançadas de marketing digital e tráfego pago que conectam marcas com seu público-alvo e impulsionam seu crescimento." }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 hero-reveal animate-fade-up opacity-0", style: { animationDelay: "0.8s", animationFillMode: "forwards" }, children: [
        /* @__PURE__ */ jsxs(Button, { className: "bg-blue-900 text-white hover:bg-blue-800 text-lg py-6 px-8 group relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Nosso Trabalho" }),
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-blue-700 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" })
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "text-lg py-6 px-8 border-blue-900 text-blue-900 hover:bg-blue-50 relative overflow-hidden group", children: [
          /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Sobre Nós" }),
          /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-blue-100 transform scale-y-0 origin-bottom transition-transform group-hover:scale-y-100" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute right-10 top-1/3 w-32 h-32 opacity-60 pointer-events-none parallax parallax-fast",
          style: {
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          },
          children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl blur-xl opacity-30 animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-2 border border-blue-400/30 rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full animate-ping" }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none hidden lg:block", children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-gradient-to-tr from-blue-700 via-blue-500 to-transparent rounded-full blur-3xl" }) })
    ] }) })
  ] });
};
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const services = [
  {
    icon: /* @__PURE__ */ jsx(Megaphone, { className: "h-10 w-10" }),
    title: "Tráfego Pago",
    description: "Estratégias avançadas de anúncios em Google Ads, Meta Ads e outras plataformas para maximizar seu retorno sobre investimento."
  },
  {
    icon: /* @__PURE__ */ jsx(Lightbulb, { className: "h-10 w-10" }),
    title: "Criação de Criativos",
    description: "Design de materiais publicitários impactantes otimizados para conversão que transformam visualizações em vendas reais."
  },
  {
    icon: /* @__PURE__ */ jsx(Globe, { className: "h-10 w-10" }),
    title: "Criação de Sites",
    description: "Desenvolvimento de websites responsivos, otimizados para SEO e focados em conversão para fortalecer sua presença digital."
  },
  {
    icon: /* @__PURE__ */ jsx(Bot, { className: "h-10 w-10" }),
    title: "Automação de Marketing",
    description: "Sistemas inteligentes que automatizam processos de marketing e nutrem leads até a conversão final, economizando tempo e recursos."
  },
  {
    icon: /* @__PURE__ */ jsx(BarChart, { className: "h-10 w-10" }),
    title: "Gestão de Campanhas",
    description: "Gerenciamento estratégico de campanhas publicitárias com análises avançadas e otimização contínua para resultados mensuráveis."
  },
  {
    icon: /* @__PURE__ */ jsx(Code, { className: "h-10 w-10" }),
    title: "Produtos Validados",
    description: "Desenvolvimento e validação de produtos digitais com base em pesquisa de mercado, análise de dados e testes com usuários reais."
  }
];
const Services = () => {
  const serviceCardsRef = useRef([]);
  const marqueeRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.1 });
    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    const handleMouseMove = (e, card) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) translateZ(10px)`;
    };
    const handleMouseLeave = (card) => {
      card.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateZ(0)";
    };
    serviceCardsRef.current.forEach((card) => {
      if (!card) return;
      card.addEventListener("mousemove", (e) => handleMouseMove(e, card));
      card.addEventListener("mouseleave", () => handleMouseLeave(card));
    });
    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (!card) return;
        observer.unobserve(card);
        card.removeEventListener("mousemove", (e) => handleMouseMove(e, card));
        card.removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "services", className: "py-24 bg-blue-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse", style: { animationDelay: "1.5s" } }),
    /* @__PURE__ */ jsx("div", { className: "particles-container", children: [...Array(15)].map((_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "particle",
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          "--move-x": `${(Math.random() - 0.5) * 100}px`,
          "--move-y": `${(Math.random() - 0.5) * 100}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${15 + Math.random() * 15}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 reveal", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium mb-3", children: "NOSSOS SERVIÇOS" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-lg mb-4", children: "Soluções Completas para seu Negócio" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-900/70 max-w-3xl mx-auto", children: "Oferecemos estratégias personalizadas e eficientes para impulsionar sua presença digital e gerar resultados mensuráveis" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => /* @__PURE__ */ jsx(
        "div",
        {
          ref: (el) => serviceCardsRef.current[index] = el,
          className: "reveal transition-all duration-500",
          style: {
            transitionDelay: `${index * 0.1}s`,
            opacity: 0,
            transform: "translateY(20px)"
          },
          children: /* @__PURE__ */ jsx(Card, { className: "border-none shadow-lg transition-all duration-300 hover:shadow-xl group glow-border h-full", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 relative", children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6 text-blue-800 group-hover:text-blue-600 transition-colors", children: service.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-900/70", children: service.description }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-100/50 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100" })
          ] }) })
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 overflow-hidden relative reveal", children: /* @__PURE__ */ jsxs("div", { ref: marqueeRef, className: "py-10 bg-blue-900 text-white rounded-lg shadow-lg relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-900 to-transparent z-10" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-900 to-transparent z-10" }),
        /* @__PURE__ */ jsxs("div", { className: "whitespace-nowrap animate-marquee flex items-center", children: [
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "CRIATIVO" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "•" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "ESTRATÉGICO" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "•" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "INOVADOR" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "•" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "RESULTADOS" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "•" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "CRIATIVO" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "•" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "ESTRATÉGICO" }),
          /* @__PURE__ */ jsx("span", { className: "text-5xl md:text-7xl font-extrabold mx-6", children: "•" })
        ] })
      ] }) })
    ] })
  ] });
};
const projects = [
  {
    id: 1,
    title: "Campanha Digital Imobiliária",
    category: "Tráfego Pago",
    imageUrl: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=1000",
    description: "Estratégia de anúncios para empresa do setor imobiliário com ROI de 300% em 3 meses."
  },
  {
    id: 2,
    title: "E-commerce de Moda",
    category: "Marketing Digital",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000",
    description: "Automação de marketing e tráfego para loja online com aumento de 220% nas vendas."
  },
  {
    id: 3,
    title: "B2B Tech Solutions",
    category: "Criação de Site",
    imageUrl: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=1000",
    description: "Site institucional e estratégia de geração de leads B2B com conversão de 15%."
  },
  {
    id: 4,
    title: "Nutrição Especializada",
    category: "Produto Validado",
    imageUrl: "https://images.unsplash.com/photo-1571292098320-997aa03a5d19?q=80&w=1000",
    description: "Desenvolvimento e validação de produto digital para clínica com 1.200 vendas no lançamento."
  }
];
const additionalProjects = [
  {
    id: 5,
    title: "SaaS de Gestão Financeira",
    category: "Tráfego Pago",
    imageUrl: "https://images.unsplash.com/photo-1593510987185-1ec2256148f3?q=80&w=1000",
    description: "Campanha de aquisição de usuários para plataforma SaaS com CPA 40% abaixo do benchmark."
  },
  {
    id: 6,
    title: "Clínica Médica Especializada",
    category: "Marketing Digital",
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1000",
    description: "Estratégia completa de presença digital aumentando agendamentos em 180% em 6 meses."
  }
];
const allProjects = [...projects, ...additionalProjects];
const Work = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const projectRefs = useRef([]);
  const filters = ["all", "Tráfego Pago", "Marketing Digital", "Criação de Site", "Produto Validado"];
  const filteredProjects = activeFilter === "all" ? allProjects : allProjects.filter((project) => project.category === activeFilter);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.1 });
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);
  return /* @__PURE__ */ jsxs("section", { id: "work", className: "py-24 relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 bottom-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-start mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium mb-3", children: "NOSSO PORTFÓLIO" }),
          /* @__PURE__ */ jsx("h2", { className: "heading-lg mb-6", children: "Projetos que Geram Resultados" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-900/70 max-w-xl", children: "Trabalhamos com marcas de diversos setores para criar estratégias digitais que trazem resultados reais, mensuráveis e escaláveis." })
        ] }),
        /* @__PURE__ */ jsxs(Button, { className: "mt-8 lg:mt-0 bg-blue-900 text-white hover:bg-blue-800 group reveal", style: { transitionDelay: "0.2s" }, children: [
          "Ver Todos os Projetos",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-4 mb-12 reveal", style: { transitionDelay: "0.3s" }, children: filters.map((filter, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setActiveFilter(filter),
          className: `px-5 py-2 rounded-full transition-all duration-300 ${activeFilter === filter ? "bg-blue-900 text-white" : "bg-blue-50 text-blue-900 hover:bg-blue-100"}`,
          children: filter === "all" ? "Todos" : filter
        },
        index
      )) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.map((project, index) => /* @__PURE__ */ jsxs(
        "div",
        {
          ref: (el) => projectRefs.current[index] = el,
          className: "group relative overflow-hidden rounded-xl shadow-lg reveal",
          style: { transitionDelay: `${index * 0.1 + 0.4}s`, opacity: 0, transform: "translateY(20px)" },
          onMouseEnter: () => setHoveredId(project.id),
          onMouseLeave: () => setHoveredId(null),
          children: [
            /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] w-full overflow-hidden", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: project.imageUrl,
                alt: project.title,
                className: `w-full h-full object-cover transition-transform duration-700 ${hoveredId === project.id ? "scale-110" : "scale-100"}`
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/90 to-blue-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: [
              /* @__PURE__ */ jsx("p", { className: "text-blue-300 mb-2 font-medium tracking-wide", children: project.category }),
              /* @__PURE__ */ jsx("h3", { className: "text-white text-2xl font-bold mb-3", children: project.title }),
              /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-6", children: project.description }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "text-white border-white hover:bg-white hover:text-blue-900 group", children: [
                "Ver Projeto",
                /* @__PURE__ */ jsx(ExternalLink, { className: "ml-2 h-4 w-4 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-b-xl relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-1 h-full bg-blue-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" }),
              /* @__PURE__ */ jsxs("div", { className: "pl-3", children: [
                /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium", children: project.category }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-900", children: project.title })
              ] })
            ] })
          ]
        },
        project.id
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-24 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-10 text-white reveal", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold mb-4", children: "Pronto para transformar seu negócio digital?" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-6", children: "Descubra como nossa abordagem estratégica pode ajudar sua empresa a atingir novos patamares de sucesso digital." }),
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "text-white border-white hover:bg-white hover:text-blue-900 group", children: [
            "Agende uma Consulta Gratuita",
            /* @__PURE__ */ jsx(ChevronRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-20 h-20 bg-blue-500/30 rounded-full filter blur-xl" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full mr-3" }),
              /* @__PURE__ */ jsx("p", { children: "Análise completa do seu negócio" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full mr-3" }),
              /* @__PURE__ */ jsx("p", { children: "Estratégia personalizada" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full mr-3" }),
              /* @__PURE__ */ jsx("p", { children: "Implementação por especialistas" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-400 rounded-full mr-3" }),
              /* @__PURE__ */ jsx("p", { children: "Resultados mensuráveis" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] })
  ] });
};
const About = () => {
  return /* @__PURE__ */ jsxs("section", { id: "about", className: "py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "10%", left: "5%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "20%", left: "25%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "50%", left: "10%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "80%", left: "15%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "30%", right: "5%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "70%", right: "20%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-line", style: { top: "15%", left: 0, right: 0 } }),
      /* @__PURE__ */ jsx("div", { className: "tech-line", style: { top: "45%", left: 0, right: 0 } }),
      /* @__PURE__ */ jsx("div", { className: "tech-line", style: { top: "75%", left: 0, right: 0 } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-300 font-medium mb-3", children: "SOBRE NÓS" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-lg mb-8", children: "Somos uma equipe de especialistas em marketing digital e tráfego pago" }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "text-white border-white hover:bg-white hover:text-blue-900 group", children: [
          "Nossa Metodologia",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl", children: "Fundada em 2020, nossa agência é especializada em soluções completas de marketing digital que conectam marcas com seu público-alvo através de estratégias inovadoras e dados." }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-200", children: "Acreditamos que o marketing eficiente vai além da estética — trata-se de resolver problemas e criar experiências significativas. Nossa equipe combina pensamento estratégico, talento criativo e expertise técnica para entregar projetos que superam expectativas e geram ROI mensurável." }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 pt-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-5 rounded-lg backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold mb-2", children: "50+" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-300", children: "Clientes Satisfeitos" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-5 rounded-lg backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold mb-2", children: "120+" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-300", children: "Projetos Concluídos" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-5 rounded-lg backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold mb-2", children: "15+" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-300", children: "Especialistas" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-5 rounded-lg backdrop-blur-sm", children: [
            /* @__PURE__ */ jsx("p", { className: "text-5xl font-bold mb-2", children: "8+" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-300", children: "Prêmios do Setor" })
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const team = [
  {
    name: "Alexandre Moreira",
    role: "Diretor Criativo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774"
  },
  {
    name: "Carla Santos",
    role: "Especialista em Tráfego",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776"
  },
  {
    name: "Marcos Lima",
    role: "Diretor Técnico",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774"
  },
  {
    name: "Olivia Costa",
    role: "Estrategista de Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761"
  }
];
const Team = () => {
  return /* @__PURE__ */ jsxs("section", { id: "team", className: "py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium mb-3", children: "CONHEÇA NOSSA EQUIPE" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-lg mb-6", children: "AAAAAAAAA Os Talentos Por Trás de Nossa Agência" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-900/70 max-w-2xl mx-auto", children: "Nossa equipe diversificada reúne expertise em design, tecnologia e marketing para criar trabalhos excepcionais que geram resultados." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: team.map((member, index) => /* @__PURE__ */ jsx(Card, { className: "border-none overflow-hidden group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 bg-gradient-to-b from-white to-blue-50", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-blue-900", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-700", children: member.role }),
          /* @__PURE__ */ jsx("div", { className: "w-10 h-1 bg-blue-700 mt-2 mb-2 transition-all duration-300 group-hover:w-20" })
        ] })
      ] }) }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 text-center glass p-10 rounded-xl max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-6 text-blue-900", children: "Quer fazer parte da nossa equipe?" }),
        /* @__PURE__ */ jsxs("a", { href: "#", className: "text-lg font-semibold text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center gap-2 group", children: [
          "Ver Vagas Abertas",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
        ] })
      ] })
    ] })
  ] });
};
const testimonials = [
  {
    quote: "A estratégia de tráfego desenvolvida pela agência aumentou nossas vendas em 140% em apenas 3 meses. Sem dúvidas, o melhor investimento que fizemos.",
    author: "Mariana Silva",
    position: "Diretora de Marketing, TechSolution",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=774"
  },
  {
    quote: "Os criativos desenvolvidos pela equipe transformaram completamente a percepção da nossa marca. Nosso engajamento nas redes sociais cresceu exponencialmente.",
    author: "Carlos Mendes",
    position: "CEO, Inovare E-commerce",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=774"
  },
  {
    quote: "O site que criaram para nossa empresa não só ficou visualmente impressionante como também multiplicou nossa taxa de conversão por 3. Extremamente profissionais.",
    author: "Renata Alves",
    position: "Diretora Executiva, ImobInvest",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=774"
  }
];
const Testimonials = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    }, { threshold: 0.1 });
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const depth = (index + 1) * 0.2;
        card.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px) rotateY(${moveX * depth}deg) rotateX(${-moveY * depth}deg)`;
      });
    };
    const handleMouseLeave = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.style.transform = "translate(0, 0) rotateY(0) rotateX(0)";
      });
    };
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "testimonials", className: "py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "particles-container", children: [...Array(15)].map((_, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "particle",
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          "--move-x": `${(Math.random() - 0.5) * 100}px`,
          "--move-y": `${(Math.random() - 0.5) * 100}px`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${15 + Math.random() * 15}s`
        }
      },
      i
    )) }),
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium mb-3", children: "O QUE NOSSOS CLIENTES DIZEM" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-lg mb-6", children: "Resultados que Falam por Si" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-900/70 max-w-2xl mx-auto", children: "Trabalhamos com empresas de diversos segmentos para criar estratégias digitais que geram impacto real nos negócios." })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: containerRef, className: "perspective-1000 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(
        "div",
        {
          ref: (el) => cardsRef.current[index] = el,
          className: "reveal transition-all duration-300",
          style: { transitionDelay: `${index * 0.1}s` },
          children: /* @__PURE__ */ jsx(Card, { className: "glow-border h-full card-hover", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 flex flex-col h-full", children: [
            /* @__PURE__ */ jsx(Quote, { className: "text-blue-500 mb-6 h-10 w-10" }),
            /* @__PURE__ */ jsxs("p", { className: "text-blue-900 mb-6 flex-grow italic", children: [
              '"',
              testimonial.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("div", { className: "mr-4", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: testimonial.image,
                  alt: testimonial.author,
                  className: "w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-blue-900", children: testimonial.author }),
                /* @__PURE__ */ jsx("p", { className: "text-blue-700 text-sm", children: testimonial.position })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) })
    ] })
  ] });
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Contact = () => {
  const { toast: toast2 } = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast2({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais breve possível."
    });
  };
  return /* @__PURE__ */ jsxs("section", { id: "contact", className: "py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-30" }),
    /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium mb-3", children: "ENTRE EM CONTATO" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-lg mb-6", children: "Vamos Começar um Projeto Juntos" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-900/70", children: "Tem um projeto em mente? Adoraríamos ouvir sobre ele. Conte-nos o que você está procurando e entraremos em contato em até 24 horas." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6 bg-white p-8 rounded-xl shadow-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "font-medium", children: "Nome" }),
            /* @__PURE__ */ jsx(Input, { id: "name", placeholder: "Seu nome", required: true, className: "border-blue-200 focus:border-blue-500" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "font-medium", children: "Email" }),
            /* @__PURE__ */ jsx(Input, { id: "email", type: "email", placeholder: "Seu email", required: true, className: "border-blue-200 focus:border-blue-500" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "font-medium", children: "Assunto" }),
          /* @__PURE__ */ jsx(Input, { id: "subject", placeholder: "Consulta de projeto", required: true, className: "border-blue-200 focus:border-blue-500" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "font-medium", children: "Mensagem" }),
          /* @__PURE__ */ jsx(Textarea, { id: "message", placeholder: "Conte-nos sobre seu projeto", rows: 6, required: true, className: "border-blue-200 focus:border-blue-500" })
        ] }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full bg-blue-900 text-white hover:bg-blue-800 py-6 text-lg", children: "Enviar Mensagem" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-blue-900", children: "Email" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-900/70", children: "contato@suaagencia.com.br" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-blue-900", children: "Telefone" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-900/70", children: "+55 (35) 99975-7076" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-blue-900", children: "Escritório" }),
          /* @__PURE__ */ jsxs("p", { className: "text-blue-900/70", children: [
            "Av. Paulista, 1000",
            /* @__PURE__ */ jsx("br", {}),
            "São Paulo, SP, 01310-100"
          ] })
        ] })
      ] })
    ] }) })
  ] });
};
const Footer = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-blue-950 text-white py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-start pb-16 border-b border-blue-900", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 lg:mb-0", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-6", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png",
              alt: "Logo da Agência",
              className: "h-12 w-auto object-contain mr-2"
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "AGÊNCIA" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-300 max-w-md", children: "Criando estratégias digitais inovadoras que conectam marcas com seu público e geram resultados reais." }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-300 mt-4", children: /* @__PURE__ */ jsx("a", { href: "tel:+5535999757076", className: "hover:text-white transition-colors", children: "+55 (35) 99975-7076" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-10", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Links" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#work", className: "text-blue-300 hover:text-white transition-colors", children: "Projetos" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "text-blue-300 hover:text-white transition-colors", children: "Serviços" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", className: "text-blue-300 hover:text-white transition-colors", children: "Sobre" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#team", className: "text-blue-300 hover:text-white transition-colors", children: "Equipe" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-blue-300 hover:text-white transition-colors", children: "Contato" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Serviços" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "text-blue-300 hover:text-white transition-colors", children: "Tráfego Pago" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "text-blue-300 hover:text-white transition-colors", children: "Criativos" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "text-blue-300 hover:text-white transition-colors", children: "Automações" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#services", className: "text-blue-300 hover:text-white transition-colors", children: "Websites" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Social" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-300 hover:text-white transition-colors", children: "Instagram" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-300 hover:text-white transition-colors", children: "Facebook" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-300 hover:text-white transition-colors", children: "LinkedIn" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-blue-300 hover:text-white transition-colors", children: "WhatsApp" }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center pt-8", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-blue-400 mb-4 md:mb-0", children: [
        "© ",
        currentYear,
        " Agência de Marketing Digital. Todos os direitos reservados."
      ] }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#",
          className: "group inline-flex items-center text-blue-300 hover:text-white transition-colors",
          children: [
            "Voltar ao topo",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 transform rotate-[-45deg] group-hover:translate-y-[-3px] group-hover:translate-x-[3px] transition-transform" })
          ]
        }
      )
    ] })
  ] }) });
};
const partners = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1920px-Meta_Platforms_Inc._logo.svg.png"
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png"
  }
];
const Partners = () => {
  return /* @__PURE__ */ jsxs("section", { id: "partners", className: "py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-medium mb-3", children: "PARCERIAS DE SUCESSO" }),
        /* @__PURE__ */ jsx("h2", { className: "heading-md mb-6", children: "Empresas que Confiam em Nosso Trabalho" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center", children: partners.map((partner, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "flex justify-center",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: partner.logo,
              alt: partner.name,
              className: "h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            }
          )
        },
        index
      )) })
    ] })
  ] });
};
const CountUp = ({ end, duration = 2e3, suffix = "" }) => {
  const [count2, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);
    return () => {
      clearInterval(timer);
    };
  }, [end, duration, isVisible]);
  return /* @__PURE__ */ jsxs("div", { ref: countRef, children: [
    count2,
    suffix
  ] });
};
const Stats = () => {
  return /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-r from-blue-900 to-blue-950 py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "10%", left: "15%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "30%", left: "45%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "70%", left: "75%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "20%", right: "10%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-dot", style: { top: "60%", right: "30%" } }),
      /* @__PURE__ */ jsx("div", { className: "tech-line", style: { top: "30%", left: 0, right: 0 } }),
      /* @__PURE__ */ jsx("div", { className: "tech-line", style: { top: "70%", left: 0, right: 0 } })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold mb-2 text-white", children: /* @__PURE__ */ jsx(CountUp, { end: 500, suffix: "+" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-200 font-medium", children: "Campanhas Realizadas" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal", style: { transitionDelay: "0.1s" }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold mb-2 text-white", children: /* @__PURE__ */ jsx(CountUp, { end: 2, suffix: "M+" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-200 font-medium", children: "Leads Gerados" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal", style: { transitionDelay: "0.2s" }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold mb-2 text-white", children: /* @__PURE__ */ jsx(CountUp, { end: 15, suffix: "M+" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-200 font-medium", children: "ROI Gerado" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal", style: { transitionDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold mb-2 text-white", children: /* @__PURE__ */ jsx(CountUp, { end: 98, suffix: "%" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-200 font-medium", children: "Clientes Satisfeitos" })
      ] })
    ] }) })
  ] });
};
const SITE_URL = "https://clicknex.com.br";
const SITE_NAME = "ClickNex";
const DEFAULT_OG_IMAGE = "/og/clicknex-default.jpg";
const DEFAULT_LOCALE = "pt_BR";
const BRAND_PHONE = "+5535999757076";
const BRAND_EMAIL = "comercial@clicknex.com.br";
const BRAND_WHATSAPP = "5535999757076";
const LEGAL_NAME = "BERTINI E MEIRELES SERVIÇOS LTDA";
const TAX_ID = "61.754.617/0001-97";
const BRAND_ADDRESS = {
  street: "R. Comandante Nelio, 299",
  neighborhood: "Jardim Floresta",
  city: "Lavras",
  state: "MG",
  postalCode: "37206-656",
  country: "BR"
};
const BRAND_GEO = { lat: -21.2431, lng: -44.9997 };
const SOCIAL_LINKS = [
  "https://www.instagram.com/clicknex",
  "https://www.facebook.com/clicknex",
  "https://www.linkedin.com/company/clicknex"
];
const Seo = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd = [],
  noindex = false,
  keywords = []
}) => {
  const { pathname } = useLocation();
  const canonicalUrl = canonical ?? `${SITE_URL}${pathname}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;
  return /* @__PURE__ */ jsxs(Helmet, { children: [
    /* @__PURE__ */ jsx("title", { children: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: description }),
    keywords.length > 0 && /* @__PURE__ */ jsx("meta", { name: "keywords", content: keywords.join(", ") }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: noindex ? "noindex, nofollow" : "index, follow" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: absoluteOgImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:alt", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: SITE_NAME }),
    /* @__PURE__ */ jsx("meta", { property: "og:locale", content: DEFAULT_LOCALE }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: fullTitle }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: absoluteOgImage }),
    jsonLd.map((schema, i) => /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schema) }, i))
  ] });
};
function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    taxID: TAX_ID,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}${DEFAULT_OG_IMAGE}`
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND_PHONE,
      email: BRAND_EMAIL,
      contactType: "customer service",
      availableLanguage: "Portuguese"
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_ADDRESS.street,
      addressLocality: BRAND_ADDRESS.city,
      addressRegion: BRAND_ADDRESS.state,
      postalCode: BRAND_ADDRESS.postalCode,
      addressCountry: BRAND_ADDRESS.country
    },
    sameAs: SOCIAL_LINKS
  };
}
function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description: "Agência de marketing digital especializada em tráfego pago, criação de sites e automações para negócios locais e clínicas médicas.",
    url: SITE_URL,
    telephone: BRAND_PHONE,
    email: BRAND_EMAIL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND_ADDRESS.street,
      addressLocality: BRAND_ADDRESS.city,
      addressRegion: BRAND_ADDRESS.state,
      postalCode: BRAND_ADDRESS.postalCode,
      addressCountry: BRAND_ADDRESS.country
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND_GEO.lat,
      longitude: BRAND_GEO.lng
    },
    areaServed: [
      { "@type": "City", name: "Lavras" },
      { "@type": "State", name: "Minas Gerais" },
      { "@type": "Country", name: "Brasil" }
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00"
      }
    ],
    parentOrganization: { "@id": `${SITE_URL}/#organization` }
  };
}
function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}
function serviceLd(cfg) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: cfg.name,
    description: cfg.description,
    url: cfg.url.startsWith("http") ? cfg.url : `${SITE_URL}${cfg.url}`,
    image: cfg.image ?? `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Brasil" },
    inLanguage: "pt-BR"
  };
}
function faqPageLd(faqs2) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs2.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a
      }
    }))
  };
}
function breadcrumbLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}
function articleLd(cfg) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cfg.headline,
    description: cfg.description,
    url: cfg.url.startsWith("http") ? cfg.url : `${SITE_URL}${cfg.url}`,
    image: cfg.image ?? `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    datePublished: cfg.publishedAt,
    dateModified: cfg.updatedAt ?? cfg.publishedAt,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": cfg.url.startsWith("http") ? cfg.url : `${SITE_URL}${cfg.url}`
    },
    inLanguage: "pt-BR"
  };
}
const Index = () => {
  useEffect(() => {
    const observeReveal = () => {
      const elements = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((el) => observer.observe(el));
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };
    const timeout = setTimeout(observeReveal, 100);
    return () => clearTimeout(timeout);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Agência de Marketing Digital em Lavras-MG",
        description: "ClickNex — agência de marketing digital especializada em tráfego pago, Google Ads, Meta Ads, criação de sites e automações. Transformamos ideias em resultados reais.",
        keywords: ["agência marketing digital", "tráfego pago", "google ads", "meta ads", "criação de sites", "automação marketing", "lavras mg"],
        jsonLd: [
          organizationLd(),
          localBusinessLd(),
          websiteLd(),
          breadcrumbLd([{ name: "Home", url: `${SITE_URL}/` }])
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Partners, {}),
      /* @__PURE__ */ jsx(Stats, {}),
      /* @__PURE__ */ jsx(Work, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Team, {}),
      /* @__PURE__ */ jsx(Contact, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const Clinicas = () => {
  const { toast: toast2 } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const heroRef = useRef(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    clinica: "",
    especialidade: "",
    mensagem: ""
  });
  const [whatsappFormData, setWhatsappFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    clinica: "",
    especialidade: ""
  });
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    const observeReveal = () => {
      const elements = document.querySelectorAll(".reveal-clinicas");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible-clinicas");
          }
        });
      }, { threshold: 0.1 });
      elements.forEach((el) => observer.observe(el));
      return () => elements.forEach((el) => observer.unobserve(el));
    };
    const timeout = setTimeout(observeReveal, 100);
    return () => clearTimeout(timeout);
  }, []);
  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector(".particles-hero");
      if (!container) return;
      container.innerHTML = "";
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "particle-dot";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;
        container.appendChild(particle);
      }
    };
    createParticles();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um diagnóstico gratuito.%0A%0A*Nome:* ${formData.nome}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A*Clínica:* ${formData.clinica}%0A*Especialidade:* ${formData.especialidade}${formData.mensagem ? `%0A*Mensagem:* ${formData.mensagem}` : ""}`;
    window.open(`https://wa.me/5535999757076?text=${message}`, "_blank");
    toast2({
      title: "Redirecionando para o WhatsApp!",
      description: "Você será atendido em instantes."
    });
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      clinica: "",
      especialidade: "",
      mensagem: ""
    });
  };
  const resultados = [
    { numero: "340%", descricao: "Aumento médio em agendamentos", icon: /* @__PURE__ */ jsx(Calendar, { className: "w-8 h-8" }) },
    { numero: "R$2.8M", descricao: "Faturamento gerado para clínicas", icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8" }) },
    { numero: "127+", descricao: "Clínicas atendidas com sucesso", icon: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8" }) },
    { numero: "4.9", descricao: "Avaliação média dos clientes", icon: /* @__PURE__ */ jsx(Star, { className: "w-8 h-8" }) }
  ];
  const servicos2 = [
    {
      icon: /* @__PURE__ */ jsx(Megaphone, { className: "w-10 h-10" }),
      titulo: "Tráfego Pago",
      descricao: "Estratégias avançadas de anúncios em Google Ads, Meta Ads e outras plataformas para maximizar seu retorno sobre investimento."
    },
    {
      icon: /* @__PURE__ */ jsx(Lightbulb, { className: "w-10 h-10" }),
      titulo: "Criação de Criativos",
      descricao: "Design de materiais publicitários impactantes otimizados para conversão que transformam visualizações em vendas reais."
    },
    {
      icon: /* @__PURE__ */ jsx(Globe, { className: "w-10 h-10" }),
      titulo: "Criação de Sites",
      descricao: "Desenvolvimento de websites responsivos, otimizados para SEO e focados em conversão para fortalecer sua presença digital."
    },
    {
      icon: /* @__PURE__ */ jsx(Bot, { className: "w-10 h-10" }),
      titulo: "Automação de Marketing",
      descricao: "Sistemas inteligentes que automatizam processos de marketing e nutrem leads até a conversão final, economizando tempo e recursos."
    },
    {
      icon: /* @__PURE__ */ jsx(BarChart3, { className: "w-10 h-10" }),
      titulo: "Gestão de Campanhas",
      descricao: "Gerenciamento estratégico de campanhas publicitárias com análises avançadas e otimização contínua para resultados mensuráveis."
    },
    {
      icon: /* @__PURE__ */ jsx(Code, { className: "w-10 h-10" }),
      titulo: "Produtos Validados",
      descricao: "Desenvolvimento e validação de produtos digitais com base em pesquisa de mercado, análise de dados e testes com usuários reais."
    },
    {
      icon: /* @__PURE__ */ jsx(CalendarCheck, { className: "w-10 h-10" }),
      titulo: "Sistema de Agendamentos",
      descricao: "Plataforma completa de agendamento online para médicos e clínicas, com confirmação automática, lembretes e gestão de agenda integrada."
    }
  ];
  const depoimentos = [
    {
      nome: "Dra. Marina Santos",
      cargo: "Dermatologista - Clínica Derma Care",
      texto: "Em 3 meses, triplicamos o número de consultas. A equipe entende perfeitamente as particularidades do marketing médico e respeita todas as normas do CFM.",
      avatar: "MS"
    },
    {
      nome: "Dr. Ricardo Oliveira",
      cargo: "Ortopedista - Instituto Ortho Plus",
      texto: "O retorno sobre investimento superou todas as expectativas. Hoje temos uma agenda cheia e pacientes qualificados que realmente precisam dos nossos serviços.",
      avatar: "RO"
    },
    {
      nome: "Dra. Camila Ferreira",
      cargo: "Ginecologista - Centro Médico Vida",
      texto: "Profissionalismo e resultados reais. A transparência nos relatórios e o suporte dedicado fazem toda a diferença para quem não tem tempo de acompanhar tudo.",
      avatar: "CF"
    }
  ];
  const diferenciais = [
    { icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }), texto: "Conformidade total com normas do CFM e ANVISA" },
    { icon: /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6" }), texto: "Suporte dedicado em horário comercial" },
    { icon: /* @__PURE__ */ jsx(Target, { className: "w-6 h-6" }), texto: "Estratégias personalizadas por especialidade" },
    { icon: /* @__PURE__ */ jsx(BarChart3, { className: "w-6 h-6" }), texto: "Relatórios transparentes e métricas claras" }
  ];
  const especialidades = [
    "Dermatologia",
    "Ortopedia",
    "Cardiologia",
    "Ginecologia",
    "Pediatria",
    "Oftalmologia",
    "Odontologia",
    "Psiquiatria",
    "Nutrição",
    "Fisioterapia",
    "Clínica Geral",
    "Outra"
  ];
  const clinicasFaqs = [
    { q: "Como a ClickNex ajuda minha clínica a conseguir mais pacientes?", a: "Criamos campanhas de tráfego pago no Google Ads e Meta Ads direcionadas para pessoas que buscam ativamente pelos serviços da sua clínica, combinadas com landing pages otimizadas para conversão." },
    { q: "A ClickNex trabalha com marketing médico dentro das normas do CFM e ANVISA?", a: "Sim. Todas as nossas estratégias para clínicas seguem rigorosamente as diretrizes do CFM e ANVISA, garantindo uma comunicação ética e eficaz." },
    { q: "Quanto tempo leva para ver resultados?", a: "As primeiras conversões aparecem em média entre 7 e 21 dias após o início das campanhas. Resultados consolidados com ROI mensurável costumam se solidificar entre 60 e 90 dias." },
    { q: "O sistema de agendamentos é integrado com o meu software de gestão?", a: "Desenvolvemos integrações customizadas com os principais softwares de gestão de clínicas. O sistema também funciona de forma independente com confirmações automáticas via WhatsApp e SMS." },
    { q: "Qual é o investimento mínimo para começar?", a: "Trabalhamos com planos a partir de R$1.500/mês. Solicite um diagnóstico gratuito para receber uma proposta personalizada para o seu tipo de clínica." }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Marketing Digital para Clínicas Médicas | Aumente seus Agendamentos em 340%",
        description: "ClickNex especialista em marketing para clínicas médicas e consultórios. Tráfego pago ético (CFM/ANVISA), sistema de agendamentos e automações. Diagnóstico gratuito.",
        keywords: ["marketing para clínicas", "tráfego pago clínicas médicas", "google ads médico", "marketing médico cfm", "aumentar agendamentos clínica", "sistema agendamento médico"],
        jsonLd: [
          organizationLd(),
          localBusinessLd(),
          serviceLd({
            name: "Marketing Digital para Clínicas Médicas",
            description: "Estratégias completas de marketing digital para clínicas médicas: tráfego pago, criação de sites, automações e sistema de agendamentos com conformidade CFM/ANVISA.",
            url: `${SITE_URL}/`
          }),
          faqPageLd(clinicasFaqs),
          breadcrumbLd([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Clínicas Médicas", url: `${SITE_URL}/` }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx("style", { children: `
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(30, 64, 175, 0.3); }
          50% { box-shadow: 0 0 40px rgba(30, 64, 175, 0.6); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .particle-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float-particle 4s ease-in-out infinite;
        }
        .reveal-clinicas {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-visible-clinicas {
          opacity: 1;
          transform: translateY(0);
        }
        .card-hover-3d {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .card-hover-3d:hover {
          transform: translateY(-8px) rotateX(2deg);
          box-shadow: 0 25px 50px -12px rgba(30, 64, 175, 0.25);
        }
        .gradient-text {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }
        .glow-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .whatsapp-float {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .hero-animate {
          animation: slide-up 1s ease-out forwards;
        }
        .hero-animate-delay-1 {
          animation: slide-up 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        .hero-animate-delay-2 {
          animation: slide-up 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        .hero-animate-delay-3 {
          animation: slide-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .form-animate {
          animation: slide-in-right 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .stat-card {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .parallax-slow {
          transition: transform 0.3s ease-out;
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-card-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .floating-stat {
          animation: float-card 4s ease-in-out infinite;
        }
        .floating-stat-delayed {
          animation: float-card-delayed 4s ease-in-out 1s infinite;
        }
        .floating-stat-delayed-2 {
          animation: float-card 4s ease-in-out 2s infinite;
        }
      ` }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setWhatsappModalOpen(true),
          className: "fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 whatsapp-float hover:scale-110",
          "aria-label": "Contato via WhatsApp",
          children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-8 h-8 text-white" })
        }
      ),
      whatsappModalOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm",
            onClick: () => setWhatsappModalOpen(false)
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[70] flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-md animate-[scale-in_0.2s_ease-out] overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-500 to-green-600 p-5 relative", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setWhatsappModalOpen(false),
                className: "absolute top-4 right-4 text-white/80 hover:text-white transition-colors",
                children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-white/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-6 h-6 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Diagnóstico Gratuito" }),
                /* @__PURE__ */ jsx("p", { className: "text-green-100 text-sm", children: "Descubra o potencial de crescimento da sua clínica" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                const message = `Olá! Gostaria de solicitar um diagnóstico gratuito.%0A%0A*Nome:* ${whatsappFormData.nome}%0A*E-mail:* ${whatsappFormData.email}%0A*Telefone:* ${whatsappFormData.telefone}%0A*Clínica:* ${whatsappFormData.clinica}%0A*Especialidade:* ${whatsappFormData.especialidade}`;
                window.open(`https://wa.me/5535999757076?text=${message}`, "_blank");
                setWhatsappModalOpen(false);
                setWhatsappFormData({ nome: "", email: "", telefone: "", clinica: "", especialidade: "" });
                toast2({
                  title: "Redirecionando para o WhatsApp!",
                  description: "Você será atendido em instantes."
                });
              },
              className: "p-5 space-y-4",
              children: [
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "Seu nome completo",
                    value: whatsappFormData.nome,
                    onChange: (e) => setWhatsappFormData((prev) => ({ ...prev, nome: e.target.value })),
                    required: true,
                    className: "h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "email",
                      placeholder: "Seu melhor e-mail",
                      value: whatsappFormData.email,
                      onChange: (e) => setWhatsappFormData((prev) => ({ ...prev, email: e.target.value })),
                      required: true,
                      className: "h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Input,
                    {
                      type: "tel",
                      placeholder: "WhatsApp com DDD",
                      value: whatsappFormData.telefone,
                      onChange: (e) => setWhatsappFormData((prev) => ({ ...prev, telefone: e.target.value })),
                      required: true,
                      className: "h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    placeholder: "Nome da clínica ou consultório",
                    value: whatsappFormData.clinica,
                    onChange: (e) => setWhatsappFormData((prev) => ({ ...prev, clinica: e.target.value })),
                    required: true,
                    className: "h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                  "select",
                  {
                    value: whatsappFormData.especialidade,
                    onChange: (e) => setWhatsappFormData((prev) => ({ ...prev, especialidade: e.target.value })),
                    required: true,
                    className: "w-full h-12 px-3 border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none text-gray-700 bg-white",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Selecione a especialidade" }),
                      especialidades.map((esp, index) => /* @__PURE__ */ jsx("option", { value: esp, children: esp }, index))
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full h-12 bg-green-500 hover:bg-green-600 text-white text-base font-semibold rounded-xl", children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2" }),
                  "Quero Meu Diagnóstico Gratuito"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-gray-500", children: "Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros e não serão compartilhados." })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`, children: [
        /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 py-2" : "bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2"}`, children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center group", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png",
                alt: "ClickNex Logo",
                className: `h-9 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? "" : "brightness-0 invert"}`
              }
            ),
            /* @__PURE__ */ jsx("span", { className: `text-base font-bold ml-2 transition-colors duration-300 ${isScrolled ? "text-blue-900" : "text-white"}`, children: "para Clínicas" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: `hidden md:flex items-center rounded-full px-2 py-1 ${isScrolled ? "bg-gray-100" : "bg-white/10"}`, children: [
            /* @__PURE__ */ jsx("a", { href: "#resultados", className: `px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? "text-gray-700 hover:bg-white hover:text-blue-600" : "text-white/90 hover:bg-white/20 hover:text-white"}`, children: "Resultados" }),
            /* @__PURE__ */ jsx("a", { href: "#servicos", className: `px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? "text-gray-700 hover:bg-white hover:text-blue-600" : "text-white/90 hover:bg-white/20 hover:text-white"}`, children: "Serviços" }),
            /* @__PURE__ */ jsx("a", { href: "#agendamentos", className: `px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? "text-gray-700 hover:bg-white hover:text-blue-600" : "text-white/90 hover:bg-white/20 hover:text-white"}`, children: "Agendamentos" }),
            /* @__PURE__ */ jsx("a", { href: "#depoimentos", className: `px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? "text-gray-700 hover:bg-white hover:text-blue-600" : "text-white/90 hover:bg-white/20 hover:text-white"}`, children: "Depoimentos" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsx("a", { href: "#contato", children: /* @__PURE__ */ jsxs(Button, { className: "bg-blue-900 text-white hover:bg-blue-800 rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg", children: [
            "Falar com Especialista",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ] }) }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden p-2",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              "aria-label": "Menu",
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { className: `w-6 h-6 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}` }) : /* @__PURE__ */ jsx(Menu, { className: `w-6 h-6 transition-colors ${isScrolled ? "text-gray-900" : "text-white"}` })
            }
          )
        ] }) }),
        mobileMenuOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
              onClick: () => setMobileMenuOpen(false)
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "md:hidden fixed top-20 left-4 right-4 z-50 bg-white rounded-2xl shadow-2xl animate-[scale-in_0.2s_ease-out] overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
              /* @__PURE__ */ jsxs("a", { href: "#resultados", className: "flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl", onClick: () => setMobileMenuOpen(false), children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 mr-3 text-blue-600" }),
                "Resultados"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#servicos", className: "flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl", onClick: () => setMobileMenuOpen(false), children: [
                /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 mr-3 text-blue-600" }),
                "Serviços"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#agendamentos", className: "flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl", onClick: () => setMobileMenuOpen(false), children: [
                /* @__PURE__ */ jsx(CalendarCheck, { className: "w-5 h-5 mr-3 text-blue-600" }),
                "Agendamentos"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#depoimentos", className: "flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl", onClick: () => setMobileMenuOpen(false), children: [
                /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 mr-3 text-blue-600" }),
                "Depoimentos"
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-gray-100", children: /* @__PURE__ */ jsx("a", { href: "#contato", onClick: () => setMobileMenuOpen(false), children: /* @__PURE__ */ jsxs(Button, { className: "w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl py-3", children: [
              "Falar com Especialista",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
            ] }) }) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative min-h-screen flex items-center pt-28 sm:pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "particles-hero absolute inset-0 pointer-events-none" }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -right-32 -top-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl parallax-slow",
            style: { transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute -left-32 -bottom-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl parallax-slow",
            style: { transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-blue-400/30 via-transparent to-blue-400/30" }),
        /* @__PURE__ */ jsx("div", { className: "hidden xl:block absolute left-[45%] bottom-8 floating-stat z-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-green-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs", children: "Receita Mensal" }),
            /* @__PURE__ */ jsx("p", { className: "text-base font-bold text-gray-900", children: "+42%" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "hidden xl:block absolute right-6 top-28 floating-stat-delayed z-20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-900 font-medium text-sm", children: "Novo Agendamento" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-white", children: [
            /* @__PURE__ */ jsxs("div", { className: "hero-animate inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20", children: [
              /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 mr-2 text-red-400 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Marketing Digital para Área da Saúde" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "hero-animate-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6", children: [
              "Aumente os Agendamentos da Sua Clínica em até",
              " ",
              /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "340%" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "hero-animate-delay-2 text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed", children: "Estratégias de marketing digital desenvolvidas exclusivamente para clínicas e consultórios médicos. Resultados comprovados, conformidade com o CFM e ROI mensurável." }),
            /* @__PURE__ */ jsx("div", { className: "hero-animate-delay-3 flex flex-col sm:flex-row gap-4 mb-10", children: /* @__PURE__ */ jsx("a", { href: "#contato", className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 glow-button transition-all duration-300 hover:scale-105", children: [
              "Solicitar Diagnóstico Gratuito",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: "hero-animate-delay-3 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6", children: diferenciais.slice(0, 2).map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center text-blue-200", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 mr-2 text-blue-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.texto })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-animate bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-6 sm:mb-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-2", children: "Diagnóstico Gratuito" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm sm:text-base", children: "Descubra o potencial de crescimento da sua clínica" })
            ] }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 sm:space-y-5", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Input,
                {
                  name: "nome",
                  placeholder: "Seu nome completo",
                  value: formData.nome,
                  onChange: handleInputChange,
                  required: true,
                  className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "email",
                    type: "email",
                    placeholder: "Seu melhor e-mail",
                    value: formData.email,
                    onChange: handleInputChange,
                    required: true,
                    className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "telefone",
                    type: "tel",
                    placeholder: "WhatsApp com DDD",
                    value: formData.telefone,
                    onChange: handleInputChange,
                    required: true,
                    className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
                Input,
                {
                  name: "clinica",
                  placeholder: "Nome da clínica ou consultório",
                  value: formData.clinica,
                  onChange: handleInputChange,
                  required: true,
                  className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                }
              ) }),
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "especialidade",
                  value: formData.especialidade,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full h-11 sm:h-12 px-3 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-gray-700 bg-white transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Selecione a especialidade" }),
                    especialidades.map((esp, index) => /* @__PURE__ */ jsx("option", { value: esp, children: esp }, index))
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full h-11 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg", children: "Quero Meu Diagnóstico Gratuito" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-gray-500", children: "Ao enviar, você concorda com nossa política de privacidade. Seus dados estão seguros e não serão compartilhados." })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "resultados", className: "py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16 reveal-clinicas", children: [
          /* @__PURE__ */ jsx("p", { className: "text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm", children: "Resultados Comprovados" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Números que Falam por Si" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4", children: "Métricas reais de clínicas que transformaram sua captação de pacientes com nossas estratégias" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8", children: resultados.map((item, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "reveal-clinicas card-hover-3d bg-white rounded-xl p-4 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100",
            style: { transitionDelay: `${index * 0.15}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110", children: item.icon }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2", children: item.numero }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs sm:text-sm lg:text-base", children: item.descricao })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "servicos", className: "py-16 sm:py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16 reveal-clinicas", children: [
          /* @__PURE__ */ jsx("p", { className: "text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm", children: "Nossos Serviços" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "Soluções Completas para Clínicas" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4", children: "Estratégias desenvolvidas especificamente para o setor de saúde, respeitando todas as normas éticas" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: servicos2.map((servico, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `reveal-clinicas group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-8 hover:from-blue-50 hover:to-white transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:shadow-xl card-hover-3d ${index === 6 ? "md:col-span-2 lg:col-span-1" : ""}`,
            style: { transitionDelay: `${index * 0.1}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-blue-600 mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500", children: servico.icon }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold text-gray-900 mb-3", children: servico.titulo }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed text-sm sm:text-base", children: servico.descricao })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 sm:mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-6 sm:p-8 lg:p-12 reveal-clinicas relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]" }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-center relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-white", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl lg:text-3xl font-bold mb-4", children: "Por que clínicas escolhem a ClickNex?" }),
              /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-6 text-base sm:text-lg", children: "Entendemos as particularidades do marketing médico e trabalhamos em total conformidade com as diretrizes do Conselho Federal de Medicina." }),
              /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: diferenciais.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center group/item", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-white/30 transition-colors duration-300", children: item.icon }),
                /* @__PURE__ */ jsx("span", { className: "text-xs sm:text-sm text-blue-50", children: item.texto })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-center lg:text-right", children: /* @__PURE__ */ jsx("a", { href: "#contato", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl", children: [
              "Agendar Reunião Estratégica",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }) }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { id: "agendamentos", className: "py-16 sm:py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "reveal-clinicas", children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20", children: [
              /* @__PURE__ */ jsx(CalendarCheck, { className: "w-4 h-4 mr-2 text-blue-300" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-white", children: "Sistema Exclusivo" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6", children: "Sistema de Agendamentos para Médicos e Clínicas" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-100 mb-8 leading-relaxed", children: "Plataforma completa de agendamento online desenvolvida especificamente para profissionais da saúde. Automatize sua agenda e nunca mais perca um paciente." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0", children: /* @__PURE__ */ jsx(Bell, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "Lembretes Automáticos" }),
                  /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "SMS e WhatsApp para reduzir faltas em até 70%" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0", children: /* @__PURE__ */ jsx(ClipboardList, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "Gestão de Agenda Integrada" }),
                  /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "Visualize e gerencie todos os agendamentos em um só lugar" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0", children: /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "Confirmação Automática" }),
                  /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "Pacientes confirmam presença com um clique" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0", children: /* @__PURE__ */ jsx(Stethoscope, { className: "w-5 h-5 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: "Multi-Especialidades" }),
                  /* @__PURE__ */ jsx("p", { className: "text-blue-200 text-sm", children: "Configure diferentes tipos de consulta e procedimentos" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#contato", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl", children: [
              "Conhecer o Sistema",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "reveal-clinicas relative", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-2xl overflow-hidden", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-600 px-4 py-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-red-400 rounded-full" }),
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-yellow-400 rounded-full" }),
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-400 rounded-full" }),
                /* @__PURE__ */ jsx("span", { className: "ml-2 text-white text-sm font-medium", children: "Sistema de Agendamentos" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm", children: "Maria Silva" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Consulta - 09:00" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs bg-green-500 text-white px-2 py-1 rounded-full", children: "Confirmado" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm", children: "João Santos" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Retorno - 10:30" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-500 text-white px-2 py-1 rounded-full", children: "Aguardando" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-900 text-sm", children: "Ana Costa" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Exame - 14:00" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs bg-purple-500 text-white px-2 py-1 rounded-full", children: "Novo" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 floating-stat", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-green-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Taxa de Presença" }),
                /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-900", children: "94%" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 floating-stat-delayed", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-blue-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: "Agendamentos Hoje" }),
                /* @__PURE__ */ jsx("p", { className: "font-bold text-gray-900", children: "24" })
              ] })
            ] }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { id: "depoimentos", className: "py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16 reveal-clinicas", children: [
          /* @__PURE__ */ jsx("p", { className: "text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm", children: "Depoimentos" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4", children: "O Que Nossos Clientes Dizem" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4", children: "Histórias reais de médicos e gestores que transformaram suas clínicas" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 sm:gap-8", children: depoimentos.map((depoimento, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "reveal-clinicas bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 card-hover-3d",
            style: { transitionDelay: `${index * 0.15}s` },
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" }, i)) }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-6 leading-relaxed italic text-sm sm:text-base", children: [
                '"',
                depoimento.texto,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base", children: depoimento.avatar }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm sm:text-base", children: depoimento.nome }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm text-gray-500", children: depoimento.cargo })
                ] })
              ] })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "contato", className: "py-16 sm:py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal-clinicas", children: [
          /* @__PURE__ */ jsx("p", { className: "text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm", children: "Vamos Conversar" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6", children: "Pronto para Transformar sua Clínica?" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed", children: "Agende uma consultoria gratuita e descubra como podemos aumentar o número de pacientes da sua clínica de forma ética e sustentável." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6 mb-8 sm:mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300", children: /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm sm:text-base", children: "Telefone / WhatsApp" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm sm:text-base", children: "+55 (35) 99975-7076" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300", children: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm sm:text-base", children: "E-mail" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm sm:text-base", children: "comercial@clicknex.com.br" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300", children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-gray-900 text-sm sm:text-base", children: "Endereço" }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-600 text-sm sm:text-base", children: [
                  "R. Comandante Nelio, 299",
                  /* @__PURE__ */ jsx("br", {}),
                  "Jardim Floresta - CEP: 37.206-656",
                  /* @__PURE__ */ jsx("br", {}),
                  "Lavras - MG"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 sm:p-6 border border-blue-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-3", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900 text-sm sm:text-base", children: "Compromisso com a Ética" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs sm:text-sm", children: "Todas as nossas estratégias são desenvolvidas em conformidade com as resoluções do CFM, garantindo que sua clínica mantenha a credibilidade e reputação intactas." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "reveal-clinicas bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold text-gray-900 mb-2", children: "Solicite seu Diagnóstico" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base", children: "Preencha o formulário e receba uma análise personalizada" }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4 sm:space-y-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Nome completo" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "nome",
                    placeholder: "Dr(a). João Silva",
                    value: formData.nome,
                    onChange: handleInputChange,
                    required: true,
                    className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "E-mail profissional" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "email",
                    type: "email",
                    placeholder: "contato@clinica.com.br",
                    value: formData.email,
                    onChange: handleInputChange,
                    required: true,
                    className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "WhatsApp" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "telefone",
                    type: "tel",
                    placeholder: "(35) 99999-9999",
                    value: formData.telefone,
                    onChange: handleInputChange,
                    required: true,
                    className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Nome da clínica" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    name: "clinica",
                    placeholder: "Clínica Exemplo",
                    value: formData.clinica,
                    onChange: handleInputChange,
                    required: true,
                    className: "h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Especialidade principal" }),
              /* @__PURE__ */ jsxs(
                "select",
                {
                  name: "especialidade",
                  value: formData.especialidade,
                  onChange: handleInputChange,
                  required: true,
                  className: "w-full h-11 sm:h-12 px-3 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-gray-700 bg-white transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Selecione uma especialidade" }),
                    especialidades.map((esp, index) => /* @__PURE__ */ jsx("option", { value: esp, children: esp }, index))
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: "Como podemos ajudar? (opcional)" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  name: "mensagem",
                  placeholder: "Conte um pouco sobre sua clínica e seus objetivos...",
                  value: formData.mensagem,
                  onChange: handleInputChange,
                  rows: 4,
                  className: "border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full h-12 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg", children: [
              "Enviar Solicitação",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-gray-500", children: "Respeitamos sua privacidade. Seus dados são protegidos e utilizados apenas para contato comercial." })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("footer", { className: "bg-gradient-to-b from-blue-950 to-blue-900 text-white py-12 sm:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2 lg:col-span-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png",
                  alt: "ClickNex Logo",
                  className: "h-10 w-auto object-contain brightness-0 invert"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "text-lg sm:text-xl font-bold ml-3", children: "para Clínicas" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-300 mb-6 max-w-md text-sm sm:text-base", children: "Especialistas em marketing digital para a área da saúde. Ajudamos clínicas e consultórios a crescerem de forma ética e sustentável." }),
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/50 rounded-lg p-4 sm:p-5 border border-blue-800", children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-white mb-2 text-sm sm:text-base", children: "BERTINI E MEIRELES SERVIÇOS LTDA" }),
              /* @__PURE__ */ jsx("p", { className: "text-blue-300 text-xs sm:text-sm", children: "CNPJ: 61.754.617/0001-97" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-sm sm:text-base", children: "Links Rápidos" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 sm:space-y-3", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#resultados", className: "text-blue-300 hover:text-white transition-colors text-sm sm:text-base", children: "Resultados" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#servicos", className: "text-blue-300 hover:text-white transition-colors text-sm sm:text-base", children: "Serviços" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#depoimentos", className: "text-blue-300 hover:text-white transition-colors text-sm sm:text-base", children: "Depoimentos" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contato", className: "text-blue-300 hover:text-white transition-colors text-sm sm:text-base", children: "Contato" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-sm sm:text-base", children: "Contato" }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 sm:space-y-3 text-blue-300 text-xs sm:text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 mr-2 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "comercial@clicknex.com.br" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 mr-2 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "R. Comandante Nelio, 299",
                  /* @__PURE__ */ jsx("br", {}),
                  "Jardim Floresta",
                  /* @__PURE__ */ jsx("br", {}),
                  "CEP: 37.206-656",
                  /* @__PURE__ */ jsx("br", {}),
                  "Lavras - MG"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "border-t border-blue-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-blue-400 text-xs sm:text-sm text-center md:text-left", children: [
            "© ",
            (/* @__PURE__ */ new Date()).getFullYear(),
            " ClickNex - BERTINI E MEIRELES SERVIÇOS LTDA. Todos os direitos reservados."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 sm:space-x-6", children: [
            /* @__PURE__ */ jsx(Link, { to: "/politica-de-privacidade", className: "text-blue-400 hover:text-white text-xs sm:text-sm transition-colors", children: "Política de Privacidade" }),
            /* @__PURE__ */ jsx(Link, { to: "/termos-de-uso", className: "text-blue-400 hover:text-white text-xs sm:text-sm transition-colors", children: "Termos de Uso" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: "Página não encontrada",
        description: "A página que você está procurando não existe ou foi movida.",
        noindex: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Página não encontrada" }),
      /* @__PURE__ */ jsx("a", { href: "/", className: "text-blue-500 hover:text-blue-700 underline", children: "Voltar para o início" })
    ] }) })
  ] });
};
const valores = [
  { icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-7 h-7 text-blue-600" }), titulo: "Resultados Reais", desc: "Cada estratégia é orientada por dados e focada em ROI mensurável para o seu negócio." },
  { icon: /* @__PURE__ */ jsx(Users, { className: "w-7 h-7 text-blue-600" }), titulo: "Parceria de Longo Prazo", desc: "Não vendemos pacotes. Construímos relações duradouras com crescimento contínuo." },
  { icon: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-7 h-7 text-blue-600" }), titulo: "Transparência Total", desc: "Relatórios semanais e acesso total às plataformas. Você sempre sabe onde cada centavo está sendo investido." },
  { icon: /* @__PURE__ */ jsx(Award, { className: "w-7 h-7 text-blue-600" }), titulo: "Especialização Vertical", desc: "Somos especialistas em nichos específicos, o que nos permite criar estratégias muito mais eficazes." }
];
const Sobre = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Sobre a ClickNex | Agência de Marketing Digital em Lavras-MG",
      description: "Conheça a ClickNex: fundada em 2020, especialista em marketing digital para clínicas, e-commerce e negócios locais. Baseada em Lavras-MG, atendemos todo o Brasil.",
      keywords: ["sobre clicknex", "agência marketing lavras mg", "equipe clicknex", "marketing digital minas gerais"],
      jsonLd: [
        organizationLd(),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Sobre", url: `${SITE_URL}/sobre` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm", children: "Quem Somos" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-6 leading-tight", children: [
        "Transformamos Ideias",
        /* @__PURE__ */ jsx("br", {}),
        "em ",
        /* @__PURE__ */ jsx("span", { className: "text-blue-300", children: "Resultados Reais" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 max-w-2xl mx-auto", children: "A ClickNex é uma agência de marketing digital fundada em 2020, especializada em gerar crescimento previsível para clínicas, e-commerce e negócios locais em todo o Brasil." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container-custom max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 mb-6", children: "Nossa História" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: "Nascemos em Lavras, no Sul de Minas Gerais, com uma missão clara: democratizar o acesso ao marketing digital de alta performance para pequenas e médias empresas brasileiras." }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4 leading-relaxed", children: "Desde 2020, acumulamos mais de 127 clientes atendidos, R$2,8 milhões em faturamento gerado e uma avaliação média de 4,9 estrelas. Esses números não são coincidência — são o resultado de um método que combina dados, criatividade e uma parceria genuína com cada cliente." }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Hoje somos referência em marketing para clínicas médicas na região Sul de Minas, com atuação em todo o território nacional." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: [
        { num: "127+", label: "Clientes atendidos" },
        { num: "R$2.8M", label: "Faturamento gerado" },
        { num: "4.9★", label: "Avaliação média" },
        { num: "2020", label: "Ano de fundação" }
      ].map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-xl p-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold text-blue-900 mb-1", children: s.num }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: s.label })
      ] }, s.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 mb-4", children: "Nossos Valores" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-xl mx-auto", children: "Os princípios que guiam cada decisão e cada campanha que rodamos." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: valores.map((v) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4", children: v.icon }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-950 mb-2", children: v.titulo }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: v.desc })
      ] }, v.titulo)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-950 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pronto para crescer com a ClickNex?" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-200 mb-8 max-w-xl mx-auto", children: "Solicite um diagnóstico gratuito e descubra como podemos escalar seu negócio." }),
      /* @__PURE__ */ jsx(
        Button,
        {
          asChild: true,
          className: "bg-white text-blue-950 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full",
          children: /* @__PURE__ */ jsx("a", { href: `https://wa.me/5535999757076?text=Olá! Gostaria de solicitar um diagnóstico gratuito.`, target: "_blank", rel: "noopener noreferrer", children: "Solicitar Diagnóstico Gratuito" })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const servicos = [
  {
    icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8" }),
    titulo: "Tráfego Pago",
    desc: "Campanhas de alta performance no Google Ads e Meta Ads com foco em ROI mensurável.",
    href: "/servicos/trafego-pago",
    keywords: ["tráfego pago", "anúncios pagos"]
  },
  {
    icon: /* @__PURE__ */ jsx(Megaphone, { className: "w-8 h-8" }),
    titulo: "Google Ads",
    desc: "Gestão profissional de campanhas no Google: Search, Display, YouTube e Shopping.",
    href: "/servicos/google-ads",
    keywords: ["google ads", "google adwords"]
  },
  {
    icon: /* @__PURE__ */ jsx(Megaphone, { className: "w-8 h-8" }),
    titulo: "Meta Ads",
    desc: "Anúncios no Facebook e Instagram otimizados para geração de leads e vendas.",
    href: "/servicos/meta-ads",
    keywords: ["meta ads", "facebook ads", "instagram ads"]
  },
  {
    icon: /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8" }),
    titulo: "Criação de Sites",
    desc: "Sites responsivos, rápidos e otimizados para SEO e conversão.",
    href: "/servicos/criacao-de-sites",
    keywords: ["criação de sites", "desenvolvimento web"]
  },
  {
    icon: /* @__PURE__ */ jsx(BarChart3, { className: "w-8 h-8" }),
    titulo: "SEO",
    desc: "Posicionamento orgânico sustentável no Google para palavras-chave estratégicas do seu negócio.",
    href: "/servicos/seo",
    keywords: ["seo", "otimização para google"]
  },
  {
    icon: /* @__PURE__ */ jsx(Bot, { className: "w-8 h-8" }),
    titulo: "Automação de Marketing",
    desc: "Sequências automáticas de nurturing, CRM e follow-up que convertem mais com menos esforço.",
    href: "/servicos/automacao-de-marketing",
    keywords: ["automação marketing", "crm", "email marketing"]
  }
];
const ServicosHub = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Serviços de Marketing Digital | Tráfego Pago, SEO, Sites e Automação",
      description: "Conheça todos os serviços da ClickNex: tráfego pago (Google Ads, Meta Ads), criação de sites, SEO e automação de marketing. Soluções completas para escalar seu negócio.",
      keywords: ["serviços marketing digital", "google ads", "meta ads", "criação de sites", "seo", "automação marketing"],
      jsonLd: [
        organizationLd(),
        ...servicos.map(
          (s) => serviceLd({ name: s.titulo, description: s.desc, url: `${SITE_URL}${s.href}` })
        ),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Serviços", url: `${SITE_URL}/servicos` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("p", { className: "text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm", children: "O que fazemos" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold mb-6 leading-tight", children: [
        "Soluções Completas em",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-blue-300", children: "Marketing Digital" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 max-w-2xl mx-auto", children: "Da atração ao fechamento: todas as ferramentas para crescer de forma previsível e escalável." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: servicos.map((s) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: s.href,
        className: "group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-blue-700 mb-5 group-hover:scale-110 transition-transform inline-block", children: s.icon }),
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-blue-950 mb-3", children: s.titulo }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-5 leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center text-blue-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all", children: [
            "Saiba mais ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ] })
        ]
      },
      s.href
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-950 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Não sabe por onde começar?" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-200 mb-8 max-w-xl mx-auto", children: "Solicite um diagnóstico gratuito e nossa equipe vai recomendar a estratégia ideal para o seu momento." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-white text-blue-950 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsx("a", { href: `https://wa.me/5535999757076?text=Olá! Gostaria de solicitar um diagnóstico gratuito.`, target: "_blank", rel: "noopener noreferrer", children: "Solicitar Diagnóstico Gratuito" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const Contato = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Contato | ClickNex Agência de Marketing Digital",
      description: "Entre em contato com a ClickNex. Telefone: +55 (35) 99975-7076. E-mail: comercial@clicknex.com.br. Lavras-MG. Solicite um diagnóstico gratuito.",
      keywords: ["contato clicknex", "falar com agência marketing", "orçamento marketing digital", "lavras mg marketing"],
      jsonLd: [
        organizationLd(),
        localBusinessLd(),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Contato", url: `${SITE_URL}/contato` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-24", children: /* @__PURE__ */ jsx(Contact, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const blogPosts = [
  {
    slug: "marketing-digital-para-clinicas-medicas",
    titulo: "Marketing Digital para Clínicas Médicas: O Guia Completo (2026)",
    resumo: "O guia definitivo de marketing para clínicas: SEO local, Google Ads, Meta Ads, conteúdo, automação e CRM — tudo dentro das normas do CFM e ANVISA.",
    cover: "/og/clicknex-default.jpg",
    tags: ["marketing para clínicas", "marketing médico", "guia"],
    publishedAt: "2026-06-16",
    readingTime: "11 min"
  },
  {
    slug: "como-atrair-mais-pacientes-para-clinica",
    titulo: "Como Atrair Mais Pacientes para sua Clínica em 2025",
    resumo: "Descubra as estratégias de marketing digital mais eficazes para aumentar o fluxo de pacientes na sua clínica médica ou consultório.",
    cover: "/og/clicknex-default.jpg",
    tags: ["clínicas", "tráfego pago", "marketing médico"],
    publishedAt: "2025-03-01",
    readingTime: "8 min"
  },
  {
    slug: "google-ads-para-clinicas-medicas-guia",
    titulo: "Google Ads para Clínicas Médicas: Guia Completo 2025",
    resumo: "Tudo que você precisa saber para criar e otimizar campanhas de Google Ads para clínicas, consultórios e hospitais com segurança e resultados.",
    cover: "/og/clicknex-default.jpg",
    tags: ["google ads", "clínicas", "tráfego pago"],
    publishedAt: "2025-03-15",
    readingTime: "12 min"
  },
  {
    slug: "marketing-medico-cfm-anvisa-guia-completo",
    titulo: "Marketing Médico: O Guia Completo sobre CFM e ANVISA",
    resumo: "Entenda o que pode e o que não pode no marketing para médicos e clínicas, segundo as normas do CFM e ANVISA. Guia atualizado 2025.",
    cover: "/og/clicknex-default.jpg",
    tags: ["marketing médico", "cfm", "anvisa"],
    publishedAt: "2025-03-22",
    readingTime: "10 min"
  },
  {
    slug: "quanto-custa-anuncio-google-ads",
    titulo: "Quanto Custa Anunciar no Google Ads? Tudo que Você Precisa Saber",
    resumo: "Descubra o investimento mínimo, como funciona o leilão de palavras-chave e como maximizar seu ROI no Google Ads em 2025.",
    cover: "/og/clicknex-default.jpg",
    tags: ["google ads", "investimento", "roi"],
    publishedAt: "2025-04-01",
    readingTime: "9 min"
  },
  {
    slug: "automacao-de-marketing-para-pequenas-empresas",
    titulo: "Automação de Marketing para Pequenas Empresas: Comece Hoje",
    resumo: "Como pequenas empresas podem usar automação de marketing para nutrir leads, economizar tempo e aumentar vendas sem precisar de uma equipe grande.",
    cover: "/og/clicknex-default.jpg",
    tags: ["automação", "pequenas empresas", "leads"],
    publishedAt: "2025-04-08",
    readingTime: "7 min"
  },
  {
    slug: "seo-local-para-clinicas",
    titulo: "SEO Local para Clínicas: Apareça no Google Maps e Atraia Pacientes",
    resumo: "Como otimizar o SEO local da sua clínica para aparecer nas primeiras posições do Google Maps e Google Meu Negócio na sua cidade.",
    cover: "/og/clicknex-default.jpg",
    tags: ["seo local", "google maps", "clínicas"],
    publishedAt: "2025-04-09",
    readingTime: "8 min"
  }
];
const BlogIndex = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Blog | Marketing Digital para Clínicas e Empresas — ClickNex",
      description: "Artigos práticos sobre marketing digital, tráfego pago, SEO e automação. Conteúdo focado em clínicas médicas, e-commerce e negócios locais.",
      keywords: ["blog marketing digital", "artigos tráfego pago", "marketing para clínicas", "seo para empresas"],
      jsonLd: [
        organizationLd(),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Blog", url: `${SITE_URL}/blog` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-16 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("p", { className: "text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm", children: "Conteúdo Gratuito" }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Blog ClickNex" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-100 max-w-xl mx-auto", children: "Estratégias práticas de marketing digital para crescer seu negócio." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((post) => /* @__PURE__ */ jsxs(
      "a",
      {
        href: `/blog/${post.slug}`,
        className: "group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-6xl font-black opacity-20", children: "CX" }) }),
          /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium", children: tag }, tag)) }),
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-blue-950 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors", children: post.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4 line-clamp-2", children: post.resumo }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs text-gray-400", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3" }),
                " ",
                post.readingTime
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-blue-700 font-semibold group-hover:gap-2 transition-all", children: [
                "Ler artigo ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3" })
              ] })
            ] })
          ] })
        ]
      },
      post.slug
    )) }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
function renderInline(s) {
  return s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}
function renderMarkdown(md) {
  const out = [];
  let list = null;
  const closeList = () => {
    if (list) {
      out.push(`</${list}>`);
      list = null;
    }
  };
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) {
      closeList();
      continue;
    }
    let m;
    if (m = line.match(/^(#{2,6})\s+(.*)$/)) {
      closeList();
      const lvl = m[1].length;
      out.push(`<h${lvl}>${renderInline(m[2])}</h${lvl}>`);
    } else if (/^>\s?/.test(line)) {
      closeList();
      out.push(`<blockquote>${renderInline(line.replace(/^>\s?/, ""))}</blockquote>`);
    } else if (m = line.match(/^[-*]\s+(.*)$/)) {
      if (list !== "ul") {
        closeList();
        out.push("<ul>");
        list = "ul";
      }
      out.push(`<li>${renderInline(m[1].replace(/^\[[ xX]\]\s*/, ""))}</li>`);
    } else if (m = line.match(/^\d+\.\s+(.*)$/)) {
      if (list !== "ol") {
        closeList();
        out.push("<ol>");
        list = "ol";
      }
      out.push(`<li>${renderInline(m[1])}</li>`);
    } else {
      closeList();
      out.push(`<p>${renderInline(line)}</p>`);
    }
  }
  closeList();
  return out.join("\n");
}
const postsContent = {
  "marketing-digital-para-clinicas-medicas": `
Atrair pacientes de forma previsível em 2026 exige presença digital em três frentes: aparecer no Google quando alguém procura seu serviço, construir confiança com conteúdo e redes sociais, e não perder nenhum contato que chega. Este guia reúne, em um só lugar, o passo a passo que a ClickNex usa em clínicas médicas e odontológicas — sempre dentro das normas do CFM.

## O que é marketing digital para clínicas?

É o conjunto de estratégias que faz sua clínica ser encontrada por quem já procura atendimento e transforma esse interesse em consultas agendadas. O marketing médico tem uma camada extra que o varejo não tem: precisa respeitar as regras de publicidade do Conselho Federal de Medicina (CFM) e da ANVISA. Fazer certo significa crescer sem risco de processo ético.

## Quais são os pilares do marketing para clínicas?

São cinco frentes que se complementam. Você não precisa de todas no primeiro mês, mas o resultado consistente vem da soma delas ao longo do tempo.

### 1. SEO local e Google Meu Negócio

A maioria das buscas por clínica tem intenção local ("dermatologista perto de mim", "clínica em Lavras"). Um perfil do Google Meu Negócio completo e otimizado costuma gerar mais ligações do que qualquer anúncio — e é gratuito. Veja o passo a passo em [SEO Local para Clínicas](/blog/seo-local-para-clinicas).

### 2. Google Ads: demanda no momento certo

O Google Ads coloca sua clínica na frente de quem já está procurando atendimento agora. É a estratégia mais rápida para gerar agendamentos. Entenda como estruturar campanhas no [guia de Google Ads para clínicas](/blog/google-ads-para-clinicas-medicas-guia) e quanto reservar de verba em [quanto custa anunciar no Google Ads](/blog/quanto-custa-anuncio-google-ads).

### 3. Meta Ads (Instagram e Facebook)

Enquanto o Google captura demanda existente, o Meta Ads cria demanda — ideal para procedimentos estéticos, check-ups e pacotes. O segredo é mostrar o ambiente da clínica, usar depoimentos autorizados e respeitar o CFM (sem "antes e depois" de cirurgia, sem promessa de resultado).

### 4. Conteúdo e autoridade

Artigos e vídeos educativos posicionam sua clínica como referência e geram tráfego orgânico que não para quando você desliga os anúncios. Responder dúvidas reais dos pacientes ("quando procurar um cardiologista?") também alimenta sua presença no Google e em assistentes de IA.

### 5. Automação e CRM: pare de perder pacientes

Gerar contato é só metade do trabalho — o dinheiro vaza quando ninguém responde a tempo. Um [CRM com WhatsApp](https://assine.clicknex.com.br) centraliza os atendimentos, distribui entre a equipe e dispara lembretes automáticos, reduzindo faltas em até 70%. Comece pelo conceito em [automação de marketing para pequenas empresas](/blog/automacao-de-marketing-para-pequenas-empresas).

## Quanto custa fazer marketing para a sua clínica?

Para clínicas de médio porte, um ponto de partida saudável é R$1.500 a R$3.000/mês em mídia (Google + Meta), além do investimento em estrutura (site, CRM, conteúdo). Nichos de alta concorrência como odontologia e dermatologia costumam exigir mais. O detalhamento está em [quanto custa anunciar no Google Ads](/blog/quanto-custa-anuncio-google-ads).

## O que o CFM e a ANVISA permitem anunciar?

Você pode divulgar serviços, especialidades, estrutura e conteúdo educativo. Não pode prometer resultados, usar "antes e depois" de procedimentos, sensacionalismo ou autopromoção que induza o paciente. O guia completo está em [Marketing Médico: CFM e ANVISA](/blog/marketing-medico-cfm-anvisa-guia-completo).

## Como atrair pacientes nos primeiros 90 dias?

A combinação que dá resultado mais rápido é: Google Meu Negócio otimizado + uma campanha de Google Ads enxuta + um canal de WhatsApp organizado para responder na hora. Veja o plano completo em [Como Atrair Mais Pacientes para sua Clínica](/blog/como-atrair-mais-pacientes-para-clinica).

## Erros que fazem a clínica perder dinheiro

- Mandar o anúncio para a home do site em vez de uma página focada em agendamento
- Demorar horas (ou dias) para responder o WhatsApp de um lead quente
- Não acompanhar quais campanhas geram consultas de verdade
- Ignorar as avaliações no Google (positivas e negativas)
- Anunciar fora das normas do CFM e arriscar processo ético

## Perguntas frequentes

### Marketing médico é permitido pelo CFM?

Sim. O CFM permite a publicidade médica desde que seja informativa e ética — sem promessa de resultado, sensacionalismo ou "antes e depois". O segredo é a forma como a mensagem é construída.

### Quanto tempo leva para ver resultado?

Com Google Ads e Google Meu Negócio, os primeiros agendamentos costumam aparecer já nas primeiras semanas. SEO e conteúdo orgânico levam de 3 a 6 meses, mas trazem pacientes de forma contínua e sem custo por clique.

### Vale mais a pena Google Ads ou Instagram?

Depende do objetivo: Google Ads captura quem já procura atendimento (resultado mais rápido), enquanto o Instagram cria desejo para procedimentos eletivos e estéticos. O ideal é usar os dois de forma integrada.

### Preciso de um site para anunciar?

Sim — idealmente com uma página de agendamento focada em conversão. Mandar tráfego pago para uma home genérica desperdiça verba.

## Conclusão

Marketing para clínicas não é sobre "fazer post bonito": é sobre ser encontrado no momento certo, passar confiança e não perder nenhum contato. Comece pelo básico (Google Meu Negócio + WhatsApp organizado), adicione mídia paga e construa autoridade com conteúdo — sempre dentro das regras do CFM.
`,
  "como-atrair-mais-pacientes-para-clinica": `
## Por que o Marketing Digital é Indispensável para Clínicas em 2025

O comportamento do paciente mudou. Antes de marcar uma consulta, **84% dos pacientes pesquisam online** sobre médicos, clínicas e tratamentos. Se sua clínica não aparece nas primeiras posições do Google, você está perdendo pacientes para a concorrência todos os dias.

Neste artigo, vamos mostrar as estratégias comprovadas que a ClickNex usa para aumentar o fluxo de agendamentos de clínicas médicas em até 340%.

## 1. Google Ads para Clínicas: A Estratégia Mais Rápida

O Google Ads coloca sua clínica na frente de pessoas que **já estão procurando** pelo que você oferece. Diferente das redes sociais, onde você interrompe o usuário, no Google você aparece no momento exato da necessidade.

### Como estruturar suas campanhas:

- **Palavras-chave de alta intenção**: "dentista em [cidade]", "cardiologista particular [cidade]", "consulta dermatologista"
- **Extensões de anúncio**: inclua o número de telefone, horário de funcionamento e botão de WhatsApp
- **Landing page dedicada**: não direcione para a home do site — crie uma página focada em conversão
- **Rastreamento de conversões**: configure o acompanhamento de ligações e preenchimentos de formulário

### Investimento inicial recomendado:

Para clínicas de médio porte, recomendamos um investimento inicial de R$1.500 a R$3.000/mês em anúncios. Em nichos de alta concorrência (odontologia, dermatologia, cirurgia plástica), esse valor pode ser maior.

## 2. Meta Ads: Instagram e Facebook para Clínicas

Enquanto o Google captura demanda existente, o **Meta Ads cria demanda**. É ideal para:

- Procedimentos estéticos (clareamento dental, botox, preenchimento)
- Serviços preventivos (check-up, vacinas, exames)
- Planos de saúde e pacotes de consultas

### Boas práticas para criativos médicos:

1. Mostre o ambiente da clínica (transmite confiança)
2. Use depoimentos de pacientes (com autorização por escrito)
3. Evite imagens de "antes e depois" para procedimentos cirúrgicos (vedado pelo CFM)
4. CTA claro: "Agendar consulta", "Solicitar avaliação gratuita"

> **Atenção CFM**: Todo conteúdo deve ser ético, sem promessas de cura ou resultados garantidos. A ClickNex garante conformidade total com as normas do Conselho Federal de Medicina.

## 3. SEO Local: Apareça no Google Maps

O **Google Meu Negócio** (Google Business Profile) é gratuito e pode ser seu maior gerador de pacientes. Clínicas com perfil otimizado recebem em média **5x mais chamadas** do que clínicas com perfil incompleto.

### Checklist de otimização:

- [ ] Preencha 100% do perfil (nome, endereço, telefone, horário)
- [ ] Adicione fotos de qualidade do espaço interno e externo
- [ ] Categorias corretas: "Clínica médica", "Médico", especialidade específica
- [ ] Responda TODOS os comentários (positivos e negativos)
- [ ] Publique posts semanais com novidades e informações de saúde
- [ ] Solicite avaliações de pacientes satisfeitos

## 4. Sistema de Agendamento Online: Reduza Faltas em 70%

Clínicas que implementam **lembretes automáticos via WhatsApp e SMS** reduzem a taxa de ausência em até 70%. Um sistema de agendamento online também:

- Permite agendamentos 24h (sem sobrecarregar a recepção)
- Envia confirmações automáticas
- Faz reengajamento de pacientes inativos
- Integra com o prontuário eletrônico

## 5. Conteúdo de Saúde: Construindo Autoridade

Artigos de blog e vídeos educativos posicionam sua clínica como referência e geram tráfego orgânico constante. Tópicos que funcionam:

- "Quando devo ir ao cardiologista?"
- "Diferença entre check-up básico e avançado"
- "Dicas para prevenir [doença específica]"

## Resultado: O Que Esperar com uma Estratégia Completa

Com a estratégia correta, clínicas atendidas pela ClickNex registram em média:

- **+340%** em agendamentos nos primeiros 90 dias
- **-70%** na taxa de faltas com lembretes automáticos
- **4,9 estrelas** de avaliação média no Google

## Próximos Passos

Pronto para transformar o marketing da sua clínica? A ClickNex oferece um **diagnóstico gratuito** onde analisamos sua situação atual e apresentamos um plano personalizado.

[Solicite seu diagnóstico gratuito agora →](https://wa.me/5535999757076?text=Olá! Li o artigo sobre marketing para clínicas e quero solicitar um diagnóstico gratuito.)
`,
  "google-ads-para-clinicas-medicas-guia": `
## Por que Google Ads é a Melhor Escolha para Clínicas Médicas

Quando um paciente pesquisa "clínica cardiológica em Belo Horizonte" ou "dentista de emergência", ele está no momento exato de decisão. O Google Ads coloca sua clínica na frente dessas pessoas — antes da concorrência.

Diferente das redes sociais, o Google Ads captura **demanda ativa**: o paciente já quer o serviço, basta ele encontrar você.

## Estrutura de Campanha Ideal para Clínicas

### Tipos de campanhas que funcionam para clínicas:

**1. Campanha de Pesquisa (Search)**
A mais importante. Aparece quando o paciente pesquisa uma palavra-chave específica.

**2. Campanha de Desempenho Máximo (Performance Max)**
Combina todos os canais do Google (Search, Display, YouTube, Gmail, Maps). Ideal para clínicas que querem escala.

**3. Campanha Local**
Focada em mostrar sua clínica no Google Maps. Excelente para clínicas físicas.

## Palavras-chave: A Base do Sucesso

### Palavras-chave por intenção:

| Intenção | Exemplo | Conversão esperada |
|---|---|---|
| Alta (transacional) | "agendar consulta cardiologista sp" | 8-15% |
| Média (informacional) | "sintomas infarto" | 2-5% |
| Baixa (genérica) | "cardiologista" | 1-3% |

Foque 70% do orçamento em palavras de alta intenção.

### Palavras-chave negativas essenciais:
- "gratuito", "SUS", "concurso", "estágio", "emprego"
- Cidades onde você não atende

## Configurações Críticas para Clínicas

### Extensões de anúncio obrigatórias:
1. **Extensão de chamada**: número de telefone clicável no mobile
2. **Extensão de local**: endereço + distância do usuário
3. **Extensão de sitelink**: "Especialidades", "Horários", "Convênios", "WhatsApp"
4. **Extensão de snippet estruturado**: lista as especialidades

### Segmentação geográfica:
Configure um raio em torno da clínica (geralmente 5-15km, dependendo da especialidade) e aumente o lance para usuários mais próximos.

## Criação de Anúncios Eficazes

### Estrutura do anúncio de busca responsivo (RSA):

**Headlines (inclua estas):**
- "Consulta com [Especialidade] em [Cidade]"
- "Agende Online 24h — Sem Fila"
- "Aceita [Convênio Principal]"
- "[Especialidade] com Mais de [X Anos] de Experiência"

**Descrições:**
- "Clínica moderna, localização central. Convênios aceitos. Ligue agora e agende sua consulta."
- "Atendimento humanizado e pontual. Resultados que transformam vidas. Solicite avaliação."

### O que é proibido pelo Google para saúde:
- Antes e depois (requer certificação especial)
- Alegações médicas não comprovadas
- Conteúdo sensível sem certificação

## Landing Page: Onde a Conversão Acontece

De nada adianta um ótimo anúncio se a página de destino não converte. A landing page ideal para clínicas deve ter:

- **Headline clara**: repete a promessa do anúncio
- **Formulário curto**: nome, telefone, especialidade (3 campos máximo)
- **Botão de WhatsApp visível**: conversão direta e imediata
- **Prova social**: depoimentos de pacientes com foto
- **Informações de contato**: endereço, telefone, horário
- **Certificados e credenciais**: CRM, CRO, especializações
- **Tempo de carregamento < 2s**: imprescindível para mobile

## Métricas que Você Deve Acompanhar

| Métrica | Benchmark para clínicas |
|---|---|
| CTR (taxa de clique) | 5-10% |
| Taxa de conversão | 8-15% |
| Custo por clique (CPC) | R$1,50-R$8,00 |
| Custo por lead | R$15-R$80 |
| ROAS | 300-600% |

## Erros Mais Comuns (e Como Evitar)

1. **Não usar correspondência de frase ou exata**: palavras amplas esgotam o orçamento com pesquisas irrelevantes
2. **Não rastrear conversões**: sem dados, você voa cego
3. **Usar a home como landing page**: taxa de conversão 3x menor
4. **Pausar campanhas no fim de semana**: muitos pacientes pesquisam sábado e domingo
5. **Ignorar o score de qualidade**: impacta diretamente o CPC

## Quanto Investir?

Para clínicas iniciando no Google Ads, recomendamos:

- **Mínimo**: R$1.500/mês em anúncios (+ gestão)
- **Intermediário**: R$3.000-5.000/mês
- **Escala**: R$8.000+/mês para múltiplas especialidades

O investimento em gestão profissional normalmente paga 3-5x em receita gerada.

## Conclusão

O Google Ads, quando bem configurado, é o canal com o maior ROI imediato para clínicas médicas. A chave é a configuração correta desde o início.

Quer uma campanha configurada por especialistas? [Fale com a ClickNex agora →](https://wa.me/5535999757076?text=Olá! Quero configurar Google Ads para minha clínica.)
`,
  "marketing-medico-cfm-anvisa-guia-completo": `
## O Que Diz o CFM sobre Marketing Médico

O **Código de Ética Médica (Resolução CFM 2.336/2023)** e as resoluções específicas sobre publicidade médica (Resolução CFM 1.974/2011 e atualizações) estabelecem regras claras sobre como médicos e clínicas podem se comunicar publicamente.

Entender essas regras é fundamental para fazer marketing eficaz sem correr risco de punição pelo Conselho Regional de Medicina (CRM).

## O Que é Permitido no Marketing Médico

### Anúncios e publicidade:

✅ **Informar** especialidade, área de atuação, endereço, horário e convênios aceitos
✅ Publicar artigos educativos sobre saúde (sem indicar tratamentos específicos para casos individuais)
✅ Mostrar fotos do consultório e da equipe
✅ Depoimentos de pacientes (com autorização por escrito, sem mencionar diagnóstico/tratamento)
✅ Divulgar participações em congressos, certificações e especializações
✅ Anúncios pagos no Google e Meta (com conteúdo ético)
✅ Redes sociais com conteúdo educativo e informativo

## O Que é Proibido

### Vedações expressas pelo CFM:

❌ Anunciar preços de consultas ou procedimentos (em alguns estados)
❌ Promessas de cura ou resultados garantidos ("garanto que você vai emagrecer 10kg")
❌ Imagens de antes e depois (salvo para fins acadêmicos em congressos científicos)
❌ Comparações com outros profissionais ou clínicas
❌ Divulgação de casos clínicos sem autorização do paciente
❌ Publicidade considerada "sensacionalista" ou que induza à automedicação
❌ Títulos ou especializações não reconhecidos pelo CFM

## O que Diz a ANVISA sobre Marketing de Saúde

A ANVISA regula principalmente a **publicidade de medicamentos, suplementos e equipamentos médicos**, além de exigir que estabelecimentos de saúde tenham Alvará Sanitário.

### Principais pontos da RDC 96/2008 (medicamentos):

- Medicamentos de tarja vermelha/preta só podem ser divulgados a profissionais de saúde
- Publicidade para o público deve incluir advertências obrigatórias
- Proibida qualquer sugestão de automedicação

## Estratégias de Marketing Médico Ético que Funcionam

### 1. Marketing de Conteúdo Educativo

Escreva artigos e grave vídeos respondendo às dúvidas mais comuns dos seus pacientes:

- "Quando devo fazer um check-up cardíaco?"
- "Quais são os sintomas da diabetes?"
- "Como funciona a consulta de dermatologia?"

Esse tipo de conteúdo **não fere nenhuma norma** e ainda posiciona você como autoridade.

### 2. Google Ads com Copy Ético

Use textos que informam, não que prometem:

✅ "Consulta com Cardiologista em SP — Agende Online"
❌ "Cure sua arritmia com nosso tratamento revolucionário"

### 3. Instagram e Facebook Educativos

Formatos que funcionam e são permitidos:

- Carrosséis com informações sobre doenças e prevenção
- Reels mostrando "um dia na clínica" (humaniza o atendimento)
- Stories com perguntas e respostas frequentes
- Lives educativas sobre saúde

### 4. Depoimentos de Pacientes

São permitidos, mas requerem:

- **Autorização escrita** do paciente
- Não mencionar diagnóstico específico
- Não fazer promessas de cura
- Foco na experiência de atendimento, não no resultado clínico

Exemplo ✅: "O atendimento da Dra. Ana foi excepcional. Me senti acolhido e tirei todas as minhas dúvidas."

Exemplo ❌: "Depois do tratamento do Dr. João, curei minha depressão!"

## Como a ClickNex Garante Conformidade CFM/ANVISA

Na ClickNex, toda campanha para clínicas e médicos passa por uma revisão específica de conformidade:

1. **Checklist CFM/ANVISA** aplicado em todos os criativos
2. **Textos revisados** para evitar promessas e sensacionalismo
3. **Orientação jurídica** para casos específicos
4. **Monitoramento contínuo** das atualizações nas resoluções

Atendemos mais de 127 clínicas e nunca tivemos um caso de autuação pelo CRM.

## Conclusão

Marketing médico ético não significa marketing fraco. Significa marketing **inteligente**: que informa, que constrói autoridade e que converte — dentro das normas.

Quer saber como escalar o marketing da sua clínica com segurança? [Solicite um diagnóstico gratuito →](https://wa.me/5535999757076?text=Quero saber mais sobre marketing médico ético para minha clínica.)
`,
  "quanto-custa-anuncio-google-ads": `
## Como Funciona o Modelo de Precificação do Google Ads

O Google Ads funciona no modelo **pay-per-click (PPC)**: você paga apenas quando alguém clica no seu anúncio. O valor de cada clique é determinado por um leilão automático que ocorre a cada pesquisa.

Não existe um preço fixo. O custo varia conforme:

1. **Concorrência**: quantos anunciantes disputam a mesma palavra-chave
2. **Score de qualidade**: relevância do anúncio e da landing page
3. **Lance máximo**: quanto você está disposto a pagar por clique
4. **Momento e localização**: horário e cidade do usuário

## Valores Médios por Segmento em 2025 (Brasil)

### Serviços profissionais e saúde:

| Segmento | CPC médio | Custo por lead |
|---|---|---|
| Clínicas odontológicas | R$2,50-R$7,00 | R$25-R$60 |
| Clínicas médicas | R$2,00-R$8,00 | R$30-R$80 |
| Advocacia | R$4,00-R$12,00 | R$50-R$120 |
| Imobiliário | R$2,00-R$6,00 | R$40-R$100 |
| Estética | R$1,50-R$5,00 | R$20-R$50 |
| E-commerce | R$0,50-R$3,00 | R$15-R$45 |

### Fatores que aumentam o CPC:
- Palavras-chave genéricas e altamente disputadas
- Score de qualidade baixo (anúncio irrelevante)
- Localização em grandes capitais (São Paulo, Rio)
- Horários de pico

### Fatores que reduzem o CPC:
- Score de qualidade alto (anúncio + landing page relevantes)
- Palavras-chave de cauda longa (mais específicas)
- Cidades menores e menos disputadas
- Segmentação precisa de horário e localização

## Quanto Investir? Calculando o Orçamento Ideal

### Fórmula simples:

> **Orçamento mensal = Meta de novos clientes × Custo por lead estimado × Taxa de fechamento**

**Exemplo para uma clínica odontológica:**
- Meta: 20 novos pacientes/mês
- Taxa de fechamento (lead → paciente): 30%
- Leads necessários: 20 ÷ 0,30 = 67 leads
- Custo por lead estimado: R$40
- **Orçamento sugerido: R$2.680/mês**

### Orçamentos por porte:

| Porte | Orçamento mensal em anúncios | Resultado esperado |
|---|---|---|
| Iniciante | R$1.000-R$1.500 | 15-30 leads/mês |
| Intermediário | R$2.000-R$5.000 | 40-100 leads/mês |
| Avançado | R$8.000+ | 150+ leads/mês |

## Estrutura de Custos Completa

Além do investimento em anúncios, considere:

**1. Taxa de gestão (agência ou freelancer)**
- R$500-R$1.500/mês para contas pequenas
- 10-15% do investimento em anúncios para contas maiores

**2. Criação de landing page**
- R$1.500-R$5.000 (investimento único)
- Impacta diretamente a taxa de conversão

**3. Ferramentas de apoio**
- Google Analytics 4 (gratuito)
- CRM para gestão de leads: R$50-R$200/mês
- Ferramenta de rastreamento de chamadas: R$100-R$300/mês

## Erros que Desperdiçam Orçamento

1. **Palavras-chave amplas sem refinamento**: você paga por cliques irrelevantes
2. **Sem palavras-chave negativas**: aparecer para pesquisas erradas
3. **Não rastrear conversões**: impossível otimizar sem dados
4. **Anúncios rodando 24/7**: programe para os horários de maior conversão
5. **Sem teste A/B de anúncios**: sempre teste pelo menos 2 versões

## Como Maximizar o ROI

### Estratégias para reduzir o custo por aquisição:

1. **Melhore o score de qualidade**: landing pages relevantes, velocidade de carregamento, taxa de rejeição baixa
2. **Use extensões de anúncio**: aumentam o CTR sem aumentar o CPC
3. **Segmentação por horário**: concentre o orçamento nos melhores horários
4. **Palavras-chave de cauda longa**: menos concorrência, mais intenção
5. **Remarketing**: reconecte com quem já visitou o site (3-5x mais barato que nova aquisição)

## Vale a Pena Investir em Google Ads?

Para a maioria dos negócios, **sim** — quando bem gerenciado. O Google Ads tem uma característica única: você pode ativar e desativar quando quiser, com controle total do orçamento.

O ROI médio para clientes da ClickNex no Google Ads é de **350-500%**. Ou seja, para cada R$1.000 investidos, retornam R$3.500 a R$5.000 em receita.

## Próximos Passos

Quer saber quanto sua empresa específica deveria investir? Nossa equipe faz uma análise gratuita do seu mercado e projeta o potencial de retorno.

[Solicitar análise gratuita →](https://wa.me/5535999757076?text=Quero saber o investimento ideal para minha empresa no Google Ads.)
`,
  "automacao-de-marketing-para-pequenas-empresas": `
## O Que é Automação de Marketing?

Automação de marketing é o uso de software para realizar tarefas de marketing de forma automática, sem intervenção manual. Isso inclui:

- **Envio de e-mails sequenciais** para leads
- **Mensagens automáticas no WhatsApp** para novos contatos
- **Notificações internas** quando um lead toma uma ação importante
- **Segmentação automática** da base de contatos
- **Agendamento e lembretes** para compromissos

O objetivo é **nutrir leads no piloto automático** e liberar sua equipe para focar em atividades de alto valor.

## Por Que Pequenas Empresas Precisam de Automação

### O problema sem automação:

Imagine que você roda uma campanha no Google Ads e capta 50 leads em uma semana. Sem automação:

- Responder cada lead manualmente: 3-5 minutos por lead = 2-4 horas
- Leads que não respondem na primeira tentativa: esquecidos
- Follow-up consistente: depende da disciplina da equipe
- Resultado: **60-70% dos leads nunca são convertidos** por falta de acompanhamento

### Com automação:

- Lead preenche o formulário → recebe mensagem de WhatsApp em segundos
- Sem resposta em 24h → mensagem automática de follow-up
- Sem resposta em 3 dias → sequência de e-mails educativos
- Após 7 dias → notificação para o vendedor ligar
- Resultado: **taxa de conversão 40-60% maior** com o mesmo número de leads

## As 5 Automações Essenciais para Começar

### 1. Boas-vindas imediata (0 a 5 minutos)

Quando um lead preenche um formulário, ele está **no pico do interesse**. Uma resposta em até 5 minutos aumenta a taxa de conversão em até 400% comparado com responder em 24h.

**Sequência:**
- 0 min: WhatsApp com boas-vindas e confirmação do recebimento
- 5 min: E-mail com próximos passos e material de apresentação
- 30 min: Ligação automática via CRM (se não houve resposta)

### 2. Nutrição de leads não convertidos

Para leads que demonstraram interesse mas não fecharam:

- Dia 1: Envio de case de sucesso relevante para o segmento
- Dia 3: Artigo educativo sobre o problema que seu produto resolve
- Dia 7: Oferta exclusiva com urgência (desconto por tempo limitado)
- Dia 14: Última tentativa com conteúdo diferente

### 3. Onboarding de novos clientes

Após a compra/contratação:

- Dia 0: E-mail de boas-vindas com tudo que o cliente precisa saber
- Dia 3: Check-in (está conseguindo usar o serviço?)
- Dia 7: Dica de otimização
- Dia 30: Pesquisa de satisfação (NPS)

### 4. Reativação de clientes inativos

Para clientes que não compram há mais de 60-90 dias:

- Segmentação automática dos inativos
- E-mail com "sentimos sua falta" + oferta especial
- WhatsApp personalizado com proposta de retorno

### 5. Lembretes de compromissos

Para clínicas, consultórios e serviços agendados:

- 48h antes: confirmação por WhatsApp
- 24h antes: lembrete com endereço e instruções
- 2h antes: lembrete final
- **Resultado: redução de 60-70% na taxa de no-show**

## Ferramentas de Automação para Pequenas Empresas

### Plataformas por faixa de preço:

**Gratuitas/econômicas (até R$200/mês):**
- **Brevo** (antigo Sendinblue): e-mail + SMS + automação básica
- **Mailchimp**: focado em e-mail marketing

**Intermediárias (R$200-R$500/mês):**
- **ActiveCampaign**: melhor custo-benefício para automação completa
- **RD Station**: solução brasileira, suporte em pt-BR

**WhatsApp Business API:**
- **Zenvia**: R$299-R$799/mês
- **Twilio**: por uso (mais barato para volumes menores)
- **Treble.ai**: focado em automação de vendas

### CRM integrado:
- **HubSpot CRM** (plano gratuito robusto)
- **Pipedrive**: R$59/usuário/mês
- **Kommo** (antigo amoCRM): excelente integração com WhatsApp

## Como Implementar em 5 Passos

### Passo 1: Mapeie seus fluxos de contato
Identifique todos os pontos de contato com leads e clientes (formulários, WhatsApp, e-mail, ligações).

### Passo 2: Defina os gatilhos
O que dispara cada automação? (preencheu formulário, não respondeu em X horas, comprou, completou X dias sem comprar)

### Passo 3: Crie o conteúdo
Escreva as mensagens de cada etapa. Mantenha um tom humano, mesmo sendo automático.

### Passo 4: Configure e teste
Implemente em uma ferramenta, teste com leads fictícios, ajuste o timing.

### Passo 5: Monitore e otimize
Acompanhe taxa de abertura, cliques e conversões. Teste diferentes textos e horários.

## Resultado Real: Caso ClickNex

Uma clínica de fisioterapia em Lavras-MG implementou automação completa com a ClickNex:

- **Antes**: 35% dos leads eram perdidos por falta de follow-up rápido
- **Depois**: tempo de resposta reduzido para menos de 2 minutos
- **Resultado**: aumento de 67% na taxa de conversão de leads em 90 dias

## Conclusão

Automação de marketing não é só para grandes empresas. Com investimento de R$200-500/mês em ferramentas, pequenas empresas podem competir de igual para igual com concorrentes maiores.

Quer implementar automação no seu negócio? [Fale com um especialista →](https://wa.me/5535999757076?text=Quero implementar automação de marketing no meu negócio.)
`,
  "seo-local-para-clinicas": `
## O Que é SEO Local e Por Que é Crucial para Clínicas

SEO Local é o conjunto de práticas que fazem sua clínica aparecer nas buscas geográficas do Google — especialmente no **Google Maps** e no chamado **"pacote local"** (o bloco de 3 resultados que aparece antes dos resultados orgânicos).

Quando alguém pesquisa "dentista perto de mim" ou "clínica cardiológica em [cidade]", o Google mostra esses 3 resultados locais em destaque. Aparecer neles pode **dobrar o número de ligações** recebidas.

## Google Business Profile: Sua Base de SEO Local

O **Google Business Profile** (antigo Google Meu Negócio) é gratuito e obrigatório. Uma clínica com perfil incompleto simplesmente não aparece.

### Otimização completa do perfil:

**Informações básicas (100% obrigatório):**
- Nome exato da clínica (sem palavras-chave forçadas)
- Endereço completo e correto
- Telefone principal com DDD
- Site oficial
- Horário de funcionamento (incluindo feriados)
- Categoria principal e secundárias

**Categorias corretas:**
- Principal: "Clínica médica" ou especialidade específica
- Secundárias: "Médico", "Serviços de saúde", especialidades atendidas

**Fotos que aumentam conversão:**
- Fachada externa (para facilitar encontrar a clínica)
- Recepção e sala de espera
- Consultórios
- Equipe médica (com autorização)
- Equipamentos modernos (sem pacientes)

### Publicações regulares:

O Google Business Profile tem um feed de publicações que influencia no ranking. Publique **2-3 vezes por semana**:

- Dicas de saúde e prevenção
- Novas especialidades ou horários disponíveis
- Informações sobre convênios aceitos
- Eventos e campanhas de saúde

## Gestão de Avaliações: O Fator Mais Importante

As avaliações no Google são o maior fator de ranking local. Clínicas com mais avaliações positivas aparecem acima das concorrentes, mesmo com localização menos privilegiada.

### Como conseguir mais avaliações:

1. **Peça pessoalmente** após uma consulta bem-sucedida
2. **QR code** na recepção com link direto para avaliação
3. **Mensagem de WhatsApp** após a consulta: "Como foi sua consulta? Ficamos felizes em saber sua opinião."
4. **E-mail automático** 24h após o atendimento

> **Nunca** ofereça incentivos em troca de avaliações — viola as políticas do Google e pode causar suspensão do perfil.

### Como responder avaliações:

**Avaliações positivas:**
- Agradeça pelo nome do paciente (demonstra que a resposta é personalizada)
- Mencione o serviço (reforça a palavra-chave)
- Convide para retornar

**Avaliações negativas:**
- Responda em até 24 horas
- Nunca seja defensivo ou rude
- Peça para resolver offline (evita discussão pública)
- Mostre que você se importa com o feedback

Exemplo de resposta: *"Olá [Nome], sentimos muito pela sua experiência. Nosso objetivo é sempre proporcionar o melhor atendimento. Por favor, entre em contato pelo [telefone] para que possamos entender melhor o que aconteceu."*

## SEO On-Page para Clínicas: Seu Site Local

### Elementos obrigatórios no site:

**Página de contato:**
- Endereço completo com CEP
- Telefone(s) com DDD
- Mapa do Google Maps incorporado
- Formulário de contato
- Horário de funcionamento

**Schema.org LocalBusiness:**
Código técnico que ajuda o Google a entender que seu site é um negócio local. Inclua:
- Nome, endereço, telefone (NAP)
- Geo coordenadas
- Horário de funcionamento
- Especialidades como serviços

**Título e descrição localizados:**
- ✅ "Clínica Cardiológica em Lavras-MG | ClickNex"
- ❌ "Melhor cardiologista do mundo"

### Palavras-chave locais para clínicas:

Inclua nos textos do site (de forma natural):
- "[Especialidade] em [Cidade]"
- "[Especialidade] em [Bairro]"
- "Clínica [especialidade] [cidade] [estado]"
- "Consulta [especialidade] [cidade]"
- "Agendamento [especialidade] [cidade]"

## Citações e Consistência NAP

**NAP** = Name, Address, Phone (Nome, Endereço, Telefone).

A consistência do NAP em todos os lugares onde sua clínica aparece online é crucial para o SEO local. Qualquer variação (abreviação, número errado, endereço antigo) prejudica o ranking.

### Onde garantir NAP consistente:
- Google Business Profile
- Site oficial
- Doctoralia / iClinic
- Reclame Aqui
- Yelp Brasil
- Guia Médico dos planos de saúde que você aceita
- Redes sociais (Facebook, Instagram)

## Monitoramento e Resultados

### Métricas do Google Business Profile para acompanhar:

- **Visualizações**: quantas vezes seu perfil foi visto
- **Pesquisas**: por nome direto vs. por categoria/localização
- **Ações**: cliques para site, chamadas, solicitações de rotas
- **Avaliações**: quantidade e nota média

### Resultado esperado com SEO local otimizado:

- Aumento de 200-400% nas chamadas orgânicas em 3-6 meses
- Posição no top 3 do pacote local para palavras-chave principais
- Redução do custo por aquisição (tráfego orgânico é gratuito)

## Conclusão

SEO local é o investimento de marketing com melhor relação custo-benefício para clínicas. Uma vez que você aparece no topo do Google Maps para sua especialidade e cidade, os pacientes chegam organicamente — sem pagar por cada clique.

Quer uma análise gratuita do SEO local da sua clínica? [Fale com um especialista agora →](https://wa.me/5535999757076?text=Quero fazer uma análise de SEO local para minha clínica.)
`
};
const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return /* @__PURE__ */ jsx(Navigate, { to: "/blog", replace: true });
  const content = postsContent[post.slug] ?? "";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: post.titulo,
        description: post.resumo,
        ogType: "article",
        keywords: post.tags,
        jsonLd: [
          organizationLd(),
          articleLd({
            headline: post.titulo,
            description: post.resumo,
            url: `${SITE_URL}/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            updatedAt: post.publishedAt
          }),
          breadcrumbLd([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Blog", url: `${SITE_URL}/blog` },
            { name: post.titulo, url: `${SITE_URL}/blog/${post.slug}` }
          ])
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("header", { className: "pt-32 pb-16 bg-gradient-to-br from-blue-950 to-blue-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs("a", { href: "/blog", className: "inline-flex items-center gap-2 text-blue-300 hover:text-white mb-6 transition-colors text-sm", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          " Voltar ao blog"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: post.tags.map((tag) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-blue-800 text-blue-200 px-3 py-1 rounded-full", children: tag }, tag)) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-6 leading-tight", children: post.titulo }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-blue-300 text-sm", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
            new Date(post.publishedAt).toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
            " ",
            post.readingTime,
            " de leitura"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("article", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "prose prose-blue prose-lg max-w-none prose-headings:text-blue-950 prose-a:text-blue-700 prose-a:no-underline hover:prose-a:underline",
            dangerouslySetInnerHTML: { __html: renderMarkdown(content) }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-16 p-8 bg-blue-950 rounded-2xl text-white text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: "Quer aplicar isso no seu negócio?" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-200 mb-6", children: "Solicite um diagnóstico gratuito e nossa equipe monta uma estratégia personalizada para você." }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `https://wa.me/5535999757076?text=Olá! Li o artigo "${post.titulo}" e quero um diagnóstico gratuito.`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-block bg-white text-blue-950 font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors",
              children: "Solicitar Diagnóstico Gratuito"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const PoliticaPrivacidade = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Política de Privacidade | ClickNex",
      description: "Política de Privacidade da ClickNex — BERTINI E MEIRELES SERVIÇOS LTDA. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.",
      keywords: ["política de privacidade clicknex", "lgpd clicknex"],
      jsonLd: [
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Política de Privacidade", url: `${SITE_URL}/politica-de-privacidade` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-32 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto prose prose-blue", children: [
      /* @__PURE__ */ jsx("h1", { children: "Política de Privacidade" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm", children: [
        "Última atualização: ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "A ",
        /* @__PURE__ */ jsx("strong", { children: "ClickNex" }),
        " (BERTINI E MEIRELES SERVIÇOS LTDA, CNPJ 61.754.617/0001-97), com sede na ",
        BRAND_ADDRESS.street,
        ", ",
        BRAND_ADDRESS.neighborhood,
        ", ",
        BRAND_ADDRESS.city,
        "-",
        BRAND_ADDRESS.state,
        ", CEP ",
        BRAND_ADDRESS.postalCode,
        ", valoriza sua privacidade e está comprometida com a proteção dos seus dados pessoais em conformidade com a ",
        /* @__PURE__ */ jsx("strong", { children: "Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "1. Dados que Coletamos" }),
      /* @__PURE__ */ jsx("p", { children: "Coletamos dados que você fornece voluntariamente ao preencher formulários de contato ou solicitar diagnósticos, incluindo: nome completo, e-mail, telefone/WhatsApp, nome da empresa e mensagem." }),
      /* @__PURE__ */ jsx("p", { children: "Também coletamos automaticamente dados de navegação via cookies e ferramentas de análise (Google Analytics, Meta Pixel) para melhoria da experiência e mensuração de campanhas." }),
      /* @__PURE__ */ jsx("h2", { children: "2. Finalidade do Tratamento" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Responder às suas solicitações e enviar propostas comerciais" }),
        /* @__PURE__ */ jsx("li", { children: "Enviar comunicações relacionadas aos nossos serviços (com seu consentimento)" }),
        /* @__PURE__ */ jsx("li", { children: "Analisar o desempenho do site e das campanhas de marketing" }),
        /* @__PURE__ */ jsx("li", { children: "Cumprir obrigações legais e regulatórias" })
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "3. Base Legal" }),
      /* @__PURE__ */ jsx("p", { children: "O tratamento dos seus dados é fundamentado no consentimento (Art. 7º, I), na execução de contrato ou procedimentos preliminares (Art. 7º, V) e no legítimo interesse (Art. 7º, IX) da ClickNex." }),
      /* @__PURE__ */ jsx("h2", { children: "4. Compartilhamento de Dados" }),
      /* @__PURE__ */ jsx("p", { children: "Seus dados não são vendidos. Podemos compartilhá-los com parceiros de tecnologia estritamente necessários para a prestação dos serviços (ex: plataformas de CRM, ferramentas de e-mail), sempre sob acordos de confidencialidade." }),
      /* @__PURE__ */ jsx("h2", { children: "5. Seus Direitos (LGPD)" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Você tem direito a: confirmação de tratamento, acesso aos dados, correção, anonimização, portabilidade, eliminação e revogação do consentimento. Para exercer esses direitos, entre em contato: ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${BRAND_EMAIL}`, children: BRAND_EMAIL }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "6. Retenção de Dados" }),
      /* @__PURE__ */ jsx("p", { children: "Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido por lei. Dados de navegação são retidos por até 26 meses." }),
      /* @__PURE__ */ jsx("h2", { children: "7. Cookies" }),
      /* @__PURE__ */ jsx("p", { children: "Utilizamos cookies essenciais (funcionamento do site) e analíticos (Google Analytics 4, Meta Pixel). Você pode gerenciar cookies nas configurações do seu navegador." }),
      /* @__PURE__ */ jsx("h2", { children: "8. Segurança" }),
      /* @__PURE__ */ jsx("p", { children: "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição." }),
      /* @__PURE__ */ jsx("h2", { children: "9. Contato do Encarregado (DPO)" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Para questões relacionadas à privacidade: ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${BRAND_EMAIL}`, children: BRAND_EMAIL }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "10. Atualizações" }),
      /* @__PURE__ */ jsx("p", { children: "Esta política pode ser atualizada periodicamente. Publicaremos as alterações nesta página com a data de revisão." })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const TermosDeUso = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Termos de Uso | ClickNex",
      description: "Termos de Uso do site ClickNex. Leia as condições de uso dos nossos serviços de marketing digital.",
      jsonLd: [
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Termos de Uso", url: `${SITE_URL}/termos-de-uso` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-32 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto prose prose-blue", children: [
      /* @__PURE__ */ jsx("h1", { children: "Termos de Uso" }),
      /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm", children: [
        "Última atualização: ",
        (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Bem-vindo ao site da ",
        /* @__PURE__ */ jsx("strong", { children: SITE_NAME }),
        " (",
        LEGAL_NAME,
        ", CNPJ ",
        TAX_ID,
        "). Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "1. Uso do Site" }),
      /* @__PURE__ */ jsx("p", { children: "Este site é disponibilizado para fins informativos e comerciais. É vedado o uso para fins ilícitos, spam, ou qualquer atividade que possa prejudicar a ClickNex ou terceiros." }),
      /* @__PURE__ */ jsx("h2", { children: "2. Propriedade Intelectual" }),
      /* @__PURE__ */ jsx("p", { children: "Todo o conteúdo deste site — textos, imagens, logotipos, layouts — é de propriedade exclusiva da ClickNex e está protegido pela legislação de propriedade intelectual. A reprodução sem autorização prévia por escrito é proibida." }),
      /* @__PURE__ */ jsx("h2", { children: "3. Responsabilidade" }),
      /* @__PURE__ */ jsx("p", { children: 'As informações neste site são fornecidas "como estão". A ClickNex não garante que o site estará sempre disponível ou livre de erros. Não nos responsabilizamos por danos decorrentes do uso ou impossibilidade de uso do site.' }),
      /* @__PURE__ */ jsx("h2", { children: "4. Links Externos" }),
      /* @__PURE__ */ jsx("p", { children: "Este site pode conter links para sites de terceiros. A ClickNex não controla e não se responsabiliza pelo conteúdo desses sites." }),
      /* @__PURE__ */ jsx("h2", { children: "5. Serviços Contratados" }),
      /* @__PURE__ */ jsx("p", { children: "Os termos específicos de cada serviço contratado são definidos em proposta/contrato individual assinado entre as partes, que prevalece sobre estes termos gerais." }),
      /* @__PURE__ */ jsx("h2", { children: "6. Lei Aplicável" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Estes termos são regidos pela legislação brasileira. O foro para resolução de conflitos é o da Comarca de ",
        BRAND_ADDRESS.city,
        ", ",
        BRAND_ADDRESS.state,
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { children: "7. Contato" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Dúvidas sobre estes termos: ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${BRAND_EMAIL}`, children: BRAND_EMAIL }),
        "."
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const ServiceLandingPage = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const waUrl = `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Tenho interesse no serviço de ${config.hero.h1.toLowerCase()}.`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: config.seo.title,
        description: config.seo.description,
        keywords: config.seo.keywords,
        jsonLd: [
          organizationLd(),
          serviceLd({ ...config.serviceSchema, url: `${SITE_URL}${config.serviceSchema.url}` }),
          faqPageLd(config.faqs),
          breadcrumbLd(config.breadcrumbs.map((b) => ({ ...b, url: b.url.startsWith("http") ? b.url : `${SITE_URL}${b.url}` })))
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm", children: config.hero.eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6 leading-tight", children: config.hero.h1 }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: config.hero.subtitle }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-white text-blue-950 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full shadow-xl", children: /* @__PURE__ */ jsx("a", { href: waUrl, target: "_blank", rel: "noopener noreferrer", children: config.hero.ctaLabel }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-blue-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: config.stats.map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-blue-200 mb-1", children: s.valor }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-300", children: s.label })
      ] }, s.label)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "O que está incluído" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: config.features.map((f) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl mb-4 block", children: f.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-950 mb-2", children: f.titulo }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: f.desc })
        ] }, f.titulo)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Como funciona" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: config.process.map((p, i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-6 items-start", children: [
          /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-black text-sm", children: p.numero }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-950 mb-1", children: p.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: p.desc })
          ] })
        ] }, p.titulo)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: config.faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-xl overflow-hidden", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors",
              onClick: () => setOpenFaq(openFaq === i ? null : i),
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-950 pr-4", children: faq.q }),
                openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-blue-700 flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-gray-400 flex-shrink-0" })
              ]
            }
          ),
          openFaq === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4", children: faq.a })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-950 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-12 h-12 text-blue-300 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pronto para começar?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-blue-200 mb-8", children: [
          "Solicite um diagnóstico gratuito e descubra o potencial do ",
          config.hero.eyebrow.toLowerCase(),
          " para o seu negócio."
        ] }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-white text-blue-950 hover:bg-blue-50 font-bold px-10 py-4 text-lg rounded-full shadow-xl", children: /* @__PURE__ */ jsx("a", { href: waUrl, target: "_blank", rel: "noopener noreferrer", children: config.hero.ctaLabel }) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const trafegoPago = {
  slug: "trafego-pago",
  seo: {
    title: "Tráfego Pago para Empresas | Gestão de Anúncios Google e Meta Ads",
    description: "Gestão profissional de tráfego pago: Google Ads e Meta Ads com foco em ROI mensurável. A ClickNex cria campanhas que geram leads qualificados e vendas reais.",
    keywords: ["tráfego pago", "gestão de anúncios", "google ads", "meta ads", "roi em anúncios", "agência tráfego pago"]
  },
  hero: {
    eyebrow: "Tráfego Pago",
    h1: "Anúncios que Geram Clientes, Não Apenas Cliques",
    subtitle: "Gerenciamos suas campanhas no Google Ads e Meta Ads com metodologia focada em ROI. Cada centavo investido é rastreado e otimizado para máxima performance.",
    ctaLabel: "Solicitar Diagnóstico Gratuito"
  },
  features: [
    { icon: "🎯", titulo: "Campanhas de Alta Precisão", desc: "Segmentação avançada para atingir exatamente quem tem potencial de compra — sem desperdício de orçamento." },
    { icon: "📊", titulo: "Relatórios Semanais Transparentes", desc: "Dashboard ao vivo e relatório semanal com todas as métricas: impressões, cliques, leads e custo por aquisição." },
    { icon: "🔄", titulo: "Otimização Contínua", desc: "Testes A/B permanentes de anúncios, lances e segmentações para melhorar os resultados semana a semana." },
    { icon: "💰", titulo: "Foco em ROI Real", desc: "Não otimizamos para cliques baratos — otimizamos para receita gerada. Cada campanha é medida pelo que importa." },
    { icon: "📱", titulo: "Criativos que Convertem", desc: "Nossa equipe cria os textos e peças visuais alinhados às melhores práticas de cada plataforma." },
    { icon: "🔗", titulo: "Landing Pages Otimizadas", desc: "Criamos ou otimizamos páginas de destino para maximizar a taxa de conversão dos seus anúncios." }
  ],
  process: [
    { numero: "01", titulo: "Diagnóstico", desc: "Análise completa do seu mercado, concorrência e histórico de campanhas para identificar oportunidades." },
    { numero: "02", titulo: "Estratégia", desc: "Definição das plataformas, públicos, orçamento e metas de conversão baseados em dados reais." },
    { numero: "03", titulo: "Configuração", desc: "Estruturação das campanhas, criação de anúncios, instalação de pixels e configuração de rastreamento." },
    { numero: "04", titulo: "Otimização", desc: "Monitoramento diário e ajustes semanais para reduzir o custo por lead e aumentar o volume de conversões." }
  ],
  stats: [
    { valor: "3.5x", label: "ROI médio dos clientes" },
    { valor: "-40%", label: "Redução no custo por lead em 90 dias" },
    { valor: "127+", label: "Empresas atendidas" },
    { valor: "4.9★", label: "Avaliação média" }
  ],
  faqs: [
    { q: "Qual é o investimento mínimo para começar?", a: "Trabalhamos com clientes a partir de R$1.500/mês em verba de anúncios. A taxa de gestão varia conforme o volume e complexidade das campanhas." },
    { q: "Quanto tempo leva para ver os primeiros resultados?", a: "As primeiras conversões costumam aparecer em 7-21 dias. Resultados consolidados com ROI positivo geralmente acontecem entre 45 e 90 dias." },
    { q: "Preciso ter um site para fazer tráfego pago?", a: "Não necessariamente. Podemos usar landing pages criadas pela ClickNex, formulários de geração de leads do próprio Google/Meta, ou o WhatsApp como destino." },
    { q: "Vou ter acesso às minhas contas de anúncios?", a: "Sim, sempre. As contas são criadas ou transferidas para seu CNPJ/CPF. Você tem acesso total em qualquer momento." },
    { q: "Como é feito o acompanhamento?", a: "Você recebe um relatório semanal por e-mail, tem acesso ao dashboard ao vivo e pode agendar reuniões mensais de estratégia com nosso time." }
  ],
  serviceSchema: {
    name: "Gestão de Tráfego Pago — Google Ads e Meta Ads",
    description: "Gestão profissional de campanhas de tráfego pago no Google Ads e Meta Ads, focada em geração de leads qualificados e ROI mensurável.",
    url: "/servicos/trafego-pago"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "Tráfego Pago", url: "/servicos/trafego-pago" }
  ]
};
const TrafegoPago = () => /* @__PURE__ */ jsx(ServiceLandingPage, { config: trafegoPago });
const googleAds = {
  slug: "google-ads",
  seo: {
    title: "Google Ads | Gestão Profissional de Campanhas no Google",
    description: "Gestão especializada de Google Ads: Search, Display, YouTube, Shopping e Performance Max. A ClickNex maximiza seu ROI com campanhas otimizadas por especialistas certificados.",
    keywords: ["google ads", "google adwords", "gestão google ads", "campanhas google", "agência google ads", "search ads"]
  },
  hero: {
    eyebrow: "Google Ads",
    h1: "Apareça no Google no Momento Exato em que Seu Cliente Está Buscando",
    subtitle: "Com o Google Ads gerenciado pela ClickNex, sua empresa aparece antes da concorrência para quem está pronto para comprar — com controle total do investimento.",
    ctaLabel: "Analisar Meu Mercado Gratuitamente"
  },
  features: [
    { icon: "🔍", titulo: "Campanhas de Pesquisa (Search)", desc: "Anúncios de texto que aparecem quando o usuário pesquisa suas palavras-chave. O canal de maior intenção de compra." },
    { icon: "🖼️", titulo: "Display e YouTube", desc: "Banners e vídeos que constroem reconhecimento de marca e fazem remarketing para quem já visitou seu site." },
    { icon: "🛒", titulo: "Google Shopping", desc: "Ideal para e-commerce: anúncios de produto com foto, preço e nota diretamente na página de resultados." },
    { icon: "⚡", titulo: "Performance Max", desc: "A campanha mais avançada do Google: combina todos os canais para maximizar conversões com IA." },
    { icon: "📍", titulo: "Campanhas Locais", desc: "Para negócios físicos: apareça no Google Maps e atraia clientes próximos à sua localização." },
    { icon: "🔁", titulo: "Remarketing Avançado", desc: "Reconecte com visitantes que não converteram. O remarketing tem CPC até 5x menor que campanhas frias." }
  ],
  process: [
    { numero: "01", titulo: "Pesquisa de Palavras-chave", desc: "Identificamos as melhores palavras-chave para o seu negócio: alta intenção, volume e custo competitivo." },
    { numero: "02", titulo: "Estrutura das Campanhas", desc: "Criamos a estrutura ideal: grupos de anúncios temáticos, correspondências corretas e negativas estratégicas." },
    { numero: "03", titulo: "Criação de Anúncios", desc: "Desenvolvemos anúncios responsivos testando múltiplos títulos e descrições para maximizar o CTR." },
    { numero: "04", titulo: "Otimização Contínua", desc: "Análise semanal de termos de pesquisa, lances, score de qualidade e testes A/B permanentes." }
  ],
  stats: [
    { valor: "350%", label: "ROI médio no Google Ads" },
    { valor: "7-21", label: "Dias para primeiras conversões" },
    { valor: "8-15%", label: "Taxa de conversão média" },
    { valor: "9.2/10", label: "Score de qualidade médio" }
  ],
  faqs: [
    { q: "Quanto custa anunciar no Google Ads?", a: "O custo por clique varia conforme o segmento (R$1,50 a R$12,00 na maioria dos nichos). Recomendamos mínimo de R$1.500/mês em verba de anúncios para dados suficientes para otimização." },
    { q: "Preciso de um site para anunciar no Google?", a: "Sim, para Search e Display. Para campanhas de geração de leads, podemos usar formulários nativos do Google Ads sem precisar de landing page." },
    { q: "Qual é a diferença entre Google Ads e SEO?", a: "Google Ads gera resultados imediatos (você paga por cada clique). SEO é orgânico (gratuito por clique) mas leva 3-12 meses para posicionar. O ideal é usar os dois em paralelo." },
    { q: "Minha concorrência tem muito mais orçamento. Consigo competir?", a: "Sim. Com estratégia certa — palavras de cauda longa, score de qualidade alto, segmentação precisa — é possível obter mais conversões com menos orçamento que concorrentes maiores." }
  ],
  serviceSchema: {
    name: "Gestão de Google Ads",
    description: "Gestão especializada de campanhas no Google Ads: Search, Display, YouTube, Shopping e Performance Max com foco em ROI e redução do custo por aquisição.",
    url: "/servicos/google-ads"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "Google Ads", url: "/servicos/google-ads" }
  ]
};
const GoogleAds = () => /* @__PURE__ */ jsx(ServiceLandingPage, { config: googleAds });
const metaAds = {
  slug: "meta-ads",
  seo: {
    title: "Meta Ads | Facebook e Instagram Ads — Gestão Profissional",
    description: "Gestão de Meta Ads (Facebook e Instagram) para gerar leads qualificados e aumentar vendas. Campanhas com segmentação avançada e criativos de alta conversão.",
    keywords: ["meta ads", "facebook ads", "instagram ads", "gestão facebook ads", "anúncios instagram", "agência meta ads"]
  },
  hero: {
    eyebrow: "Meta Ads",
    h1: "Facebook e Instagram que Geram Leads e Vendem de Verdade",
    subtitle: "Criamos e gerenciamos campanhas no Meta Ads com criativos que param o scroll e públicos ultrassegmentados para o seu negócio.",
    ctaLabel: "Quero Mais Leads no Instagram"
  },
  features: [
    { icon: "🎯", titulo: "Segmentação Ultra-precisa", desc: "Públicos por interesses, comportamentos, dados demográficos e lookalike das suas melhores conversões." },
    { icon: "🎨", titulo: "Criativos que Convertem", desc: "Design e copy desenvolvidos para parar o scroll e gerar ação — testados com dados reais." },
    { icon: "📈", titulo: "Funil Completo", desc: "Estratégia de topo, meio e fundo de funil: aquisição, nutrição e conversão em um único ecossistema." },
    { icon: "🔄", titulo: "Remarketing Inteligente", desc: "Reconecte com visitantes do site, engajados no Instagram e seguidores que ainda não compraram." },
    { icon: "📦", titulo: "Catálogo de Produtos", desc: "Para e-commerce: anúncios dinâmicos que mostram automaticamente produtos relevantes para cada usuário." },
    { icon: "💬", titulo: "WhatsApp e Messenger", desc: "Campanhas de clique para conversa: o usuário inicia uma conversa no WhatsApp com um clique no anúncio." }
  ],
  process: [
    { numero: "01", titulo: "Análise de Público", desc: "Mapeamos seu cliente ideal e construímos públicos primários, secundários e lookalike." },
    { numero: "02", titulo: "Estratégia de Criativos", desc: "Definimos formatos, mensagens e ofertas por etapa do funil." },
    { numero: "03", titulo: "Produção e Publicação", desc: "Criamos os anúncios, configuramos o pixel, os eventos de conversão e publicamos." },
    { numero: "04", titulo: "Escala e Otimização", desc: "Identificamos os criativos vencedores, escalamos orçamento e eliminamos o que não funciona." }
  ],
  stats: [
    { valor: "R$2,80", label: "Custo médio por lead (nichos selecionados)" },
    { valor: "40%", label: "Aumento médio em conversões no 1º mês" },
    { valor: "3.2x", label: "ROAS médio dos clientes" },
    { valor: "127+", label: "Clientes atendidos" }
  ],
  faqs: [
    { q: "Meta Ads funciona para qualquer tipo de negócio?", a: "Funciona muito bem para produtos e serviços com apelo visual, ticket médio acima de R$200 e ciclos de decisão curtos. Para B2B de nicho, o LinkedIn costuma complementar melhor." },
    { q: "Quanto devo investir em Meta Ads?", a: "Recomendamos mínimo de R$1.000/mês em verba. Com menos que isso, o algoritmo não tem dados suficientes para otimizar. O ideal é R$1.500-R$3.000/mês para a maioria dos negócios." },
    { q: "A ClickNex cria os criativos ou preciso fornecer?", a: "Nossa equipe cria textos e design dos anúncios. Para campanhas com vídeo, podemos orientar a produção ou recebemos os vídeos brutos para edição." },
    { q: "O que é o pixel do Facebook e por que é importante?", a: "O pixel é um código instalado no seu site que rastreia as ações dos visitantes. Sem ele, é impossível criar públicos de remarketing ou otimizar campanhas para conversão." }
  ],
  serviceSchema: {
    name: "Gestão de Meta Ads (Facebook e Instagram)",
    description: "Gestão profissional de campanhas no Meta Ads com criação de criativos, segmentação avançada e otimização contínua para gerar leads e vendas.",
    url: "/servicos/meta-ads"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "Meta Ads", url: "/servicos/meta-ads" }
  ]
};
const MetaAds = () => /* @__PURE__ */ jsx(ServiceLandingPage, { config: metaAds });
const criacaoSites = {
  slug: "criacao-de-sites",
  seo: {
    title: "Criação de Sites Profissionais | Sites Responsivos com SEO e Conversão",
    description: "Criamos sites profissionais, responsivos, rápidos e otimizados para SEO e conversão. Landing pages, sites institucionais e e-commerce com foco em resultados reais.",
    keywords: ["criação de sites", "desenvolvimento web", "site profissional", "landing page", "site responsivo", "site otimizado seo"]
  },
  hero: {
    eyebrow: "Criação de Sites",
    h1: "Sites que Convertem Visitantes em Clientes",
    subtitle: "Desenvolvemos sites e landing pages focados em performance, SEO e conversão. Rápidos, responsivos e projetados para gerar resultado desde o primeiro acesso.",
    ctaLabel: "Solicitar Orçamento de Site"
  },
  features: [
    { icon: "⚡", titulo: "Performance Máxima", desc: "Sites com carregamento abaixo de 2 segundos. Core Web Vitals otimizados para não perder posições no Google." },
    { icon: "📱", titulo: "100% Responsivo", desc: "Design que funciona perfeitamente em mobile, tablet e desktop. Mais de 70% dos acessos são via celular." },
    { icon: "🔍", titulo: "SEO Técnico Completo", desc: "Estrutura de código otimizada, meta tags, schema markup, sitemap e robots.txt configurados do zero." },
    { icon: "🎯", titulo: "Foco em Conversão", desc: "CTA estratégico, formulários otimizados, prova social e hierarquia visual que guia o visitante à ação." },
    { icon: "🔒", titulo: "Segurança e SSL", desc: "SSL gratuito, proteção contra spam e hospedagem confiável com uptime de 99,9%." },
    { icon: "📊", titulo: "Analytics Integrado", desc: "Google Analytics 4, Meta Pixel e rastreamento de conversões configurados para medir cada resultado." }
  ],
  process: [
    { numero: "01", titulo: "Briefing", desc: "Entendemos seu negócio, público-alvo, concorrência e objetivos de conversão." },
    { numero: "02", titulo: "Wireframe e Design", desc: "Criamos o protótipo visual com foco na jornada do usuário e aprovamos com você." },
    { numero: "03", titulo: "Desenvolvimento", desc: "Codificamos com tecnologias modernas: React, Next.js ou WordPress conforme a necessidade." },
    { numero: "04", titulo: "Entrega e Treinamento", desc: "Publicamos, configuramos o domínio e treinamos sua equipe para gerenciar o conteúdo." }
  ],
  stats: [
    { valor: "<2s", label: "Tempo de carregamento médio" },
    { valor: "95+", label: "Score médio no Google PageSpeed" },
    { valor: "100%", label: "Responsivo em todos os dispositivos" },
    { valor: "30 dias", label: "Prazo médio de entrega" }
  ],
  faqs: [
    { q: "Qual é o investimento para criar um site?", a: "Landing pages simples: a partir de R$1.500. Sites institucionais: R$3.000-R$8.000. E-commerce: R$5.000-R$20.000. O valor depende da complexidade e quantidade de páginas." },
    { q: "Quanto tempo leva para criar um site?", a: "Landing pages: 7-14 dias. Sites institucionais: 21-40 dias. E-commerce: 45-90 dias. Prazos podem variar conforme a agilidade nas aprovações." },
    { q: "Posso gerenciar o conteúdo depois?", a: "Sim. Entregamos com CMS (painel de administração) intuitivo para você atualizar textos e imagens sem precisar de desenvolvedor." },
    { q: "O site vai ter manutenção?", a: "Oferecemos planos de manutenção mensal a partir de R$250/mês que incluem atualizações de segurança, backups e pequenas alterações." }
  ],
  serviceSchema: {
    name: "Criação de Sites Profissionais",
    description: "Desenvolvimento de sites responsivos, rápidos e otimizados para SEO e conversão. Landing pages, sites institucionais e e-commerce.",
    url: "/servicos/criacao-de-sites"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "Criação de Sites", url: "/servicos/criacao-de-sites" }
  ]
};
const CriacaoSites = () => /* @__PURE__ */ jsx(ServiceLandingPage, { config: criacaoSites });
const seoService = {
  slug: "seo",
  seo: {
    title: "SEO | Posicionamento Orgânico no Google para Empresas",
    description: "Estratégias de SEO para posicionar seu site nas primeiras páginas do Google de forma sustentável. Auditoria, SEO técnico, conteúdo e link building.",
    keywords: ["seo", "otimização google", "posicionamento google", "seo para empresas", "agência seo", "seo local"]
  },
  hero: {
    eyebrow: "SEO",
    h1: "Apareça no Google Organicamente e Reduza o Custo por Aquisição",
    subtitle: "Estratégias de SEO que posicionam seu site nas primeiras posições do Google para palavras-chave com real potencial de negócio — de forma sustentável e sem pagar por clique.",
    ctaLabel: "Solicitar Auditoria Gratuita"
  },
  features: [
    { icon: "🔬", titulo: "Auditoria Técnica Completa", desc: "Identificamos e corrigimos todos os problemas técnicos que impedem o Google de indexar e ranquear seu site." },
    { icon: "🔑", titulo: "Pesquisa de Palavras-chave", desc: "Mapeamos as melhores oportunidades de palavras-chave: volume, intenção de busca e dificuldade de ranking." },
    { icon: "✍️", titulo: "Produção de Conteúdo SEO", desc: "Artigos otimizados que ranqueiam no Google e educam seu público, gerando autoridade e leads orgânicos." },
    { icon: "🔗", titulo: "Link Building Ético", desc: "Construção de backlinks de qualidade que aumentam a autoridade do domínio de forma sustentável." },
    { icon: "📍", titulo: "SEO Local", desc: "Otimização para buscas geográficas: Google Maps, Google Meu Negócio e palavras-chave locais." },
    { icon: "📊", titulo: "Relatório Mensal Detalhado", desc: "Acompanhe o progresso de ranking de cada palavra-chave, tráfego orgânico e conversões mensalmente." }
  ],
  process: [
    { numero: "01", titulo: "Auditoria", desc: "Análise completa do site: problemas técnicos, velocidade, conteúdo, backlinks e posições atuais." },
    { numero: "02", titulo: "Estratégia", desc: "Definição do mapa de palavras-chave e calendário editorial baseado em oportunidades reais." },
    { numero: "03", titulo: "Implementação", desc: "Correção técnica, otimização das páginas existentes e publicação de novo conteúdo." },
    { numero: "04", titulo: "Autoridade", desc: "Link building, menções de marca e otimização contínua para consolidar posições no longo prazo." }
  ],
  stats: [
    { valor: "3-6", label: "Meses para ver resultados consistentes" },
    { valor: "0", label: "Custo por clique (tráfego orgânico)" },
    { valor: "10x", label: "Retorno de longo prazo vs. tráfego pago" },
    { valor: "200%+", label: "Aumento de tráfego orgânico em 6 meses" }
  ],
  faqs: [
    { q: "Quanto tempo leva para o SEO funcionar?", a: "Os primeiros resultados começam a aparecer em 2-3 meses. Resultados consolidados e expressivos tipicamente acontecem entre 6 e 12 meses de trabalho contínuo." },
    { q: "SEO ou tráfego pago? Qual escolher?", a: "Idealmente, os dois. O tráfego pago gera resultados imediatos enquanto o SEO cresce. No longo prazo, o SEO tende a ter um custo por aquisição muito menor." },
    { q: "SEO funciona para negócios locais?", a: "Especialmente para negócios locais! SEO local (Google Maps, Google Meu Negócio) é um dos canais com melhor ROI para empresas com atendimento presencial." },
    { q: "Como vocês medem o sucesso do SEO?", a: "Acompanhamos posicionamento de palavras-chave, tráfego orgânico, leads e conversões originados de busca orgânica." }
  ],
  serviceSchema: {
    name: "SEO — Otimização para Motores de Busca",
    description: "Estratégias completas de SEO: auditoria técnica, pesquisa de palavras-chave, produção de conteúdo, link building e SEO local para posicionamento sustentável no Google.",
    url: "/servicos/seo"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "SEO", url: "/servicos/seo" }
  ]
};
const SeoPage = () => /* @__PURE__ */ jsx(ServiceLandingPage, { config: seoService });
const automacao = {
  slug: "automacao-de-marketing",
  seo: {
    title: "Automação de Marketing | Nutrição de Leads e CRM para Empresas",
    description: "Automação de marketing que nutre leads, reduz no-show e aumenta conversões no piloto automático. WhatsApp, e-mail e CRM integrados para o seu negócio.",
    keywords: ["automação de marketing", "crm", "nutrição de leads", "email marketing", "automação whatsapp", "rdstation"]
  },
  hero: {
    eyebrow: "Automação de Marketing",
    h1: "Converta Mais Leads com Menos Esforço no Piloto Automático",
    subtitle: "Implantamos fluxos automáticos de nutrição, follow-up e onboarding que trabalham 24/7 para converter leads em clientes — enquanto você foca no que importa.",
    ctaLabel: "Quero Automatizar Meu Marketing"
  },
  features: [
    { icon: "⚡", titulo: "Resposta Imediata ao Lead", desc: "Mensagem automática em menos de 2 minutos para cada novo lead — aumentando a conversão em até 400%." },
    { icon: "🔄", titulo: "Follow-up Automático", desc: "Sequência de follow-up para leads que não respondem: WhatsApp, e-mail e notificação para o vendedor." },
    { icon: "📧", titulo: "E-mail Marketing", desc: "Fluxos de nutrição personalizados por estágio do funil, segmento e comportamento do lead." },
    { icon: "📅", titulo: "Lembretes de Agendamento", desc: "Confirmação + lembretes automáticos por WhatsApp e SMS. Reduz no-show em até 70%." },
    { icon: "🔗", titulo: "Integração com CRM", desc: "Conexão com HubSpot, RD Station, Kommo e outros CRMs para gestão centralizada de leads." },
    { icon: "📊", titulo: "Relatórios de Funil", desc: "Visualize onde cada lead está no funil e quais automações estão gerando mais conversões." }
  ],
  process: [
    { numero: "01", titulo: "Mapeamento de Funil", desc: "Mapeamos todos os pontos de contato com leads e clientes para identificar onde estão os gargalos." },
    { numero: "02", titulo: "Definição de Fluxos", desc: "Desenhamos os fluxos de automação: gatilhos, condições, mensagens e timing de cada etapa." },
    { numero: "03", titulo: "Implementação", desc: "Configuramos a ferramenta escolhida, criamos os conteúdos e conectamos com seus canais de captação." },
    { numero: "04", titulo: "Monitoramento", desc: "Acompanhamos taxas de abertura, conversão e ajustamos os fluxos com base nos dados." }
  ],
  stats: [
    { valor: "+60%", label: "Aumento médio na taxa de conversão" },
    { valor: "-70%", label: "Redução de no-show com lembretes" },
    { valor: "<2 min", label: "Tempo de resposta ao lead" },
    { valor: "24/7", label: "Operação sem intervenção manual" }
  ],
  faqs: [
    { q: "Quais ferramentas vocês utilizam?", a: "Trabalhamos com RD Station, HubSpot, ActiveCampaign, Kommo, Zenvia, Twilio e outras conforme a necessidade e orçamento do cliente." },
    { q: "Preciso ter uma equipe de TI?", a: "Não. Cuidamos de toda a parte técnica: integração, configuração e manutenção dos fluxos. Você só gerencia os leads que chegam." },
    { q: "Automação de WhatsApp é permitida?", a: "Sim, através da API oficial do WhatsApp Business (Meta). Garantimos conformidade total com os termos de uso para evitar bloqueio do número." },
    { q: "Qual é o investimento?", a: "O custo envolve a ferramenta (R$200-R$800/mês dependendo do volume) e a taxa de implantação e gestão da ClickNex. Solicite um orçamento personalizado." }
  ],
  serviceSchema: {
    name: "Automação de Marketing",
    description: "Implantação de fluxos automáticos de nutrição de leads, follow-up, lembretes e onboarding de clientes via WhatsApp, e-mail e CRM.",
    url: "/servicos/automacao-de-marketing"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Serviços", url: "/servicos" },
    { name: "Automação de Marketing", url: "/servicos/automacao-de-marketing" }
  ]
};
const Automacao = () => /* @__PURE__ */ jsx(ServiceLandingPage, { config: automacao });
const NicheLandingPage = ({ config }) => {
  const [openFaq, setOpenFaq] = useState(null);
  const waUrl = `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou ${config.hero.eyebrow.toLowerCase()} e gostaria de solicitar um diagnóstico gratuito.`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Seo,
      {
        title: config.seo.title,
        description: config.seo.description,
        keywords: config.seo.keywords,
        jsonLd: [
          organizationLd(),
          localBusinessLd(),
          serviceLd({ ...config.serviceSchema, url: `${SITE_URL}${config.serviceSchema.url}` }),
          faqPageLd(config.faqs),
          breadcrumbLd(config.breadcrumbs.map((b) => ({ ...b, url: b.url.startsWith("http") ? b.url : `${SITE_URL}${b.url}` })))
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "absolute w-1 h-1 bg-white rounded-full", style: { left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` } }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto text-center relative z-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm", children: config.hero.eyebrow }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight", children: config.hero.h1 }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: config.hero.subtitle }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl", children: /* @__PURE__ */ jsxs("a", { href: waUrl, target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2 inline" }),
              config.hero.ctaPrimary
            ] }) }),
            config.hero.ctaSecondary && /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsx("a", { href: "#cases", children: config.hero.ctaSecondary }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-blue-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: config.stats.map((s) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-3xl font-black text-blue-200 mb-1", children: s.valor }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-300", children: s.label })
      ] }, s.label)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-blue-950 mb-4", children: [
            "Soluções Completas para ",
            config.hero.eyebrow
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-xl mx-auto", children: "Tudo que você precisa em um único parceiro de marketing." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: config.services.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("span", { className: "text-4xl mb-4 block", children: s.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-950 mb-2", children: s.titulo }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: s.desc })
        ] }, s.titulo)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Por Que a ClickNex?" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: config.differentiators.map((d) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
          /* @__PURE__ */ jsx("span", { className: "text-3xl flex-shrink-0", children: d.icon }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-950 mb-1", children: d.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: d.desc })
          ] })
        ] }, d.titulo)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "cases", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "O Que Nossos Clientes Dizem" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: config.testimonials.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-gray-100 rounded-2xl p-6 shadow-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "flex mb-3", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("span", { className: "text-yellow-400 text-lg", children: "★" }, i)) }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-700 mb-4 leading-relaxed italic", children: [
            '"',
            t.texto,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-blue-950", children: t.nome }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
              t.cargo,
              " · ",
              t.empresa
            ] })
          ] })
        ] }, t.nome)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: config.faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-xl overflow-hidden bg-white", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors",
              onClick: () => setOpenFaq(openFaq === i ? null : i),
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-950 pr-4", children: faq.q }),
                openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-5 h-5 text-blue-700 flex-shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 text-gray-400 flex-shrink-0" })
              ]
            }
          ),
          openFaq === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4", children: faq.a })
        ] }, i)) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-12 h-12 text-blue-300 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Pronto para Transformar seu Negócio?" }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-200 mb-8", children: "Solicite um diagnóstico gratuito. Nossa equipe vai analisar seu caso e apresentar um plano personalizado." }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 text-lg rounded-full shadow-xl", children: /* @__PURE__ */ jsxs("a", { href: waUrl, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2 inline" }),
          config.hero.ctaPrimary
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: waUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors",
          "aria-label": "Contato via WhatsApp",
          children: /* @__PURE__ */ jsx(MessageCircle, { className: "w-7 h-7 text-white" })
        }
      ),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
const dentistas = {
  slug: "dentistas",
  seo: {
    title: "Marketing para Dentistas e Clínicas Odontológicas | Mais Pacientes",
    description: "Marketing digital especializado para dentistas e clínicas odontológicas. Google Ads, Meta Ads e SEO dentro das normas do CFO. Aumente agendamentos de implantes, clareamento e ortodontia.",
    keywords: ["marketing para dentistas", "google ads odontologia", "marketing clínica odontológica", "anúncios dentista", "cfo marketing", "captar pacientes odontologia"]
  },
  hero: {
    eyebrow: "Marketing para Dentistas",
    h1: "Mais Pacientes de Implante, Ortodontia e Estética Dental",
    subtitle: "Estratégias de marketing digital comprovadas para clínicas odontológicas. Atraímos pacientes de alto valor para os procedimentos mais lucrativos do seu consultório.",
    ctaPrimary: "Solicitar Diagnóstico Gratuito",
    ctaSecondary: "Ver Cases de Sucesso"
  },
  stats: [
    { valor: "280%", label: "Aumento médio em agendamentos" },
    { valor: "R$1.8M", label: "Faturamento gerado para dentistas" },
    { valor: "45+", label: "Clínicas odontológicas atendidas" },
    { valor: "94%", label: "Taxa de retenção de clientes" }
  ],
  services: [
    { icon: "🦷", titulo: "Google Ads para Odontologia", desc: 'Anúncios que aparecem para quem pesquisa "implante dentário", "aparelho orthodôntico" e "clareamento dental" na sua cidade.' },
    { icon: "📱", titulo: "Instagram e Facebook Ads", desc: "Campanhas visuais para procedimentos estéticos com segmentação por faixa etária, renda e interesse." },
    { icon: "🌐", titulo: "Site Otimizado para Conversão", desc: "Landing pages com agendamento online integrado, depoimentos de pacientes e apresentação dos procedimentos." },
    { icon: "⭐", titulo: "Gestão de Reputação", desc: "Estratégia para aumentar avaliações no Google e resposta profissional a comentários negativos." },
    { icon: "📧", titulo: "Automação de Lembretes", desc: "Confirmações e lembretes de consulta por WhatsApp e SMS. Reduz faltas em até 70%." },
    { icon: "📊", titulo: "SEO Local", desc: "Otimização do Google Meu Negócio para aparecer no topo do Google Maps para pesquisas de dentista na sua cidade." }
  ],
  differentiators: [
    { icon: "⚖️", titulo: "Conformidade CFO", desc: "Todo conteúdo revisado segundo as normas do Conselho Federal de Odontologia. Sem risco de autuação." },
    { icon: "🎯", titulo: "Foco em Alto Valor", desc: "Priorizamos captação de pacientes para procedimentos de maior ticket: implantes, facetas, ortodontia invisível." },
    { icon: "📈", titulo: "Relatório Semanal", desc: "Você sabe exatamente quantos leads chegaram, qual foi o custo e quantos viraram pacientes." },
    { icon: "🤝", titulo: "Sem Contrato de Fidelidade", desc: "Nossos resultados falam por si. Você fica porque quer, não porque assinou um contrato de 12 meses." }
  ],
  testimonials: [
    { nome: "Dr. Rafael Costa", cargo: "Cirurgião-dentista", empresa: "Clínica OdontoCenter", texto: "Em 3 meses com a ClickNex, triplicamos os agendamentos de implantes. O custo por paciente é muito menor do que eu esperava." },
    { nome: "Dra. Patrícia Lima", cargo: "Especialista em Ortodontia", empresa: "Studio Sorriso", texto: "Finalmente uma agência que entende as restrições do CFO. O conteúdo é ético e ainda gera muitos leads qualificados." },
    { nome: "Dr. André Mendes", cargo: "Implantodontista", empresa: "Clínica Mendes Odonto", texto: "O ROI no primeiro mês já pagou 6 meses de investimento. Recomendo sem reservas." }
  ],
  faqs: [
    { q: "A ClickNex conhece as normas do CFO para publicidade odontológica?", a: 'Sim. Toda campanha para dentistas é revisada com base nas normas do CFO: sem promessas de resultados, sem "antes e depois" de casos cirúrgicos, sem conteúdo sensacionalista.' },
    { q: "Posso anunciar procedimentos como implante e facetas?", a: "Sim, com as restrições adequadas. Podemos criar campanhas eficazes para todos os procedimentos, desde que o conteúdo seja informativo e ético." },
    { q: "Qual tipo de paciente os anúncios vão atrair?", a: "Segmentamos por intenção de compra: pessoas que já pesquisam o procedimento. Isso garante leads mais qualificados e com menor resistência ao orçamento." },
    { q: "Funciona para consultório solo ou apenas para clínicas grandes?", a: "Funciona para ambos. Temos estratégias específicas para consultórios solo com menor investimento e para redes de clínicas." },
    { q: "Vocês atendem em qual região?", a: "Atendemos dentistas e clínicas em todo o Brasil, com time 100% remoto e ferramentas digitais." }
  ],
  serviceSchema: {
    name: "Marketing Digital para Dentistas e Clínicas Odontológicas",
    description: "Estratégias completas de marketing digital para dentistas: Google Ads, Meta Ads, SEO local e automação, dentro das normas do CFO.",
    url: "/nichos/dentistas"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Dentistas", url: "/nichos/dentistas" }
  ]
};
const Dentistas = () => /* @__PURE__ */ jsx(NicheLandingPage, { config: dentistas });
const medicos = {
  slug: "medicos",
  seo: {
    title: "Marketing para Médicos e Consultórios | Atraia Mais Pacientes",
    description: "Marketing digital ético para médicos e consultórios particulares. Google Ads, SEO e automação dentro das normas do CFM. Mais consultas, mais recorrência, mais faturamento.",
    keywords: ["marketing para médicos", "google ads médico", "marketing consultório médico", "captar pacientes médicos", "cfm publicidade médica", "agência marketing médico"]
  },
  hero: {
    eyebrow: "Marketing para Médicos",
    h1: "Sua Agenda Cheia com Pacientes Particulares de Qualidade",
    subtitle: "Marketing digital ético e conforme as normas do CFM para médicos que querem mais consultas particulares, mais procedimentos e mais recorrência de pacientes.",
    ctaPrimary: "Quero uma Agenda Cheia"
  },
  stats: [
    { valor: "340%", label: "Aumento médio em consultas particulares" },
    { valor: "2.1M", label: "Consultas geradas para médicos" },
    { valor: "60+", label: "Especialidades atendidas" },
    { valor: "4.9★", label: "Avaliação média dos clientes" }
  ],
  services: [
    { icon: "🩺", titulo: "Google Ads para Especialidades", desc: 'Anúncios para pesquisas de alta intenção: "cardiologista particular SP", "dermatologista Lavras MG" e centenas de variações.' },
    { icon: "📱", titulo: "Conteúdo Educativo no Instagram", desc: "Gestão do perfil com conteúdo informativo que constrói autoridade e atrai pacientes que buscam referência." },
    { icon: "⭐", titulo: "Google Meu Negócio", desc: "Otimização completa do perfil para aparecer no Google Maps e triplicar as ligações orgânicas." },
    { icon: "📅", titulo: "Agendamento Online", desc: "Sistema de agendamento 24h com lembretes automáticos por WhatsApp. Elimina falhas na recepção e reduz faltas." },
    { icon: "🔄", titulo: "Reativação de Pacientes", desc: "Campanhas automáticas de follow-up para pacientes inativos. A consulta de retorno custa 5x menos que captar um novo paciente." },
    { icon: "📊", titulo: "Relatório de Performance", desc: "Dashboard semanal com custo por consulta, ROI das campanhas e evolução das avaliações no Google." }
  ],
  differentiators: [
    { icon: "⚖️", titulo: "100% Conforme o CFM", desc: "Nenhuma campanha nossa gerou autuação no CRM em +5 anos. Nosso checklist de conformidade garante isso." },
    { icon: "🎯", titulo: "Pacientes Particulares", desc: "Estratégias focadas em atrair pacientes sem convênio, com maior ticket e menos burocracia." },
    { icon: "🏥", titulo: "Especialistas em Saúde", desc: "Não somos agência genérica. 60% da nossa base são profissionais de saúde — conhecemos o mercado profundamente." },
    { icon: "📈", titulo: "Crescimento Previsível", desc: "Projetamos junto com você uma meta de novas consultas por mês e trabalhamos até atingir." }
  ],
  testimonials: [
    { nome: "Dra. Fernanda Alves", cargo: "Dermatologista", empresa: "Clínica DermaCare BH", texto: "Aumentei minha agenda particular em 280% em 4 meses. O custo por consulta é menor do que eu pagava por indicação." },
    { nome: "Dr. Bruno Ferreira", cargo: "Ortopedista", empresa: "Clínica Ortho Plus", texto: "A ClickNex entende as limitações do CFM e ainda assim consegue resultados expressivos. Recomendo para qualquer médico." },
    { nome: "Dra. Camila Rocha", cargo: "Ginecologista", empresa: "Centro Médico Vida", texto: "Minha avaliação no Google passou de 3,8 para 4,9 em 6 meses. As novas pacientes chegam já sabendo quem sou." }
  ],
  faqs: [
    { q: "Posso anunciar para planos de saúde?", a: "Sim, mas a estratégia é diferente. Para convênios, o foco é volume. Para particular, focamos em qualificação e autoridade." },
    { q: "Qual especialidade médica tem melhor resultado?", a: "Dermatologia, ortopedia, cardiologia, ginecologia e cirurgia plástica têm os melhores resultados. Mas qualquer especialidade com demanda particular se beneficia." },
    { q: "Posso aparecer em vídeo no Instagram?", a: "Sim, e é muito eficaz. O médico no Instagram constrói autoridade e confiança que nenhum anúncio consegue sozinho. Orientamos o que dizer e o que evitar." },
    { q: "Como funciona para médico que acabou de montar consultório?", a: "Temos estratégias específicas para consultórios novos: foco em SEO local e Google Meu Negócio para aparecer rapidamente, com investimento menor." }
  ],
  serviceSchema: {
    name: "Marketing Digital para Médicos",
    description: "Marketing digital ético e eficaz para médicos e consultórios: Google Ads, SEO, gestão de reputação e automação conforme normas do CFM.",
    url: "/nichos/medicos"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Médicos", url: "/nichos/medicos" }
  ]
};
const Medicos = () => /* @__PURE__ */ jsx(NicheLandingPage, { config: medicos });
const esteticas = {
  slug: "esteticas",
  seo: {
    title: "Marketing para Clínicas de Estética | Mais Agendamentos de Procedimentos",
    description: "Marketing digital para clínicas de estética e beleza. Google Ads e Meta Ads para procedimentos estéticos: botox, preenchimento, lipo LAD, harmonização facial e muito mais.",
    keywords: ["marketing clínica estética", "google ads estética", "marketing harmonização facial", "anúncios botox", "captar clientes estética", "marketing procedimentos estéticos"]
  },
  hero: {
    eyebrow: "Marketing para Estética",
    h1: "Agenda Lotada de Botox, Harmonização e Procedimentos de Alto Valor",
    subtitle: "Estratégias de marketing digital criadas especificamente para clínicas de estética. Atraímos clientes qualificados para os procedimentos mais lucrativos da sua clínica.",
    ctaPrimary: "Quero Mais Agendamentos"
  },
  stats: [
    { valor: "420%", label: "Aumento médio em agendamentos" },
    { valor: "R$3.2M", label: "Receita gerada para clínicas estéticas" },
    { valor: "35+", label: "Clínicas estéticas atendidas" },
    { valor: "R$42", label: "Custo médio por lead" }
  ],
  services: [
    { icon: "✨", titulo: "Meta Ads para Estética", desc: "Campanhas no Instagram e Facebook com criativos visuais impactantes para procedimentos estéticos." },
    { icon: "🔍", titulo: "Google Ads para Procedimentos", desc: 'Apareça para quem busca "botox em [cidade]", "preenchimento labial perto de mim" e similares.' },
    { icon: "🎬", titulo: "Produção de Criativos", desc: "Vídeos, reels e fotos otimizados para cada procedimento com foco em conversão." },
    { icon: "💬", titulo: "Atendimento via WhatsApp", desc: "Configuramos chatbot + atendimento humano para converter leads em agendamentos rapidamente." },
    { icon: "📅", titulo: "Sistema de Agendamento", desc: "Agendamento online 24h com lembretes automáticos por WhatsApp para reduzir faltas." },
    { icon: "⭐", titulo: "Gestão de Reputação", desc: "Estratégia para maximizar avaliações no Google e Instagram como prova social." }
  ],
  differentiators: [
    { icon: "📸", titulo: "Criativos de Alta Performance", desc: "Equipe de design e copy especializada em conteúdo estético que gera engajamento e conversão." },
    { icon: "🎯", titulo: "Público Qualificado", desc: "Segmentamos por poder aquisitivo, interesse em beleza e comportamento de compra para atrair clientes que pagam." },
    { icon: "📱", titulo: "Instagram que Vende", desc: "Perfil otimizado como vitrine para sua clínica — não apenas curtidas, mas agendamentos reais." },
    { icon: "📊", titulo: "Custo por Agendamento", desc: "Medimos o que importa: não cliques, mas agendamentos realizados e receita gerada por campanha." }
  ],
  testimonials: [
    { nome: "Dra. Isabela Martins", cargo: "Médica Esteta", empresa: "Clínica Bella Vita", texto: "Meu Instagram antes tinha 500 seguidores e zero conversão. Hoje converte 30+ agendamentos por mês." },
    { nome: "Ana Paula Silva", cargo: "Proprietária", empresa: "Studio Estética Premium", texto: "O investimento em Meta Ads retornou 8x em 60 dias. Minha agenda para harmonização facial está lotada." },
    { nome: "Dra. Mariana Costa", cargo: "Biomédica Esteta", empresa: "Instituto Beauté", texto: "A ClickNex entende o mercado de estética. Os criativos são exatamente o que funciona para o meu público." }
  ],
  faqs: [
    { q: 'Posso fazer "antes e depois" nos anúncios de estética?', a: "Para procedimentos não cirúrgicos (botox, preenchimento, limpeza de pele), é possível com cuidado. Para procedimentos cirúrgicos, as normas são mais restritivas. Orientamos caso a caso." },
    { q: "Qual plataforma funciona melhor para estética: Google ou Instagram?", a: "Para estética, o Instagram (Meta Ads) geralmente tem melhor performance por ser uma plataforma visual. O Google complementa para quem já pesquisa o procedimento ativamente." },
    { q: "Funciona para clínica pequena, de um profissional só?", a: "Sim! Temos clientes com clínica solo que faturam mais de R$30k/mês com investimento de R$1.500/mês em anúncios." },
    { q: "Quanto tempo para ver resultados em estética?", a: "O segmento de estética tem um ciclo de decisão mais curto. Normalmente os primeiros agendamentos aparecem em 7-14 dias após o início das campanhas." }
  ],
  serviceSchema: {
    name: "Marketing Digital para Clínicas de Estética",
    description: "Estratégias de marketing digital para clínicas de estética: Meta Ads, Google Ads, criação de criativos e gestão de reputação para aumentar agendamentos de procedimentos.",
    url: "/nichos/esteticas"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Estética", url: "/nichos/esteticas" }
  ]
};
const Esteticas = () => /* @__PURE__ */ jsx(NicheLandingPage, { config: esteticas });
const advocacia = {
  slug: "advocacia",
  seo: {
    title: "Marketing para Advogados e Escritórios de Advocacia | Capte Clientes",
    description: "Marketing digital para advogados dentro das normas da OAB. Google Ads, SEO e conteúdo jurídico que atrai clientes qualificados para seu escritório de advocacia.",
    keywords: ["marketing para advogados", "google ads advocacia", "marketing jurídico", "captar clientes advocacia", "oab marketing digital", "seo escritório advocacia"]
  },
  hero: {
    eyebrow: "Marketing Jurídico",
    h1: "Clientes Qualificados para Seu Escritório, Dentro das Normas da OAB",
    subtitle: "Estratégias de marketing digital que respeitam o Código de Ética da OAB e ainda assim geram um fluxo constante de clientes qualificados para seu escritório.",
    ctaPrimary: "Quero Mais Clientes"
  },
  stats: [
    { valor: "3.8x", label: "ROI médio em 6 meses" },
    { valor: "85%", label: "Dos leads são qualificados" },
    { valor: "20+", label: "Escritórios atendidos" },
    { valor: "R$120", label: "Custo médio por lead qualificado" }
  ],
  services: [
    { icon: "⚖️", titulo: "Google Ads para Advocacia", desc: 'Anúncios para pesquisas de alta intenção: "advogado trabalhista SP", "consultoria jurídica empresarial" e similares.' },
    { icon: "📝", titulo: "Conteúdo Jurídico (Marketing de Conteúdo)", desc: "Artigos e posts que demonstram expertise jurídica, atraem tráfego orgânico e constroem autoridade." },
    { icon: "🔍", titulo: "SEO para Escritórios", desc: "Posicionamento orgânico para palavras-chave jurídicas na sua área de atuação e localidade." },
    { icon: "💼", titulo: "LinkedIn Profissional", desc: "Estratégia de presença no LinkedIn para advocacia empresarial, contratos e M&A." },
    { icon: "📊", titulo: "Google Meu Negócio", desc: "Otimização do perfil para aparecer no Google Maps para pesquisas locais de advogado." },
    { icon: "🔄", titulo: "Automação de Qualificação", desc: "Fluxo automático que qualifica leads antes da consulta, economizando o tempo do advogado." }
  ],
  differentiators: [
    { icon: "⚖️", titulo: "Conforme o Código de Ética OAB", desc: "Conhecemos profundamente o Provimento 205/2021. Todo material segue as diretrizes de publicidade da OAB." },
    { icon: "🎯", titulo: "Leads Pré-qualificados", desc: "Filtramos os leads com perguntas estratégicas antes de chegarem ao advogado, economizando horas de triagem." },
    { icon: "📈", titulo: "Alta Conversão", desc: "Taxa de conversão média de 30% (lead → cliente) para escritórios bem posicionados." },
    { icon: "🤝", titulo: "Confidencialidade Garantida", desc: "Assinamos NDA com todos os clientes. Seus dados de performance são 100% sigilosos." }
  ],
  testimonials: [
    { nome: "Dr. Carlos Eduardo Nunes", cargo: "Advogado Trabalhista", empresa: "Nunes Advogados", texto: "Triplicamos o número de consultas iniciais em 4 meses. A ClickNex entende as limitações da OAB e ainda gera resultados." },
    { nome: "Dra. Juliana Faria", cargo: "Advogada de Família", empresa: "Faria & Associados", texto: "O Google Ads para advocacia de família que eles configuraram tem custo por lead muito abaixo do mercado." },
    { nome: "Roberto Alves", cargo: "Sócio", empresa: "Alves e Lima Advogados", texto: "O conteúdo jurídico que produzem posicionou nosso site para 40+ palavras-chave relevantes em 6 meses." }
  ],
  faqs: [
    { q: "O que é permitido na publicidade de advocacia pela OAB?", a: "É permitido: informar especialidades, áreas de atuação, endereço e contato. Conteúdo educativo, artigos e perfis em redes sociais também são permitidos com moderação. O Provimento 205/2021 é nossa referência." },
    { q: "Posso usar Google Ads para advocacia?", a: 'Sim, com restrições. O conteúdo deve ser informativo, sem promessas de resultado ("garanto ganhar sua causa" é proibido). A ClickNex configura campanhas conformes com a OAB.' },
    { q: "Quais áreas do direito funcionam melhor para marketing?", a: "Trabalhista, família/divórcio, previdenciário, imobiliário e criminal (consulta) têm alta demanda por busca online. Empresarial funciona melhor via LinkedIn e indicações." },
    { q: "Vale a pena para advogado autônomo (sem sócio)?", a: "Sim. Um advogado solo com estratégia certa pode ter resultados melhores que um escritório médio. O segredo é o nicho e a posição clara." }
  ],
  serviceSchema: {
    name: "Marketing Digital para Escritórios de Advocacia",
    description: "Estratégias de marketing jurídico dentro das normas da OAB: Google Ads, SEO, conteúdo jurídico e automação para captar clientes qualificados.",
    url: "/nichos/advocacia"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Advocacia", url: "/nichos/advocacia" }
  ]
};
const Advocacia = () => /* @__PURE__ */ jsx(NicheLandingPage, { config: advocacia });
const imobiliarias = {
  slug: "imobiliarias",
  seo: {
    title: "Marketing para Imobiliárias e Corretores de Imóveis | Mais Vendas",
    description: "Marketing digital para imobiliárias e corretores. Google Ads, Meta Ads e SEO imobiliário para captar compradores e vendedores. Gere mais leads de imóveis com a ClickNex.",
    keywords: ["marketing imobiliário", "google ads imóveis", "marketing para corretores", "leads imobiliários", "anúncios imobiliária", "captação de imóveis"]
  },
  hero: {
    eyebrow: "Marketing Imobiliário",
    h1: "Mais Leads de Compradores e Vendedores de Imóveis",
    subtitle: "Estratégias de marketing digital para imobiliárias e corretores autônomos. Captamos leads qualificados de compradores prontos para fechar e proprietários com imóveis para vender.",
    ctaPrimary: "Quero Mais Leads Imobiliários"
  },
  stats: [
    { valor: "290%", label: "Aumento em leads qualificados" },
    { valor: "R$4.5M", label: "Em imóveis vendidos via leads" },
    { valor: "25+", label: "Imobiliárias atendidas" },
    { valor: "R$85", label: "Custo médio por lead" }
  ],
  services: [
    { icon: "🏠", titulo: "Google Ads para Imóveis", desc: 'Anúncios para "comprar apartamento em [cidade]", "casa para vender em [bairro]" e outros termos de alta intenção.' },
    { icon: "📱", titulo: "Meta Ads com Catálogo de Imóveis", desc: "Campanhas com fotos e detalhes dos imóveis diretamente no feed do Instagram e Facebook." },
    { icon: "🎬", titulo: "Vídeos de Imóveis", desc: "Roteiro e edição de vídeos para tours virtuais e apresentação de empreendimentos." },
    { icon: "🌐", titulo: "SEO para Imobiliárias", desc: "Posicionamento orgânico para pesquisas de imóveis na sua cidade e bairros de atuação." },
    { icon: "💬", titulo: "Automação de Atendimento", desc: "Chatbot + sequência de WhatsApp para qualificar leads antes do contato com o corretor." },
    { icon: "📊", titulo: "Relatório de Performance", desc: "Acompanhe custo por lead, taxa de conversão por tipo de imóvel e ROI das campanhas." }
  ],
  differentiators: [
    { icon: "🎯", titulo: "Leads Qualificados", desc: "Filtramos por faixa de preço, localização e momento de compra para economizar o tempo dos corretores." },
    { icon: "📸", titulo: "Criativos com Imóveis Reais", desc: "Usando suas fotos e vídeos, criamos anúncios que geram interesse genuíno pelos imóveis certos." },
    { icon: "🔄", titulo: "Remarketing Imobiliário", desc: "Reconecte com quem visitou seu site e não entrou em contato. O ciclo de compra de imóvel é longo." },
    { icon: "📈", titulo: "Escala com o Portfólio", desc: "À medida que o portfólio cresce, escalamos as campanhas sem aumentar proporcionalmente o custo." }
  ],
  testimonials: [
    { nome: "Lucas Ferreira", cargo: "Corretor", empresa: "LF Imóveis", texto: "Aumentei minhas vendas em 70% em 5 meses com a ClickNex. Os leads chegam muito mais qualificados." },
    { nome: "Mariana Oliveira", cargo: "Diretora Comercial", empresa: "Oliveira Imóveis", texto: "Nossa imobiliária nunca teve tanta captação de imóveis para vender. A estratégia para vendedores funciona muito bem." },
    { nome: "Pedro Santos", cargo: "Corretor Autônomo", empresa: "Santos Imóveis", texto: "Trabalho sozinho e a ClickNex me ajudou a ter a mesma presença digital de uma imobiliária grande." }
  ],
  faqs: [
    { q: "Marketing imobiliário funciona para imóveis de alto padrão?", a: "Sim. Para alto padrão, a estratégia muda: foco em Google (pesquisa ativa), LinkedIn e conteúdo de autoridade em vez de volume de leads." },
    { q: "Como captar vendedores de imóveis via marketing digital?", a: 'Com campanhas específicas para proprietários: "quanto vale meu imóvel?", "vender meu apartamento rápido" e similares. É uma estratégia menos explorada e muito eficaz.' },
    { q: "Vale a pena para corretor autônomo?", a: "Sim, especialmente no Google Ads e SEO local. Corretores autônomos conseguem resultados expressivos com R$1.000-R$2.000/mês em anúncios." },
    { q: "Trabalham com lançamentos e construtoras?", a: "Sim. Temos experiência com pré-lançamento, lançamento e estoque de construtoras." }
  ],
  serviceSchema: {
    name: "Marketing Digital para Imobiliárias",
    description: "Marketing digital especializado para imobiliárias e corretores: Google Ads, Meta Ads com catálogo de imóveis, SEO e automação para captação de compradores e vendedores.",
    url: "/nichos/imobiliarias"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "Imobiliárias", url: "/nichos/imobiliarias" }
  ]
};
const Imobiliarias = () => /* @__PURE__ */ jsx(NicheLandingPage, { config: imobiliarias });
const ecommerce = {
  slug: "ecommerce",
  seo: {
    title: "Marketing para E-commerce | Aumente as Vendas Online da sua Loja",
    description: "Marketing digital para e-commerce: Google Shopping, Meta Ads, SEO e automação de carrinho abandonado. Escalamos lojas virtuais com estratégias de performance.",
    keywords: ["marketing ecommerce", "google shopping", "meta ads loja virtual", "seo ecommerce", "aumentar vendas online", "agência marketing ecommerce"]
  },
  hero: {
    eyebrow: "Marketing para E-commerce",
    h1: "Escale Suas Vendas Online com Estratégias de Performance",
    subtitle: "Google Shopping, Meta Ads, remarketing e SEO integrados em uma estratégia completa para maximizar o ROAS da sua loja virtual e reduzir o custo de aquisição.",
    ctaPrimary: "Analisar Meu E-commerce"
  },
  stats: [
    { valor: "4.2x", label: "ROAS médio dos clientes" },
    { valor: "-35%", label: "Redução no custo de aquisição" },
    { valor: "30+", label: "E-commerces atendidos" },
    { valor: "+180%", label: "Crescimento médio em receita" }
  ],
  services: [
    { icon: "🛒", titulo: "Google Shopping", desc: "Anúncios de produto com foto, preço e nota diretamente na página de resultados do Google — altíssima intenção de compra." },
    { icon: "📦", titulo: "Meta Ads com Catálogo", desc: "Anúncios dinâmicos que mostram automaticamente os produtos certos para cada usuário baseado no comportamento de navegação." },
    { icon: "🔄", titulo: "Recuperação de Carrinho", desc: "Sequência automática de remarketing e e-mail para recuperar clientes que abandonaram o carrinho." },
    { icon: "🔍", titulo: "SEO para Lojas Virtuais", desc: "Otimização de fichas de produto, categorias e conteúdo para gerar tráfego orgânico gratuito." },
    { icon: "📊", titulo: "Analytics e CRO", desc: "Análise de dados e testes de otimização de conversão (CRO) para vender mais sem aumentar o tráfego." },
    { icon: "📧", titulo: "E-mail Marketing", desc: "Fluxos automáticos de pós-compra, upsell, reativação e promoções segmentadas por comportamento." }
  ],
  differentiators: [
    { icon: "📈", titulo: "Foco em ROAS, Não em Cliques", desc: "Cada decisão de campanha é baseada no retorno sobre o investimento em anúncios, não em métricas de vaidade." },
    { icon: "🔬", titulo: "Testes Constantes", desc: "Testamos criativos, públicos, páginas de produto e fluxos de e-mail continuamente para encontrar o que converte mais." },
    { icon: "🔗", titulo: "Integração Completa", desc: "Conectamos Google Ads, Meta Ads, e-mail, WhatsApp e SEO em um ecossistema coeso de performance." },
    { icon: "📊", titulo: "Dashboard em Tempo Real", desc: "Visualize ROAS, receita, ticket médio e CAC por canal em um único painel atualizado diariamente." }
  ],
  testimonials: [
    { nome: "Thiago Mendes", cargo: "Fundador", empresa: "Inovare E-commerce", texto: "Passamos de R$50k para R$200k/mês em receita em 8 meses com a ClickNex. O ROAS no Google Shopping é impressionante." },
    { nome: "Renata Carvalho", cargo: "Diretora de Marketing", empresa: "Fashion Store Online", texto: "A recuperação de carrinho sozinha paga o investimento mensal. A automação de e-mail gera vendas no piloto automático." },
    { nome: "Paulo Lima", cargo: "CEO", empresa: "TechShop Brasil", texto: "A ClickNex foi a única agência que conseguiu escalar nosso e-commerce de eletrônicos mantendo o ROAS acima de 4x." }
  ],
  faqs: [
    { q: "Qual plataforma é melhor para e-commerce: Google ou Meta?", a: "As duas se complementam: Google Shopping captura quem já quer comprar; Meta Ads cria desejo em quem não estava procurando. Juntas, maximizam o alcance e a receita." },
    { q: "Meu e-commerce é pequeno. Vale a pena?", a: "A partir de R$15k/mês em faturamento já faz sentido investir em gestão de anúncios. Para lojas menores, recomendamos começar com SEO e automação de e-mail." },
    { q: "Trabalham com Shopify, VTEX, WooCommerce?", a: "Sim. Trabalhamos com todas as principais plataformas de e-commerce do mercado." },
    { q: "O que é ROAS e por que é a métrica mais importante?", a: "ROAS (Return on Ad Spend) é quanto você fatura para cada R$1 investido em anúncios. Um ROAS de 4x significa que R$1.000 em anúncios gerou R$4.000 em receita." }
  ],
  serviceSchema: {
    name: "Marketing Digital para E-commerce",
    description: "Marketing de performance para e-commerce: Google Shopping, Meta Ads com catálogo, SEO, automação de carrinho abandonado e CRO para maximizar ROAS.",
    url: "/nichos/ecommerce"
  },
  breadcrumbs: [
    { name: "Home", url: "/" },
    { name: "E-commerce", url: "/nichos/ecommerce" }
  ]
};
const Ecommerce = () => /* @__PURE__ */ jsx(NicheLandingPage, { config: ecommerce });
const faqs$1 = [
  { q: "A ClickNex atende somente em Lavras-MG?", a: "Nossa sede é em Lavras-MG, mas atendemos clientes em todo o Brasil de forma 100% remota. Para empresas da região Sul de Minas, também oferecemos reuniões presenciais." },
  { q: "Quais tipos de negócios de Lavras vocês já atenderam?", a: "Clínicas médicas e odontológicas, escritórios de advocacia, imobiliárias, comércios locais e prestadores de serviços de Lavras e região." },
  { q: "Como funciona o início do serviço?", a: "Começamos com um diagnóstico gratuito: analisamos seu mercado local, concorrência e oportunidades. Em seguida, apresentamos uma proposta personalizada." },
  { q: "Vocês conhecem o mercado de Lavras e Sul de Minas?", a: "Sim. Somos de Lavras e conhecemos a dinâmica do mercado local: sazonalidades, principais concorrentes e comportamento dos consumidores da região." }
];
const LocalLavras = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Agência de Marketing Digital em Lavras-MG | ClickNex",
      description: "ClickNex: agência de marketing digital localizada em Lavras-MG. Especialistas em tráfego pago, Google Ads, Meta Ads e automação para empresas de Lavras e Sul de Minas Gerais.",
      keywords: ["agência marketing digital lavras mg", "marketing digital lavras", "google ads lavras mg", "agência lavras minas gerais", "marketing digital sul de minas"],
      jsonLd: [
        organizationLd(),
        localBusinessLd(),
        serviceLd({
          name: "Marketing Digital em Lavras-MG",
          description: "Agência de marketing digital em Lavras-MG especializada em tráfego pago, criação de sites e automação para empresas locais.",
          url: `${SITE_URL}/agencia-marketing-digital-lavras-mg`
        }),
        faqPageLd(faqs$1),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Lavras-MG", url: `${SITE_URL}/agencia-marketing-digital-lavras-mg` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-800 rounded-full px-4 py-2 mb-6 text-blue-200 text-sm", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
        " Lavras, Minas Gerais"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6 leading-tight", children: [
        "Agência de Marketing Digital",
        /* @__PURE__ */ jsx("br", {}),
        "em ",
        /* @__PURE__ */ jsx("span", { className: "text-blue-300", children: "Lavras-MG" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "A ClickNex é uma agência de marketing digital localizada em Lavras-MG. Ajudamos empresas da cidade e do Sul de Minas a crescer com tráfego pago, SEO e automações." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou de Lavras-MG e gostaria de um diagnóstico gratuito.`, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2 inline" }),
          " Solicitar Diagnóstico Gratuito"
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsxs("a", { href: `tel:${BRAND_PHONE}`, children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2 inline" }),
          " Ligar Agora"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Por Que Escolher uma Agência Local?" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        { titulo: "Conhecemos o Mercado Local", desc: "Entendemos a dinâmica de Lavras e Sul de Minas: sazonalidades, concorrentes, comportamento do consumidor regional." },
        { titulo: "Atendimento Próximo", desc: "Reuniões presenciais disponíveis para clientes de Lavras e região. Não somos só mais um e-mail na caixa de entrada." },
        { titulo: "Referências Locais", desc: "Você pode conversar com nossos clientes de Lavras antes de contratar. Transparência total." },
        { titulo: "Comprometimento com a Comunidade", desc: "Nosso sucesso depende do sucesso dos negócios locais. Temos interesse genuíno no crescimento da sua empresa." }
      ].map((i) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-blue-950 mb-1", children: i.titulo }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: i.desc })
        ] })
      ] }, i.titulo)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-blue-950 mb-6", children: "Nossa Localização" }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-sm", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-10 h-10 text-blue-700 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-blue-950 mb-1", children: BRAND_ADDRESS.street }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: BRAND_ADDRESS.neighborhood }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
          BRAND_ADDRESS.city,
          "-",
          BRAND_ADDRESS.state,
          ", CEP ",
          BRAND_ADDRESS.postalCode
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-blue-700 font-semibold mt-4", children: BRAND_PHONE })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Perguntas Frequentes" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs$1.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-xl p-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-950 mb-2", children: faq.q }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: faq.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const cidades = ["Lavras", "Varginha", "Três Corações", "Itajubá", "Pouso Alegre", "Alfenas", "Passos", "Poços de Caldas", "São Lourenço", "Caxambu"];
const faqs = [
  { q: "A ClickNex atende empresas de toda a região Sul de Minas?", a: "Sim. Atendemos empresas de Varginha, Pouso Alegre, Itajubá, Alfenas, Três Corações, Passos e toda a macrorregião Sul de Minas Gerais." },
  { q: "Como é o atendimento para clientes de outras cidades?", a: "O atendimento é 100% remoto via videochamada e WhatsApp. Para cidades próximas a Lavras, reuniões presenciais podem ser agendadas." },
  { q: "Quais são os principais nichos atendidos no Sul de Minas?", a: "Clínicas médicas, clínicas odontológicas, estética, advocacia, imobiliárias e comércios locais." },
  { q: "O custo é o mesmo para empresas de fora de Lavras?", a: "Sim. Não cobramos diferente por localização. O investimento é baseado no escopo do serviço, não no endereço da empresa." }
];
const LocalSulDeMinas = () => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(
    Seo,
    {
      title: "Agência de Marketing Digital no Sul de Minas Gerais | ClickNex",
      description: "ClickNex: agência de marketing digital especialista em empresas do Sul de Minas Gerais. Atendemos Varginha, Pouso Alegre, Itajubá, Alfenas, Três Corações e toda a região.",
      keywords: ["agência marketing digital sul de minas", "marketing digital minas gerais", "google ads sul de minas", "agência varginha mg", "marketing digital pouso alegre", "agência itajubá"],
      jsonLd: [
        organizationLd(),
        localBusinessLd(),
        serviceLd({
          name: "Marketing Digital no Sul de Minas Gerais",
          description: "Agência de marketing digital especializada em empresas do Sul de Minas Gerais: tráfego pago, SEO e automação.",
          url: `${SITE_URL}/agencia-marketing-digital-sul-de-minas`
        }),
        faqPageLd(faqs),
        breadcrumbLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Sul de Minas", url: `${SITE_URL}/agencia-marketing-digital-sul-de-minas` }
        ])
      ]
    }
  ),
  /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("section", { className: "pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-800 rounded-full px-4 py-2 mb-6 text-blue-200 text-sm", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4" }),
        " Sul de Minas Gerais"
      ] }),
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6 leading-tight", children: [
        "Agência de Marketing Digital",
        /* @__PURE__ */ jsx("br", {}),
        "para o ",
        /* @__PURE__ */ jsx("span", { className: "text-blue-300", children: "Sul de Minas Gerais" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "A ClickNex atende empresas em toda a macrorregião Sul de Minas com estratégias de tráfego pago, SEO e automação que geram crescimento real." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou do Sul de Minas e gostaria de um diagnóstico gratuito.`, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2 inline" }),
          " Diagnóstico Gratuito"
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsxs("a", { href: `tel:${BRAND_PHONE}`, children: [
          /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 mr-2 inline" }),
          " Ligar Agora"
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Cidades Atendidas" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        cidades.map((cidade) => /* @__PURE__ */ jsxs("span", { className: "bg-blue-50 text-blue-800 px-5 py-2 rounded-full font-medium text-sm border border-blue-100 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "w-3 h-3" }),
          " ",
          cidade,
          "-MG"
        ] }, cidade)),
        /* @__PURE__ */ jsx("span", { className: "bg-gray-50 text-gray-600 px-5 py-2 rounded-full font-medium text-sm border border-gray-200", children: "e toda a região" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "O Que Fazemos para Empresas do Sul de Minas" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto", children: [
        { icon: "🎯", t: "Tráfego Pago Local", d: "Google Ads e Meta Ads segmentados por cidade e região, maximizando cada real investido." },
        { icon: "🔍", t: "SEO Local", d: "Posicionamento no Google Maps e Google para pesquisas na sua cidade e cidades próximas." },
        { icon: "🌐", t: "Criação de Sites", d: "Sites otimizados para o mercado local com foco em SEO regional e geração de leads." },
        { icon: "🤖", t: "Automação", d: "Respostas automáticas, follow-up e lembretes para não perder nenhum lead local." },
        { icon: "⭐", t: "Gestão de Reputação", d: "Mais avaliações no Google e Instagram para construir confiança na sua cidade." },
        { icon: "📊", t: "Relatórios Claros", d: "Saiba exatamente de qual cidade vieram seus leads e quais canais estão funcionando." }
      ].map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start", children: [
        /* @__PURE__ */ jsx("span", { className: "text-3xl", children: s.icon }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-blue-950 mb-1", children: s.t }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: s.d })
        ] })
      ] }, s.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-blue-950 text-center mb-12", children: "Perguntas Frequentes" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => /* @__PURE__ */ jsxs("div", { className: "border border-gray-200 rounded-xl p-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-950 mb-2", children: faq.q }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: faq.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-blue-950 text-white text-center", children: /* @__PURE__ */ jsxs("div", { className: "container-custom max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Sua Empresa no Sul de Minas Merece Crescer" }),
      /* @__PURE__ */ jsx("p", { className: "text-blue-200 mb-8", children: "Diagnóstico gratuito sem compromisso. Nossa equipe analisa seu mercado local e apresenta um plano personalizado." }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 text-lg rounded-full", children: /* @__PURE__ */ jsxs("a", { href: `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou do Sul de Minas e gostaria de um diagnóstico gratuito.`, target: "_blank", rel: "noopener noreferrer", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "w-5 h-5 mr-2 inline" }),
        " Solicitar Diagnóstico Gratuito"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] })
] });
const queryClient = new QueryClient();
const App = () => /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
  /* @__PURE__ */ jsx(Toaster$1, {}),
  /* @__PURE__ */ jsx(Toaster, {}),
  /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Clinicas, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/agencia", element: /* @__PURE__ */ jsx(Index, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/clinicas", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/sobre", element: /* @__PURE__ */ jsx(Sobre, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos", element: /* @__PURE__ */ jsx(ServicosHub, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contato", element: /* @__PURE__ */ jsx(Contato, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/politica-de-privacidade", element: /* @__PURE__ */ jsx(PoliticaPrivacidade, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/termos-de-uso", element: /* @__PURE__ */ jsx(TermosDeUso, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos/trafego-pago", element: /* @__PURE__ */ jsx(TrafegoPago, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos/google-ads", element: /* @__PURE__ */ jsx(GoogleAds, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos/meta-ads", element: /* @__PURE__ */ jsx(MetaAds, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos/criacao-de-sites", element: /* @__PURE__ */ jsx(CriacaoSites, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos/seo", element: /* @__PURE__ */ jsx(SeoPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/servicos/automacao-de-marketing", element: /* @__PURE__ */ jsx(Automacao, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/clinicas", element: /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true }) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/dentistas", element: /* @__PURE__ */ jsx(Dentistas, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/medicos", element: /* @__PURE__ */ jsx(Medicos, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/esteticas", element: /* @__PURE__ */ jsx(Esteticas, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/advocacia", element: /* @__PURE__ */ jsx(Advocacia, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/imobiliarias", element: /* @__PURE__ */ jsx(Imobiliarias, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/nichos/ecommerce", element: /* @__PURE__ */ jsx(Ecommerce, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/agencia-marketing-digital-lavras-mg", element: /* @__PURE__ */ jsx(LocalLavras, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/agencia-marketing-digital-sul-de-minas", element: /* @__PURE__ */ jsx(LocalSulDeMinas, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog", element: /* @__PURE__ */ jsx(BlogIndex, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/blog/:slug", element: /* @__PURE__ */ jsx(BlogPost, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
  ] })
] }) });
HelmetProvider.canUseDOM = false;
function render(url) {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(App, {}) }) })
  );
  const h = helmetContext.helmet;
  const head = h ? [h.title.toString(), h.meta.toString(), h.link.toString(), h.script.toString()].filter(Boolean).join("\n    ") : "";
  return { html, head };
}
export {
  render
};
