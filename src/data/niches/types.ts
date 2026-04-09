export interface NicheConfig {
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
    ctaPrimary: string;
    ctaSecondary?: string;
  };
  stats: { valor: string; label: string }[];
  services: { icon: string; titulo: string; desc: string }[];
  differentiators: { icon: string; titulo: string; desc: string }[];
  testimonials: { nome: string; cargo: string; empresa: string; texto: string }[];
  faqs: { q: string; a: string }[];
  serviceSchema: {
    name: string;
    description: string;
    url: string;
  };
  breadcrumbs: { name: string; url: string }[];
}
