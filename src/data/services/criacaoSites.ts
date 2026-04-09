import type { ServiceConfig } from './types';

const criacaoSites: ServiceConfig = {
  slug: 'criacao-de-sites',
  seo: {
    title: 'Criação de Sites Profissionais | Sites Responsivos com SEO e Conversão',
    description: 'Criamos sites profissionais, responsivos, rápidos e otimizados para SEO e conversão. Landing pages, sites institucionais e e-commerce com foco em resultados reais.',
    keywords: ['criação de sites', 'desenvolvimento web', 'site profissional', 'landing page', 'site responsivo', 'site otimizado seo'],
  },
  hero: {
    eyebrow: 'Criação de Sites',
    h1: 'Sites que Convertem Visitantes em Clientes',
    subtitle: 'Desenvolvemos sites e landing pages focados em performance, SEO e conversão. Rápidos, responsivos e projetados para gerar resultado desde o primeiro acesso.',
    ctaLabel: 'Solicitar Orçamento de Site',
  },
  features: [
    { icon: '⚡', titulo: 'Performance Máxima', desc: 'Sites com carregamento abaixo de 2 segundos. Core Web Vitals otimizados para não perder posições no Google.' },
    { icon: '📱', titulo: '100% Responsivo', desc: 'Design que funciona perfeitamente em mobile, tablet e desktop. Mais de 70% dos acessos são via celular.' },
    { icon: '🔍', titulo: 'SEO Técnico Completo', desc: 'Estrutura de código otimizada, meta tags, schema markup, sitemap e robots.txt configurados do zero.' },
    { icon: '🎯', titulo: 'Foco em Conversão', desc: 'CTA estratégico, formulários otimizados, prova social e hierarquia visual que guia o visitante à ação.' },
    { icon: '🔒', titulo: 'Segurança e SSL', desc: 'SSL gratuito, proteção contra spam e hospedagem confiável com uptime de 99,9%.' },
    { icon: '📊', titulo: 'Analytics Integrado', desc: 'Google Analytics 4, Meta Pixel e rastreamento de conversões configurados para medir cada resultado.' },
  ],
  process: [
    { numero: '01', titulo: 'Briefing', desc: 'Entendemos seu negócio, público-alvo, concorrência e objetivos de conversão.' },
    { numero: '02', titulo: 'Wireframe e Design', desc: 'Criamos o protótipo visual com foco na jornada do usuário e aprovamos com você.' },
    { numero: '03', titulo: 'Desenvolvimento', desc: 'Codificamos com tecnologias modernas: React, Next.js ou WordPress conforme a necessidade.' },
    { numero: '04', titulo: 'Entrega e Treinamento', desc: 'Publicamos, configuramos o domínio e treinamos sua equipe para gerenciar o conteúdo.' },
  ],
  stats: [
    { valor: '<2s', label: 'Tempo de carregamento médio' },
    { valor: '95+', label: 'Score médio no Google PageSpeed' },
    { valor: '100%', label: 'Responsivo em todos os dispositivos' },
    { valor: '30 dias', label: 'Prazo médio de entrega' },
  ],
  faqs: [
    { q: 'Qual é o investimento para criar um site?', a: 'Landing pages simples: a partir de R$1.500. Sites institucionais: R$3.000-R$8.000. E-commerce: R$5.000-R$20.000. O valor depende da complexidade e quantidade de páginas.' },
    { q: 'Quanto tempo leva para criar um site?', a: 'Landing pages: 7-14 dias. Sites institucionais: 21-40 dias. E-commerce: 45-90 dias. Prazos podem variar conforme a agilidade nas aprovações.' },
    { q: 'Posso gerenciar o conteúdo depois?', a: 'Sim. Entregamos com CMS (painel de administração) intuitivo para você atualizar textos e imagens sem precisar de desenvolvedor.' },
    { q: 'O site vai ter manutenção?', a: 'Oferecemos planos de manutenção mensal a partir de R$250/mês que incluem atualizações de segurança, backups e pequenas alterações.' },
  ],
  serviceSchema: {
    name: 'Criação de Sites Profissionais',
    description: 'Desenvolvimento de sites responsivos, rápidos e otimizados para SEO e conversão. Landing pages, sites institucionais e e-commerce.',
    url: '/servicos/criacao-de-sites',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Serviços', url: '/servicos' },
    { name: 'Criação de Sites', url: '/servicos/criacao-de-sites' },
  ],
};

export default criacaoSites;
