import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { organizationLd, localBusinessLd, serviceLd, faqPageLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL, BRAND_WHATSAPP, BRAND_PHONE } from '../components/seo/siteConfig';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, MessageCircle, CheckCircle2 } from 'lucide-react';

const cidades = ['Lavras', 'Varginha', 'Três Corações', 'Itajubá', 'Pouso Alegre', 'Alfenas', 'Passos', 'Poços de Caldas', 'São Lourenço', 'Caxambu'];

const faqs = [
  { q: 'A ClickNex atende empresas de toda a região Sul de Minas?', a: 'Sim. Atendemos empresas de Varginha, Pouso Alegre, Itajubá, Alfenas, Três Corações, Passos e toda a macrorregião Sul de Minas Gerais.' },
  { q: 'Como é o atendimento para clientes de outras cidades?', a: 'O atendimento é 100% remoto via videochamada e WhatsApp. Para cidades próximas a Lavras, reuniões presenciais podem ser agendadas.' },
  { q: 'Quais são os principais nichos atendidos no Sul de Minas?', a: 'Clínicas médicas, clínicas odontológicas, estética, advocacia, imobiliárias e comércios locais.' },
  { q: 'O custo é o mesmo para empresas de fora de Lavras?', a: 'Sim. Não cobramos diferente por localização. O investimento é baseado no escopo do serviço, não no endereço da empresa.' },
];

const LocalSulDeMinas = () => (
  <>
    <Seo
      title="Agência de Marketing Digital no Sul de Minas Gerais | ClickNex"
      description="ClickNex: agência de marketing digital especialista em empresas do Sul de Minas Gerais. Atendemos Varginha, Pouso Alegre, Itajubá, Alfenas, Três Corações e toda a região."
      keywords={['agência marketing digital sul de minas', 'marketing digital minas gerais', 'google ads sul de minas', 'agência varginha mg', 'marketing digital pouso alegre', 'agência itajubá']}
      jsonLd={[
        organizationLd(),
        localBusinessLd(),
        serviceLd({
          name: 'Marketing Digital no Sul de Minas Gerais',
          description: 'Agência de marketing digital especializada em empresas do Sul de Minas Gerais: tráfego pago, SEO e automação.',
          url: `${SITE_URL}/agencia-marketing-digital-sul-de-minas`,
        }),
        faqPageLd(faqs),
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Sul de Minas', url: `${SITE_URL}/agencia-marketing-digital-sul-de-minas` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-800 rounded-full px-4 py-2 mb-6 text-blue-200 text-sm">
            <MapPin className="w-4 h-4" /> Sul de Minas Gerais
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Agência de Marketing Digital<br />para o <span className="text-blue-300">Sul de Minas Gerais</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A ClickNex atende empresas em toda a macrorregião Sul de Minas com estratégias de tráfego pago, SEO e automação que geram crescimento real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 text-lg rounded-full">
              <a href={`https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou do Sul de Minas e gostaria de um diagnóstico gratuito.`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 inline" /> Diagnóstico Gratuito
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

      {/* Cidades atendidas */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">Cidades Atendidas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {cidades.map((cidade) => (
              <span key={cidade} className="bg-blue-50 text-blue-800 px-5 py-2 rounded-full font-medium text-sm border border-blue-100 flex items-center gap-2">
                <MapPin className="w-3 h-3" /> {cidade}-MG
              </span>
            ))}
            <span className="bg-gray-50 text-gray-600 px-5 py-2 rounded-full font-medium text-sm border border-gray-200">e toda a região</span>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-blue-950 text-center mb-12">O Que Fazemos para Empresas do Sul de Minas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: '🎯', t: 'Tráfego Pago Local', d: 'Google Ads e Meta Ads segmentados por cidade e região, maximizando cada real investido.' },
              { icon: '🔍', t: 'SEO Local', d: 'Posicionamento no Google Maps e Google para pesquisas na sua cidade e cidades próximas.' },
              { icon: '🌐', t: 'Criação de Sites', d: 'Sites otimizados para o mercado local com foco em SEO regional e geração de leads.' },
              { icon: '🤖', t: 'Automação', d: 'Respostas automáticas, follow-up e lembretes para não perder nenhum lead local.' },
              { icon: '⭐', t: 'Gestão de Reputação', d: 'Mais avaliações no Google e Instagram para construir confiança na sua cidade.' },
              { icon: '📊', t: 'Relatórios Claros', d: 'Saiba exatamente de qual cidade vieram seus leads e quais canais estão funcionando.' },
            ].map((s) => (
              <div key={s.t} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold text-blue-950 mb-1">{s.t}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.d}</p>
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
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-semibold text-blue-950 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="container-custom max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Sua Empresa no Sul de Minas Merece Crescer</h2>
          <p className="text-blue-200 mb-8">Diagnóstico gratuito sem compromisso. Nossa equipe analisa seu mercado local e apresenta um plano personalizado.</p>
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 text-lg rounded-full">
            <a href={`https://wa.me/${BRAND_WHATSAPP}?text=Olá! Sou do Sul de Minas e gostaria de um diagnóstico gratuito.`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2 inline" /> Solicitar Diagnóstico Gratuito
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default LocalSulDeMinas;
