
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Globe, Megaphone, Lightbulb, Code, Bot } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="h-10 w-10" />,
    title: "Tráfego Pago",
    description: "Estratégias avançadas de anúncios em Google Ads, Meta Ads e outras plataformas para maximizar seu retorno sobre investimento."
  },
  {
    icon: <Lightbulb className="h-10 w-10" />,
    title: "Criação de Criativos",
    description: "Design de materiais publicitários impactantes otimizados para conversão que transformam visualizações em vendas reais."
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: "Criação de Sites",
    description: "Desenvolvimento de websites responsivos, otimizados para SEO e focados em conversão para fortalecer sua presença digital."
  },
  {
    icon: <Bot className="h-10 w-10" />,
    title: "Automação de Marketing",
    description: "Sistemas inteligentes que automatizam processos de marketing e nutrem leads até a conversão final, economizando tempo e recursos."
  },
  {
    icon: <BarChart className="h-10 w-10" />,
    title: "Gestão de Campanhas",
    description: "Gerenciamento estratégico de campanhas publicitárias com análises avançadas e otimização contínua para resultados mensuráveis."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Produtos Validados",
    description: "Desenvolvimento e validação de produtos digitais com base em pesquisa de mercado, análise de dados e testes com usuários reais."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Elementos decorativos tecnológicos */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-medium mb-3">NOSSOS SERVIÇOS</p>
          <h2 className="heading-lg mb-4">Soluções Completas para seu Negócio</h2>
          <p className="text-xl text-blue-900/70 max-w-3xl mx-auto">
            Oferecemos estratégias personalizadas e eficientes para impulsionar sua presença digital e gerar resultados mensuráveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
              <CardContent className="p-8">
                <div className="mb-6 text-blue-800 group-hover:text-blue-600 transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-blue-900/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 overflow-hidden relative">
          <div className="py-10 bg-blue-900 text-white rounded-lg shadow-lg">
            <div className="whitespace-nowrap animate-marquee">
              <span className="text-7xl font-extrabold mx-4">CRIATIVO</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">ESTRATÉGICO</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">INOVADOR</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">RESULTADOS</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">CRIATIVO</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">ESTRATÉGICO</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
