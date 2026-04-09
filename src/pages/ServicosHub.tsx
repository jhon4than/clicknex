import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { organizationLd, serviceLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL } from '../components/seo/siteConfig';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Globe, Megaphone, Bot, BarChart3, Lightbulb } from 'lucide-react';

const servicos = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    titulo: 'Tráfego Pago',
    desc: 'Campanhas de alta performance no Google Ads e Meta Ads com foco em ROI mensurável.',
    href: '/servicos/trafego-pago',
    keywords: ['tráfego pago', 'anúncios pagos'],
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    titulo: 'Google Ads',
    desc: 'Gestão profissional de campanhas no Google: Search, Display, YouTube e Shopping.',
    href: '/servicos/google-ads',
    keywords: ['google ads', 'google adwords'],
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    titulo: 'Meta Ads',
    desc: 'Anúncios no Facebook e Instagram otimizados para geração de leads e vendas.',
    href: '/servicos/meta-ads',
    keywords: ['meta ads', 'facebook ads', 'instagram ads'],
  },
  {
    icon: <Globe className="w-8 h-8" />,
    titulo: 'Criação de Sites',
    desc: 'Sites responsivos, rápidos e otimizados para SEO e conversão.',
    href: '/servicos/criacao-de-sites',
    keywords: ['criação de sites', 'desenvolvimento web'],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    titulo: 'SEO',
    desc: 'Posicionamento orgânico sustentável no Google para palavras-chave estratégicas do seu negócio.',
    href: '/servicos/seo',
    keywords: ['seo', 'otimização para google'],
  },
  {
    icon: <Bot className="w-8 h-8" />,
    titulo: 'Automação de Marketing',
    desc: 'Sequências automáticas de nurturing, CRM e follow-up que convertem mais com menos esforço.',
    href: '/servicos/automacao-de-marketing',
    keywords: ['automação marketing', 'crm', 'email marketing'],
  },
];

const ServicosHub = () => (
  <>
    <Seo
      title="Serviços de Marketing Digital | Tráfego Pago, SEO, Sites e Automação"
      description="Conheça todos os serviços da ClickNex: tráfego pago (Google Ads, Meta Ads), criação de sites, SEO e automação de marketing. Soluções completas para escalar seu negócio."
      keywords={['serviços marketing digital', 'google ads', 'meta ads', 'criação de sites', 'seo', 'automação marketing']}
      jsonLd={[
        organizationLd(),
        ...servicos.map((s) =>
          serviceLd({ name: s.titulo, description: s.desc, url: `${SITE_URL}${s.href}` })
        ),
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Serviços', url: `${SITE_URL}/servicos` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center">
        <div className="container-custom">
          <p className="text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm">O que fazemos</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções Completas em<br /><span className="text-blue-300">Marketing Digital</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Da atração ao fechamento: todas as ferramentas para crescer de forma previsível e escalável.
          </p>
        </div>
      </section>

      {/* Grid de serviços */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-blue-700 mb-5 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h2 className="text-xl font-bold text-blue-950 mb-3">{s.titulo}</h2>
                <p className="text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center text-blue-700 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Não sabe por onde começar?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Solicite um diagnóstico gratuito e nossa equipe vai recomendar a estratégia ideal para o seu momento.</p>
          <Button asChild className="bg-white text-blue-950 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full">
            <a href={`https://wa.me/5535999757076?text=Olá! Gostaria de solicitar um diagnóstico gratuito.`} target="_blank" rel="noopener noreferrer">
              Solicitar Diagnóstico Gratuito
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default ServicosHub;
