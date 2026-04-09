import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { organizationLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL } from '../components/seo/siteConfig';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Users, TrendingUp, Award } from 'lucide-react';

const valores = [
  { icon: <TrendingUp className="w-7 h-7 text-blue-600" />, titulo: 'Resultados Reais', desc: 'Cada estratégia é orientada por dados e focada em ROI mensurável para o seu negócio.' },
  { icon: <Users className="w-7 h-7 text-blue-600" />, titulo: 'Parceria de Longo Prazo', desc: 'Não vendemos pacotes. Construímos relações duradouras com crescimento contínuo.' },
  { icon: <CheckCircle2 className="w-7 h-7 text-blue-600" />, titulo: 'Transparência Total', desc: 'Relatórios semanais e acesso total às plataformas. Você sempre sabe onde cada centavo está sendo investido.' },
  { icon: <Award className="w-7 h-7 text-blue-600" />, titulo: 'Especialização Vertical', desc: 'Somos especialistas em nichos específicos, o que nos permite criar estratégias muito mais eficazes.' },
];

const Sobre = () => (
  <>
    <Seo
      title="Sobre a ClickNex | Agência de Marketing Digital em Lavras-MG"
      description="Conheça a ClickNex: fundada em 2020, especialista em marketing digital para clínicas, e-commerce e negócios locais. Baseada em Lavras-MG, atendemos todo o Brasil."
      keywords={['sobre clicknex', 'agência marketing lavras mg', 'equipe clicknex', 'marketing digital minas gerais']}
      jsonLd={[
        organizationLd(),
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Sobre', url: `${SITE_URL}/sobre` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
        <div className="container-custom text-center">
          <p className="text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm">Quem Somos</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformamos Ideias<br />em <span className="text-blue-300">Resultados Reais</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A ClickNex é uma agência de marketing digital fundada em 2020, especializada em gerar crescimento previsível para clínicas, e-commerce e negócios locais em todo o Brasil.
          </p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="py-20">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-950 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nascemos em Lavras, no Sul de Minas Gerais, com uma missão clara: democratizar o acesso ao marketing digital de alta performance para pequenas e médias empresas brasileiras.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Desde 2020, acumulamos mais de 127 clientes atendidos, R$2,8 milhões em faturamento gerado e uma avaliação média de 4,9 estrelas. Esses números não são coincidência — são o resultado de um método que combina dados, criatividade e uma parceria genuína com cada cliente.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hoje somos referência em marketing para clínicas médicas na região Sul de Minas, com atuação em todo o território nacional.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: '127+', label: 'Clientes atendidos' },
                { num: 'R$2.8M', label: 'Faturamento gerado' },
                { num: '4.9★', label: 'Avaliação média' },
                { num: '2020', label: 'Ano de fundação' },
              ].map((s) => (
                <div key={s.label} className="bg-blue-50 rounded-xl p-6 text-center">
                  <p className="text-3xl font-bold text-blue-900 mb-1">{s.num}</p>
                  <p className="text-sm text-blue-700">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Nossos Valores</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Os princípios que guiam cada decisão e cada campanha que rodamos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((v) => (
              <div key={v.titulo} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-blue-950 mb-2">{v.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4">Pronto para crescer com a ClickNex?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">Solicite um diagnóstico gratuito e descubra como podemos escalar seu negócio.</p>
          <Button
            asChild
            className="bg-white text-blue-950 hover:bg-blue-50 font-bold px-8 py-4 text-lg rounded-full"
          >
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

export default Sobre;
