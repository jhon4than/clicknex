import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { organizationLd, localBusinessLd, serviceLd, faqPageLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL, BRAND_WHATSAPP, BRAND_ADDRESS, BRAND_PHONE } from '../components/seo/siteConfig';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

const faqs = [
  { q: 'A ClickNex atende somente em Lavras-MG?', a: 'Nossa sede é em Lavras-MG, mas atendemos clientes em todo o Brasil de forma 100% remota. Para empresas da região Sul de Minas, também oferecemos reuniões presenciais.' },
  { q: 'Quais tipos de negócios de Lavras vocês já atenderam?', a: 'Clínicas médicas e odontológicas, escritórios de advocacia, imobiliárias, comércios locais e prestadores de serviços de Lavras e região.' },
  { q: 'Como funciona o início do serviço?', a: 'Começamos com um diagnóstico gratuito: analisamos seu mercado local, concorrência e oportunidades. Em seguida, apresentamos uma proposta personalizada.' },
  { q: 'Vocês conhecem o mercado de Lavras e Sul de Minas?', a: 'Sim. Somos de Lavras e conhecemos a dinâmica do mercado local: sazonalidades, principais concorrentes e comportamento dos consumidores da região.' },
];

const LocalLavras = () => (
  <>
    <Seo
      title="Agência de Marketing Digital em Lavras-MG | ClickNex"
      description="ClickNex: agência de marketing digital localizada em Lavras-MG. Especialistas em tráfego pago, Google Ads, Meta Ads e automação para empresas de Lavras e Sul de Minas Gerais."
      keywords={['agência marketing digital lavras mg', 'marketing digital lavras', 'google ads lavras mg', 'agência lavras minas gerais', 'marketing digital sul de minas']}
      jsonLd={[
        organizationLd(),
        localBusinessLd(),
        serviceLd({
          name: 'Marketing Digital em Lavras-MG',
          description: 'Agência de marketing digital em Lavras-MG especializada em tráfego pago, criação de sites e automação para empresas locais.',
          url: `${SITE_URL}/agencia-marketing-digital-lavras-mg`,
        }),
        faqPageLd(faqs),
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Lavras-MG', url: `${SITE_URL}/agencia-marketing-digital-lavras-mg` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero local */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800 rounded-full px-4 py-2 mb-6 text-blue-200 text-sm">
            <MapPin className="w-4 h-4" /> Lavras, Minas Gerais
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Agência de Marketing Digital<br />em <span className="text-blue-300">Lavras-MG</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A ClickNex é uma agência de marketing digital localizada em Lavras-MG. Ajudamos empresas da cidade e do Sul de Minas a crescer com tráfego pago, SEO e automações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full">
              <a href={`https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou de Lavras-MG e gostaria de um diagnóstico gratuito.`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 inline" /> Solicitar Diagnóstico Gratuito
              </a>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-bold px-8 py-4 text-lg rounded-full">
              <a href={`tel:${BRAND_PHONE}`}>
                <Phone className="w-5 h-5 mr-2 inline" /> Ligar Agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Por que a ClickNex */}
      <section className="py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Por Que Escolher uma Agência Local?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { titulo: 'Conhecemos o Mercado Local', desc: 'Entendemos a dinâmica de Lavras e Sul de Minas: sazonalidades, concorrentes, comportamento do consumidor regional.' },
              { titulo: 'Atendimento Próximo', desc: 'Reuniões presenciais disponíveis para clientes de Lavras e região. Não somos só mais um e-mail na caixa de entrada.' },
              { titulo: 'Referências Locais', desc: 'Você pode conversar com nossos clientes de Lavras antes de contratar. Transparência total.' },
              { titulo: 'Comprometimento com a Comunidade', desc: 'Nosso sucesso depende do sucesso dos negócios locais. Temos interesse genuíno no crescimento da sua empresa.' },
            ].map((i) => (
              <div key={i.titulo} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-950 mb-1">{i.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Endereço / Mapa */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Nossa Localização</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <MapPin className="w-10 h-10 text-blue-700 mx-auto mb-4" />
            <p className="text-lg font-semibold text-blue-950 mb-1">{BRAND_ADDRESS.street}</p>
            <p className="text-gray-600">{BRAND_ADDRESS.neighborhood}</p>
            <p className="text-gray-600">{BRAND_ADDRESS.city}-{BRAND_ADDRESS.state}, CEP {BRAND_ADDRESS.postalCode}</p>
            <p className="text-blue-700 font-semibold mt-4">{BRAND_PHONE}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-blue-950 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default LocalLavras;
