import type { ServiceConfig } from './types';

const seoService: ServiceConfig = {
  slug: 'seo',
  seo: {
    title: 'SEO | Posicionamento Orgânico no Google para Empresas',
    description: 'Estratégias de SEO para posicionar seu site nas primeiras páginas do Google de forma sustentável. Auditoria, SEO técnico, conteúdo e link building.',
    keywords: ['seo', 'otimização google', 'posicionamento google', 'seo para empresas', 'agência seo', 'seo local'],
  },
  hero: {
    eyebrow: 'SEO',
    h1: 'Apareça no Google Organicamente e Reduza o Custo por Aquisição',
    subtitle: 'Estratégias de SEO que posicionam seu site nas primeiras posições do Google para palavras-chave com real potencial de negócio — de forma sustentável e sem pagar por clique.',
    ctaLabel: 'Solicitar Auditoria Gratuita',
  },
  features: [
    { icon: '🔬', titulo: 'Auditoria Técnica Completa', desc: 'Identificamos e corrigimos todos os problemas técnicos que impedem o Google de indexar e ranquear seu site.' },
    { icon: '🔑', titulo: 'Pesquisa de Palavras-chave', desc: 'Mapeamos as melhores oportunidades de palavras-chave: volume, intenção de busca e dificuldade de ranking.' },
    { icon: '✍️', titulo: 'Produção de Conteúdo SEO', desc: 'Artigos otimizados que ranqueiam no Google e educam seu público, gerando autoridade e leads orgânicos.' },
    { icon: '🔗', titulo: 'Link Building Ético', desc: 'Construção de backlinks de qualidade que aumentam a autoridade do domínio de forma sustentável.' },
    { icon: '📍', titulo: 'SEO Local', desc: 'Otimização para buscas geográficas: Google Maps, Google Meu Negócio e palavras-chave locais.' },
    { icon: '📊', titulo: 'Relatório Mensal Detalhado', desc: 'Acompanhe o progresso de ranking de cada palavra-chave, tráfego orgânico e conversões mensalmente.' },
  ],
  process: [
    { numero: '01', titulo: 'Auditoria', desc: 'Análise completa do site: problemas técnicos, velocidade, conteúdo, backlinks e posições atuais.' },
    { numero: '02', titulo: 'Estratégia', desc: 'Definição do mapa de palavras-chave e calendário editorial baseado em oportunidades reais.' },
    { numero: '03', titulo: 'Implementação', desc: 'Correção técnica, otimização das páginas existentes e publicação de novo conteúdo.' },
    { numero: '04', titulo: 'Autoridade', desc: 'Link building, menções de marca e otimização contínua para consolidar posições no longo prazo.' },
  ],
  stats: [
    { valor: '3-6', label: 'Meses para ver resultados consistentes' },
    { valor: '0', label: 'Custo por clique (tráfego orgânico)' },
    { valor: '10x', label: 'Retorno de longo prazo vs. tráfego pago' },
    { valor: '200%+', label: 'Aumento de tráfego orgânico em 6 meses' },
  ],
  faqs: [
    { q: 'Quanto tempo leva para o SEO funcionar?', a: 'Os primeiros resultados começam a aparecer em 2-3 meses. Resultados consolidados e expressivos tipicamente acontecem entre 6 e 12 meses de trabalho contínuo.' },
    { q: 'SEO ou tráfego pago? Qual escolher?', a: 'Idealmente, os dois. O tráfego pago gera resultados imediatos enquanto o SEO cresce. No longo prazo, o SEO tende a ter um custo por aquisição muito menor.' },
    { q: 'SEO funciona para negócios locais?', a: 'Especialmente para negócios locais! SEO local (Google Maps, Google Meu Negócio) é um dos canais com melhor ROI para empresas com atendimento presencial.' },
    { q: 'Como vocês medem o sucesso do SEO?', a: 'Acompanhamos posicionamento de palavras-chave, tráfego orgânico, leads e conversões originados de busca orgânica.' },
  ],
  serviceSchema: {
    name: 'SEO — Otimização para Motores de Busca',
    description: 'Estratégias completas de SEO: auditoria técnica, pesquisa de palavras-chave, produção de conteúdo, link building e SEO local para posicionamento sustentável no Google.',
    url: '/servicos/seo',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Serviços', url: '/servicos' },
    { name: 'SEO', url: '/servicos/seo' },
  ],
};

export default seoService;
