import {
  SITE_URL,
  SITE_NAME,
  LEGAL_NAME,
  TAX_ID,
  BRAND_PHONE,
  BRAND_EMAIL,
  BRAND_ADDRESS,
  BRAND_GEO,
  DEFAULT_OG_IMAGE,
  SOCIAL_LINKS,
} from '@/components/seo/siteConfig';

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    taxID: TAX_ID,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND_PHONE,
      email: BRAND_EMAIL,
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND_ADDRESS.street,
      addressLocality: BRAND_ADDRESS.city,
      addressRegion: BRAND_ADDRESS.state,
      postalCode: BRAND_ADDRESS.postalCode,
      addressCountry: BRAND_ADDRESS.country,
    },
    sameAs: SOCIAL_LINKS,
  };
}

export function localBusinessLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    description:
      'Agência de marketing digital especializada em tráfego pago, criação de sites e automações para negócios locais e clínicas médicas.',
    url: SITE_URL,
    telephone: BRAND_PHONE,
    email: BRAND_EMAIL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND_ADDRESS.street,
      addressLocality: BRAND_ADDRESS.city,
      addressRegion: BRAND_ADDRESS.state,
      postalCode: BRAND_ADDRESS.postalCode,
      addressCountry: BRAND_ADDRESS.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BRAND_GEO.lat,
      longitude: BRAND_GEO.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Lavras' },
      { '@type': 'State', name: 'Minas Gerais' },
      { '@type': 'Country', name: 'Brasil' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/buscar?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export interface ServiceLdInput {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function serviceLd(cfg: ServiceLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cfg.name,
    description: cfg.description,
    url: cfg.url.startsWith('http') ? cfg.url : `${SITE_URL}${cfg.url}`,
    image: cfg.image ?? `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    inLanguage: 'pt-BR',
  };
}

export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: a,
      },
    })),
  };
}

export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export interface ArticleLdInput {
  headline: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
}

export function articleLd(cfg: ArticleLdInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cfg.headline,
    description: cfg.description,
    url: cfg.url.startsWith('http') ? cfg.url : `${SITE_URL}${cfg.url}`,
    image: cfg.image ?? `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    datePublished: cfg.publishedAt,
    dateModified: cfg.updatedAt ?? cfg.publishedAt,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': cfg.url.startsWith('http') ? cfg.url : `${SITE_URL}${cfg.url}`,
    },
    inLanguage: 'pt-BR',
  };
}
