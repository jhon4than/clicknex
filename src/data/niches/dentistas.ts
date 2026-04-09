import type { NicheConfig } from './types';

const dentistas: NicheConfig = {
  slug: 'dentistas',
  seo: {
    title: 'Marketing para Dentistas e Clínicas Odontológicas | Mais Pacientes',
    description: 'Marketing digital especializado para dentistas e clínicas odontológicas. Google Ads, Meta Ads e SEO dentro das normas do CFO. Aumente agendamentos de implantes, clareamento e ortodontia.',
    keywords: ['marketing para dentistas', 'google ads odontologia', 'marketing clínica odontológica', 'anúncios dentista', 'cfo marketing', 'captar pacientes odontologia'],
  },
  hero: {
    eyebrow: 'Marketing para Dentistas',
    h1: 'Mais Pacientes de Implante, Ortodontia e Estética Dental',
    subtitle: 'Estratégias de marketing digital comprovadas para clínicas odontológicas. Atraímos pacientes de alto valor para os procedimentos mais lucrativos do seu consultório.',
    ctaPrimary: 'Solicitar Diagnóstico Gratuito',
    ctaSecondary: 'Ver Cases de Sucesso',
  },
  stats: [
    { valor: '280%', label: 'Aumento médio em agendamentos' },
    { valor: 'R$1.8M', label: 'Faturamento gerado para dentistas' },
    { valor: '45+', label: 'Clínicas odontológicas atendidas' },
    { valor: '94%', label: 'Taxa de retenção de clientes' },
  ],
  services: [
    { icon: '🦷', titulo: 'Google Ads para Odontologia', desc: 'Anúncios que aparecem para quem pesquisa "implante dentário", "aparelho orthodôntico" e "clareamento dental" na sua cidade.' },
    { icon: '📱', titulo: 'Instagram e Facebook Ads', desc: 'Campanhas visuais para procedimentos estéticos com segmentação por faixa etária, renda e interesse.' },
    { icon: '🌐', titulo: 'Site Otimizado para Conversão', desc: 'Landing pages com agendamento online integrado, depoimentos de pacientes e apresentação dos procedimentos.' },
    { icon: '⭐', titulo: 'Gestão de Reputação', desc: 'Estratégia para aumentar avaliações no Google e resposta profissional a comentários negativos.' },
    { icon: '📧', titulo: 'Automação de Lembretes', desc: 'Confirmações e lembretes de consulta por WhatsApp e SMS. Reduz faltas em até 70%.' },
    { icon: '📊', titulo: 'SEO Local', desc: 'Otimização do Google Meu Negócio para aparecer no topo do Google Maps para pesquisas de dentista na sua cidade.' },
  ],
  differentiators: [
    { icon: '⚖️', titulo: 'Conformidade CFO', desc: 'Todo conteúdo revisado segundo as normas do Conselho Federal de Odontologia. Sem risco de autuação.' },
    { icon: '🎯', titulo: 'Foco em Alto Valor', desc: 'Priorizamos captação de pacientes para procedimentos de maior ticket: implantes, facetas, ortodontia invisível.' },
    { icon: '📈', titulo: 'Relatório Semanal', desc: 'Você sabe exatamente quantos leads chegaram, qual foi o custo e quantos viraram pacientes.' },
    { icon: '🤝', titulo: 'Sem Contrato de Fidelidade', desc: 'Nossos resultados falam por si. Você fica porque quer, não porque assinou um contrato de 12 meses.' },
  ],
  testimonials: [
    { nome: 'Dr. Rafael Costa', cargo: 'Cirurgião-dentista', empresa: 'Clínica OdontoCenter', texto: 'Em 3 meses com a ClickNex, triplicamos os agendamentos de implantes. O custo por paciente é muito menor do que eu esperava.' },
    { nome: 'Dra. Patrícia Lima', cargo: 'Especialista em Ortodontia', empresa: 'Studio Sorriso', texto: 'Finalmente uma agência que entende as restrições do CFO. O conteúdo é ético e ainda gera muitos leads qualificados.' },
    { nome: 'Dr. André Mendes', cargo: 'Implantodontista', empresa: 'Clínica Mendes Odonto', texto: 'O ROI no primeiro mês já pagou 6 meses de investimento. Recomendo sem reservas.' },
  ],
  faqs: [
    { q: 'A ClickNex conhece as normas do CFO para publicidade odontológica?', a: 'Sim. Toda campanha para dentistas é revisada com base nas normas do CFO: sem promessas de resultados, sem "antes e depois" de casos cirúrgicos, sem conteúdo sensacionalista.' },
    { q: 'Posso anunciar procedimentos como implante e facetas?', a: 'Sim, com as restrições adequadas. Podemos criar campanhas eficazes para todos os procedimentos, desde que o conteúdo seja informativo e ético.' },
    { q: 'Qual tipo de paciente os anúncios vão atrair?', a: 'Segmentamos por intenção de compra: pessoas que já pesquisam o procedimento. Isso garante leads mais qualificados e com menor resistência ao orçamento.' },
    { q: 'Funciona para consultório solo ou apenas para clínicas grandes?', a: 'Funciona para ambos. Temos estratégias específicas para consultórios solo com menor investimento e para redes de clínicas.' },
    { q: 'Vocês atendem em qual região?', a: 'Atendemos dentistas e clínicas em todo o Brasil, com time 100% remoto e ferramentas digitais.' },
  ],
  serviceSchema: {
    name: 'Marketing Digital para Dentistas e Clínicas Odontológicas',
    description: 'Estratégias completas de marketing digital para dentistas: Google Ads, Meta Ads, SEO local e automação, dentro das normas do CFO.',
    url: '/nichos/dentistas',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Dentistas', url: '/nichos/dentistas' },
  ],
};

export default dentistas;
