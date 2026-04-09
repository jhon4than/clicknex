import Navbar from '../Navbar';
import Footer from '../Footer';
import Seo from '../seo/Seo';
import { serviceLd, faqPageLd, breadcrumbLd, organizationLd, localBusinessLd } from '../../lib/seo/jsonLd';
import { SITE_URL, BRAND_WHATSAPP } from '../seo/siteConfig';
import type { NicheConfig } from '../../data/niches/types';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp, CheckCircle2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface NicheLandingPageProps {
  config: NicheConfig;
}

const NicheLandingPage = ({ config }: NicheLandingPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const waUrl = `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou ${config.hero.eyebrow.toLowerCase()} e gostaria de solicitar um diagnóstico gratuito.`;

  return (
    <>
      <Seo
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        jsonLd={[
          organizationLd(),
          localBusinessLd(),
          serviceLd({ ...config.serviceSchema, url: `${SITE_URL}${config.serviceSchema.url}` }),
          faqPageLd(config.faqs),
          breadcrumbLd(config.breadcrumbs.map((b) => ({ ...b, url: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}` }))),
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="relative pt-32 pb-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }} />
            ))}
          </div>
          <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
            <p className="text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm">{config.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{config.hero.h1}</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{config.hero.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-xl">
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2 inline" />
                  {config.hero.ctaPrimary}
                </a>
              </Button>
              {config.hero.ctaSecondary && (
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-full">
                  <a href="#cases">{config.hero.ctaSecondary}</a>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-blue-900 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {config.stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-blue-200 mb-1">{s.valor}</p>
                  <p className="text-sm text-blue-300">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-950 mb-4">Soluções Completas para {config.hero.eyebrow}</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Tudo que você precisa em um único parceiro de marketing.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.services.map((s) => (
                <div key={s.titulo} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">{s.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Por Que a ClickNex?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {config.differentiators.map((d) => (
                <div key={d.titulo} className="flex gap-4 items-start">
                  <span className="text-3xl flex-shrink-0">{d.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950 mb-1">{d.titulo}</h3>
                    <p className="text-gray-600 leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="cases" className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">O Que Nossos Clientes Dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {config.testimonials.map((t) => (
                <div key={t.nome} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">"{t.texto}"</p>
                  <div>
                    <p className="font-bold text-blue-950">{t.nome}</p>
                    <p className="text-sm text-gray-500">{t.cargo} · {t.empresa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {config.faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-blue-950 pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-blue-700 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center">
          <div className="container-custom max-w-2xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Pronto para Transformar seu Negócio?</h2>
            <p className="text-blue-200 mb-8">Solicite um diagnóstico gratuito. Nossa equipe vai analisar seu caso e apresentar um plano personalizado.</p>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 text-lg rounded-full shadow-xl">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 inline" />
                {config.hero.ctaPrimary}
              </a>
            </Button>
          </div>
        </section>

        {/* WhatsApp flutuante */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Contato via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>

        <Footer />
      </div>
    </>
  );
};

export default NicheLandingPage;
