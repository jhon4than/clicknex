export interface SitemapRoute {
  path: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

export const staticRoutes: SitemapRoute[] = [
  { path: '/', changefreq: 'weekly', priority: 1.0 },
  { path: '/agencia', changefreq: 'weekly', priority: 0.9 },
  { path: '/sobre', changefreq: 'monthly', priority: 0.8 },
  { path: '/servicos', changefreq: 'weekly', priority: 0.9 },
  { path: '/servicos/trafego-pago', changefreq: 'monthly', priority: 0.8 },
  { path: '/servicos/google-ads', changefreq: 'monthly', priority: 0.8 },
  { path: '/servicos/meta-ads', changefreq: 'monthly', priority: 0.8 },
  { path: '/servicos/criacao-de-sites', changefreq: 'monthly', priority: 0.8 },
  { path: '/servicos/seo', changefreq: 'monthly', priority: 0.8 },
  { path: '/servicos/automacao-de-marketing', changefreq: 'monthly', priority: 0.8 },
  { path: '/nichos/dentistas', changefreq: 'weekly', priority: 0.9 },
  { path: '/nichos/medicos', changefreq: 'weekly', priority: 0.9 },
  { path: '/nichos/esteticas', changefreq: 'weekly', priority: 0.9 },
  { path: '/nichos/advocacia', changefreq: 'weekly', priority: 0.9 },
  { path: '/nichos/imobiliarias', changefreq: 'weekly', priority: 0.9 },
  { path: '/nichos/ecommerce', changefreq: 'weekly', priority: 0.9 },
  { path: '/agencia-marketing-digital-lavras-mg', changefreq: 'monthly', priority: 0.8 },
  { path: '/agencia-marketing-digital-sul-de-minas', changefreq: 'monthly', priority: 0.8 },
  { path: '/contato', changefreq: 'monthly', priority: 0.7 },
  { path: '/blog', changefreq: 'daily', priority: 0.9 },
  { path: '/blog/como-atrair-mais-pacientes-para-clinica', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/google-ads-para-clinicas-medicas-guia', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/marketing-medico-cfm-anvisa-guia-completo', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/quanto-custa-anuncio-google-ads', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/automacao-de-marketing-para-pequenas-empresas', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/seo-local-para-clinicas', changefreq: 'monthly', priority: 0.8 },
  { path: '/politica-de-privacidade', changefreq: 'yearly', priority: 0.3 },
  { path: '/termos-de-uso', changefreq: 'yearly', priority: 0.3 },
];
