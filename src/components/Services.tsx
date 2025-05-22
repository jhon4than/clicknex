
import React, { useEffect, useRef } from 'react';
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
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observar os cartões de serviços
    serviceCardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    // Adicionar efeito de hover 3D
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      card.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${y * -5}deg) translateZ(10px)`;
    };
    
    const handleMouseLeave = (card: HTMLDivElement) => {
      card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) translateZ(0)';
    };
    
    serviceCardsRef.current.forEach((card) => {
      if (!card) return;
      
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      serviceCardsRef.current.forEach((card) => {
        if (!card) return;
        
        observer.unobserve(card);
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-blue-50 relative overflow-hidden">
      {/* Elementos decorativos tecnológicos */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      
      {/* Partículas */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--move-x': `${(Math.random() - 0.5) * 100}px`,
              '--move-y': `${(Math.random() - 0.5) * 100}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            } as React.CSSProperties}
          ></div>
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="text-blue-700 font-medium mb-3">NOSSOS SERVIÇOS</p>
          <h2 className="heading-lg mb-4">Soluções Completas para seu Negócio</h2>
          <p className="text-xl text-blue-900/70 max-w-3xl mx-auto">
            Oferecemos estratégias personalizadas e eficientes para impulsionar sua presença digital e gerar resultados mensuráveis
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              ref={el => serviceCardsRef.current[index] = el}
              className="reveal transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl group glow-border h-full">
                <CardContent className="p-8 relative">
                  <div className="mb-6 text-blue-800 group-hover:text-blue-600 transition-colors">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-blue-900/70">{service.description}</p>
                  
                  {/* Elemento decorativo */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-blue-100/50 scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-20 overflow-hidden relative reveal">
          <div ref={marqueeRef} className="py-10 bg-blue-900 text-white rounded-lg shadow-lg relative overflow-hidden">
            {/* Gradientes para efeito de fade nas bordas */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>
            
            <div className="whitespace-nowrap animate-marquee flex items-center">
              <span className="text-5xl md:text-7xl font-extrabold mx-6">CRIATIVO</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">•</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">ESTRATÉGICO</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">•</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">INOVADOR</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">•</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">RESULTADOS</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">•</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">CRIATIVO</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">•</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">ESTRATÉGICO</span>
              <span className="text-5xl md:text-7xl font-extrabold mx-6">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
