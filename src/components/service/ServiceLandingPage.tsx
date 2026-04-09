import Navbar from '../Navbar';
import Footer from '../Footer';
import Seo from '../seo/Seo';
import { serviceLd, faqPageLd, breadcrumbLd, organizationLd } from '../../lib/seo/jsonLd';
import { SITE_URL, BRAND_WHATSAPP } from '../seo/siteConfig';
import type { ServiceConfig } from '../../data/services/types';
import { Button } from '../ui/button';
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface ServiceLandingPageProps {
  config: ServiceConfig;
}

const ServiceLandingPage = ({ config }: ServiceLandingPageProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const waUrl = `https://wa.me/${BRAND_WHATSAPP}?text=Olá! Tenho interesse no serviço de ${config.hero.h1.toLowerCase()}.`;

  return (
    <>
      <Seo
        title={config.seo.title}
        description={config.seo.description}
        keywords={config.seo.keywords}
        jsonLd={[
          organizationLd(),
          serviceLd({ ...config.serviceSchema, url: `${SITE_URL}${config.serviceSchema.url}` }),
          faqPageLd(config.faqs),
          breadcrumbLd(config.breadcrumbs.map((b) => ({ ...b, url: b.url.startsWith('http') ? b.url : `${SITE_URL}${b.url}` }))),
        ]}
      />
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <p className="text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm">{config.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{config.hero.h1}</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{config.hero.subtitle}</p>
            <Button asChild className="bg-white text-blue-950 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full shadow-xl">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">{config.hero.ctaLabel}</a>
            </Button>
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

        {/* Features */}
        <section className="py-20">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">O que está incluído</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.features.map((f) => (
                <div key={f.titulo} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="text-lg font-bold text-blue-950 mb-2">{f.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Como funciona</h2>
            <div className="space-y-6">
              {config.process.map((p, i) => (
                <div key={p.titulo} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center font-black text-sm">
                    {p.numero}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-blue-950 mb-1">{p.titulo}</h3>
                    <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {config.faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
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
        <section className="py-20 bg-blue-950 text-white text-center">
          <div className="container-custom max-w-2xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-blue-200 mb-8">Solicite um diagnóstico gratuito e descubra o potencial do {config.hero.eyebrow.toLowerCase()} para o seu negócio.</p>
            <Button asChild className="bg-white text-blue-950 hover:bg-blue-50 font-bold px-10 py-4 text-lg rounded-full shadow-xl">
              <a href={waUrl} target="_blank" rel="noopener noreferrer">{config.hero.ctaLabel}</a>
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ServiceLandingPage;
