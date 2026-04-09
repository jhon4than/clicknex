import type { ServiceConfig } from './types';

const metaAds: ServiceConfig = {
  slug: 'meta-ads',
  seo: {
    title: 'Meta Ads | Facebook e Instagram Ads — Gestão Profissional',
    description: 'Gestão de Meta Ads (Facebook e Instagram) para gerar leads qualificados e aumentar vendas. Campanhas com segmentação avançada e criativos de alta conversão.',
    keywords: ['meta ads', 'facebook ads', 'instagram ads', 'gestão facebook ads', 'anúncios instagram', 'agência meta ads'],
  },
  hero: {
    eyebrow: 'Meta Ads',
    h1: 'Facebook e Instagram que Geram Leads e Vendem de Verdade',
    subtitle: 'Criamos e gerenciamos campanhas no Meta Ads com criativos que param o scroll e públicos ultrassegmentados para o seu negócio.',
    ctaLabel: 'Quero Mais Leads no Instagram',
  },
  features: [
    { icon: '🎯', titulo: 'Segmentação Ultra-precisa', desc: 'Públicos por interesses, comportamentos, dados demográficos e lookalike das suas melhores conversões.' },
    { icon: '🎨', titulo: 'Criativos que Convertem', desc: 'Design e copy desenvolvidos para parar o scroll e gerar ação — testados com dados reais.' },
    { icon: '📈', titulo: 'Funil Completo', desc: 'Estratégia de topo, meio e fundo de funil: aquisição, nutrição e conversão em um único ecossistema.' },
    { icon: '🔄', titulo: 'Remarketing Inteligente', desc: 'Reconecte com visitantes do site, engajados no Instagram e seguidores que ainda não compraram.' },
    { icon: '📦', titulo: 'Catálogo de Produtos', desc: 'Para e-commerce: anúncios dinâmicos que mostram automaticamente produtos relevantes para cada usuário.' },
    { icon: '💬', titulo: 'WhatsApp e Messenger', desc: 'Campanhas de clique para conversa: o usuário inicia uma conversa no WhatsApp com um clique no anúncio.' },
  ],
  process: [
    { numero: '01', titulo: 'Análise de Público', desc: 'Mapeamos seu cliente ideal e construímos públicos primários, secundários e lookalike.' },
    { numero: '02', titulo: 'Estratégia de Criativos', desc: 'Definimos formatos, mensagens e ofertas por etapa do funil.' },
    { numero: '03', titulo: 'Produção e Publicação', desc: 'Criamos os anúncios, configuramos o pixel, os eventos de conversão e publicamos.' },
    { numero: '04', titulo: 'Escala e Otimização', desc: 'Identificamos os criativos vencedores, escalamos orçamento e eliminamos o que não funciona.' },
  ],
  stats: [
    { valor: 'R$2,80', label: 'Custo médio por lead (nichos selecionados)' },
    { valor: '40%', label: 'Aumento médio em conversões no 1º mês' },
    { valor: '3.2x', label: 'ROAS médio dos clientes' },
    { valor: '127+', label: 'Clientes atendidos' },
  ],
  faqs: [
    { q: 'Meta Ads funciona para qualquer tipo de negócio?', a: 'Funciona muito bem para produtos e serviços com apelo visual, ticket médio acima de R$200 e ciclos de decisão curtos. Para B2B de nicho, o LinkedIn costuma complementar melhor.' },
    { q: 'Quanto devo investir em Meta Ads?', a: 'Recomendamos mínimo de R$1.000/mês em verba. Com menos que isso, o algoritmo não tem dados suficientes para otimizar. O ideal é R$1.500-R$3.000/mês para a maioria dos negócios.' },
    { q: 'A ClickNex cria os criativos ou preciso fornecer?', a: 'Nossa equipe cria textos e design dos anúncios. Para campanhas com vídeo, podemos orientar a produção ou recebemos os vídeos brutos para edição.' },
    { q: 'O que é o pixel do Facebook e por que é importante?', a: 'O pixel é um código instalado no seu site que rastreia as ações dos visitantes. Sem ele, é impossível criar públicos de remarketing ou otimizar campanhas para conversão.' },
  ],
  serviceSchema: {
    name: 'Gestão de Meta Ads (Facebook e Instagram)',
    description: 'Gestão profissional de campanhas no Meta Ads com criação de criativos, segmentação avançada e otimização contínua para gerar leads e vendas.',
    url: '/servicos/meta-ads',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Serviços', url: '/servicos' },
    { name: 'Meta Ads', url: '/servicos/meta-ads' },
  ],
};

export default metaAds;
