import type { NicheConfig } from './types';

const medicos: NicheConfig = {
  slug: 'medicos',
  seo: {
    title: 'Marketing para Médicos e Consultórios | Atraia Mais Pacientes',
    description: 'Marketing digital ético para médicos e consultórios particulares. Google Ads, SEO e automação dentro das normas do CFM. Mais consultas, mais recorrência, mais faturamento.',
    keywords: ['marketing para médicos', 'google ads médico', 'marketing consultório médico', 'captar pacientes médicos', 'cfm publicidade médica', 'agência marketing médico'],
  },
  hero: {
    eyebrow: 'Marketing para Médicos',
    h1: 'Sua Agenda Cheia com Pacientes Particulares de Qualidade',
    subtitle: 'Marketing digital ético e conforme as normas do CFM para médicos que querem mais consultas particulares, mais procedimentos e mais recorrência de pacientes.',
    ctaPrimary: 'Quero uma Agenda Cheia',
  },
  stats: [
    { valor: '340%', label: 'Aumento médio em consultas particulares' },
    { valor: '2.1M', label: 'Consultas geradas para médicos' },
    { valor: '60+', label: 'Especialidades atendidas' },
    { valor: '4.9★', label: 'Avaliação média dos clientes' },
  ],
  services: [
    { icon: '🩺', titulo: 'Google Ads para Especialidades', desc: 'Anúncios para pesquisas de alta intenção: "cardiologista particular SP", "dermatologista Lavras MG" e centenas de variações.' },
    { icon: '📱', titulo: 'Conteúdo Educativo no Instagram', desc: 'Gestão do perfil com conteúdo informativo que constrói autoridade e atrai pacientes que buscam referência.' },
    { icon: '⭐', titulo: 'Google Meu Negócio', desc: 'Otimização completa do perfil para aparecer no Google Maps e triplicar as ligações orgânicas.' },
    { icon: '📅', titulo: 'Agendamento Online', desc: 'Sistema de agendamento 24h com lembretes automáticos por WhatsApp. Elimina falhas na recepção e reduz faltas.' },
    { icon: '🔄', titulo: 'Reativação de Pacientes', desc: 'Campanhas automáticas de follow-up para pacientes inativos. A consulta de retorno custa 5x menos que captar um novo paciente.' },
    { icon: '📊', titulo: 'Relatório de Performance', desc: 'Dashboard semanal com custo por consulta, ROI das campanhas e evolução das avaliações no Google.' },
  ],
  differentiators: [
    { icon: '⚖️', titulo: '100% Conforme o CFM', desc: 'Nenhuma campanha nossa gerou autuação no CRM em +5 anos. Nosso checklist de conformidade garante isso.' },
    { icon: '🎯', titulo: 'Pacientes Particulares', desc: 'Estratégias focadas em atrair pacientes sem convênio, com maior ticket e menos burocracia.' },
    { icon: '🏥', titulo: 'Especialistas em Saúde', desc: 'Não somos agência genérica. 60% da nossa base são profissionais de saúde — conhecemos o mercado profundamente.' },
    { icon: '📈', titulo: 'Crescimento Previsível', desc: 'Projetamos junto com você uma meta de novas consultas por mês e trabalhamos até atingir.' },
  ],
  testimonials: [
    { nome: 'Dra. Fernanda Alves', cargo: 'Dermatologista', empresa: 'Clínica DermaCare BH', texto: 'Aumentei minha agenda particular em 280% em 4 meses. O custo por consulta é menor do que eu pagava por indicação.' },
    { nome: 'Dr. Bruno Ferreira', cargo: 'Ortopedista', empresa: 'Clínica Ortho Plus', texto: 'A ClickNex entende as limitações do CFM e ainda assim consegue resultados expressivos. Recomendo para qualquer médico.' },
    { nome: 'Dra. Camila Rocha', cargo: 'Ginecologista', empresa: 'Centro Médico Vida', texto: 'Minha avaliação no Google passou de 3,8 para 4,9 em 6 meses. As novas pacientes chegam já sabendo quem sou.' },
  ],
  faqs: [
    { q: 'Posso anunciar para planos de saúde?', a: 'Sim, mas a estratégia é diferente. Para convênios, o foco é volume. Para particular, focamos em qualificação e autoridade.' },
    { q: 'Qual especialidade médica tem melhor resultado?', a: 'Dermatologia, ortopedia, cardiologia, ginecologia e cirurgia plástica têm os melhores resultados. Mas qualquer especialidade com demanda particular se beneficia.' },
    { q: 'Posso aparecer em vídeo no Instagram?', a: 'Sim, e é muito eficaz. O médico no Instagram constrói autoridade e confiança que nenhum anúncio consegue sozinho. Orientamos o que dizer e o que evitar.' },
    { q: 'Como funciona para médico que acabou de montar consultório?', a: 'Temos estratégias específicas para consultórios novos: foco em SEO local e Google Meu Negócio para aparecer rapidamente, com investimento menor.' },
  ],
  serviceSchema: {
    name: 'Marketing Digital para Médicos',
    description: 'Marketing digital ético e eficaz para médicos e consultórios: Google Ads, SEO, gestão de reputação e automação conforme normas do CFM.',
    url: '/nichos/medicos',
  },
  breadcrumbs: [
    { name: 'Home', url: '/' },
    { name: 'Nichos', url: '/nichos/clinicas' },
    { name: 'Médicos', url: '/nichos/medicos' },
  ],
};

export default medicos;
