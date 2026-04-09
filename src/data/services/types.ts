export interface ServiceConfig {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    ctaLabel: string;
  };
  features: { icon: string; titulo: string; desc: string }[];
  process: { numero: string; titulo: string; desc: string }[];
  stats: { valor: string; label: string }[];
  faqs: { q: string; a: string }[];
  serviceSchema: {
    name: string;
    description: string;
    url: string;
  };
  breadcrumbs: { name: string; url: string }[];
}
