import type { ServiceConfig } from './types';

const trafegoPago: ServiceConfig = {
  slug: 'trafego-pago',
  seo: {
    title: 'Tráfego Pago para Empresas | Gestão de Anúncios Google e Meta Ads',
    description: 'Gestão profissional de tráfego pago: Google Ads e Meta Ads com foco em ROI mensurável. A ClickNex cria campanhas que geram leads qualificados e vendas reais.',
    keywords: ['tráfego pago', 'gestão de anúncios', 'google ads', 'meta ads', 'roi em anúncios', 'agência tráfego pago'],
  },
  hero: {
    eyebrow: 'Tráfego Pago',
    h1: 'Anúncios que Geram Clientes, Não Apenas Cliques',
    subtitle: 'Gerenciamos suas campanhas no Google Ads e Meta Ads com metodologia focada em ROI. Cada centavo investido é rastreado e otimizado para máxima performance.',
    ctaLabel: 'Solicitar Diagnóstico Gratuito',
  },
  features: [
    { icon: '🎯', titulo: 'Campanhas de Alta Precisão', desc: 'Segmentação avançada para atingir exatamente quem tem potencial de compra — sem desperdício de orçamento.' },
    { icon: '📊', titulo: 'Relatórios Semanais Transparentes', desc: 'Dashboard ao vivo e relatório semanal com todas as métricas: impressões, cliques, leads e custo por aquisição.' },
    { icon: '🔄', titulo: 'Otimização Contínua', desc: 'Testes A/B permanentes de anúncios, lances e segmentações para melhorar os resultados semana a semana.' },
    { icon: '💰', titulo: 'Foco em ROI Real', desc: 'Não otimizamos para cliques baratos — otimizamos para receita gerada. Cada campanha é medida pelo que importa.' },
    { icon: '📱', titulo: 'Criativos que Convertem', desc: 'Nossa equipe cria os textos e peças visuais alinhados às melhores práticas de cada plataforma.' },
    { icon: '🔗', titulo: 'Landing Pages Otimizadas', desc: 'Criamos ou otimizamos páginas de destino para maximizar a taxa de conversão dos seus anúncios.' },
  ],
  process: [
    { numero: '01', titulo: 'Diagnóstico', desc: 'Análise completa do seu mercado, concorrência e histórico de campanhas para identificar oportunidades.' },
    { numero: '02', titulo: 'Estratégia', desc: 'Definição das plataformas, públicos, orçamento e metas de conversão baseados em dados reais.' },
    { numero: '03', titulo: 'Configuração', desc: 'Estruturação das campanhas, criação de anúncios, instalação de pixels e configuração de rastreamento.' },
    { numero: '04', titulo: 'Otimização', desc: 'Monitoramento diário e ajustes semanais para reduzir o custo por lead e aumentar o volume de conversões.' },
  ],
  stats: [
    { valor: '3.5x', label: 'ROI médio dos clientes' },
    { valor: '-40%', label: 'Redução no custo por lead em 90 dias' },
    { valor: '127+', label: 'Empresas atendidas' },
    { valor: '4.9★', label: 'Avaliação média' },
  ],
  faqs: [
    { q: 'Qual é o investimento mínimo para começar?', a: 'Trabalhamos com clientes a partir de R$1.500/mês em verba de anúncios. A taxa de gestão varia conforme o volume e complexidade das campanhas.' },
    { q: 'Quanto tempo leva para ver os primeiros resultados?', a: 'As primeiras conversões costumam aparecer em 7-21 dias. Resultados consolidados com ROI positivo geralmente acontecem entre 45 e 90 dias.' },
    { q: 'Preciso ter um site para fazer tráfego pago?', a: 'Não necessariamente. Podemos usar landing pages criadas pela ClickNex, formulários de geração de leads do próprio Google/Meta, ou o WhatsApp como destino.' },
    { q: 'Vou ter acesso às minhas contas de anúncios?', a: 'Sim, sempre. As contas são criadas ou transferidas para seu CNPJ/CPF. Você tem acesso total em qualquer momento.' },
    { q: 'Como é feito o acompanhamento?', a: 'Você recebe um relatório semanal por e-mail, tem acesso ao dashboard ao vivo e pode agendar reuniões mensais de estratégia com nosso time.' },
  ],
  serviceSchema: {
    name: 'Gestão de Tráfego Pago — Google Ads e Meta Ads',
    description: 'Gestão profissional de campanhas de tráfego pago no Google Ads e Meta Ads, focada em geração de leads qualificados e ROI mensurável.',
    url: '/servicos/trafego-pago',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Serviços', url: '/servicos' },
    { name: 'Tráfego Pago', url: '/servicos/trafego-pago' },
  ],
};

export default trafegoPago;
