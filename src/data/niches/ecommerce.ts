import type { NicheConfig } from './types';

const ecommerce: NicheConfig = {
  slug: 'ecommerce',
  seo: {
    title: 'Marketing para E-commerce | Aumente as Vendas Online da sua Loja',
    description: 'Marketing digital para e-commerce: Google Shopping, Meta Ads, SEO e automação de carrinho abandonado. Escalamos lojas virtuais com estratégias de performance.',
    keywords: ['marketing ecommerce', 'google shopping', 'meta ads loja virtual', 'seo ecommerce', 'aumentar vendas online', 'agência marketing ecommerce'],
  },
  hero: {
    eyebrow: 'Marketing para E-commerce',
    h1: 'Escale Suas Vendas Online com Estratégias de Performance',
    subtitle: 'Google Shopping, Meta Ads, remarketing e SEO integrados em uma estratégia completa para maximizar o ROAS da sua loja virtual e reduzir o custo de aquisição.',
    ctaPrimary: 'Analisar Meu E-commerce',
  },
  stats: [
    { valor: '4.2x', label: 'ROAS médio dos clientes' },
    { valor: '-35%', label: 'Redução no custo de aquisição' },
    { valor: '30+', label: 'E-commerces atendidos' },
    { valor: '+180%', label: 'Crescimento médio em receita' },
  ],
  services: [
    { icon: '🛒', titulo: 'Google Shopping', desc: 'Anúncios de produto com foto, preço e nota diretamente na página de resultados do Google — altíssima intenção de compra.' },
    { icon: '📦', titulo: 'Meta Ads com Catálogo', desc: 'Anúncios dinâmicos que mostram automaticamente os produtos certos para cada usuário baseado no comportamento de navegação.' },
    { icon: '🔄', titulo: 'Recuperação de Carrinho', desc: 'Sequência automática de remarketing e e-mail para recuperar clientes que abandonaram o carrinho.' },
    { icon: '🔍', titulo: 'SEO para Lojas Virtuais', desc: 'Otimização de fichas de produto, categorias e conteúdo para gerar tráfego orgânico gratuito.' },
    { icon: '📊', titulo: 'Analytics e CRO', desc: 'Análise de dados e testes de otimização de conversão (CRO) para vender mais sem aumentar o tráfego.' },
    { icon: '📧', titulo: 'E-mail Marketing', desc: 'Fluxos automáticos de pós-compra, upsell, reativação e promoções segmentadas por comportamento.' },
  ],
  differentiators: [
    { icon: '📈', titulo: 'Foco em ROAS, Não em Cliques', desc: 'Cada decisão de campanha é baseada no retorno sobre o investimento em anúncios, não em métricas de vaidade.' },
    { icon: '🔬', titulo: 'Testes Constantes', desc: 'Testamos criativos, públicos, páginas de produto e fluxos de e-mail continuamente para encontrar o que converte mais.' },
    { icon: '🔗', titulo: 'Integração Completa', desc: 'Conectamos Google Ads, Meta Ads, e-mail, WhatsApp e SEO em um ecossistema coeso de performance.' },
    { icon: '📊', titulo: 'Dashboard em Tempo Real', desc: 'Visualize ROAS, receita, ticket médio e CAC por canal em um único painel atualizado diariamente.' },
  ],
  testimonials: [
    { nome: 'Thiago Mendes', cargo: 'Fundador', empresa: 'Inovare E-commerce', texto: 'Passamos de R$50k para R$200k/mês em receita em 8 meses com a ClickNex. O ROAS no Google Shopping é impressionante.' },
    { nome: 'Renata Carvalho', cargo: 'Diretora de Marketing', empresa: 'Fashion Store Online', texto: 'A recuperação de carrinho sozinha paga o investimento mensal. A automação de e-mail gera vendas no piloto automático.' },
    { nome: 'Paulo Lima', cargo: 'CEO', empresa: 'TechShop Brasil', texto: 'A ClickNex foi a única agência que conseguiu escalar nosso e-commerce de eletrônicos mantendo o ROAS acima de 4x.' },
  ],
  faqs: [
    { q: 'Qual plataforma é melhor para e-commerce: Google ou Meta?', a: 'As duas se complementam: Google Shopping captura quem já quer comprar; Meta Ads cria desejo em quem não estava procurando. Juntas, maximizam o alcance e a receita.' },
    { q: 'Meu e-commerce é pequeno. Vale a pena?', a: 'A partir de R$15k/mês em faturamento já faz sentido investir em gestão de anúncios. Para lojas menores, recomendamos começar com SEO e automação de e-mail.' },
    { q: 'Trabalham com Shopify, VTEX, WooCommerce?', a: 'Sim. Trabalhamos com todas as principais plataformas de e-commerce do mercado.' },
    { q: 'O que é ROAS e por que é a métrica mais importante?', a: 'ROAS (Return on Ad Spend) é quanto você fatura para cada R$1 investido em anúncios. Um ROAS de 4x significa que R$1.000 em anúncios gerou R$4.000 em receita.' },
  ],
  serviceSchema: {
    name: 'Marketing Digital para E-commerce',
    description: 'Marketing de performance para e-commerce: Google Shopping, Meta Ads com catálogo, SEO, automação de carrinho abandonado e CRO para maximizar ROAS.',
    url: '/nichos/ecommerce',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Nichos', url: '/nichos/clinicas' },
    { name: 'E-commerce', url: '/nichos/ecommerce' },
  ],
};

export default ecommerce;
