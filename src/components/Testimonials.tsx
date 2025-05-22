
import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "A estratégia de tráfego desenvolvida pela agência aumentou nossas vendas em 140% em apenas 3 meses. Sem dúvidas, o melhor investimento que fizemos.",
    author: "Mariana Silva",
    position: "Diretora de Marketing, TechSolution",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=774"
  },
  {
    quote: "Os criativos desenvolvidos pela equipe transformaram completamente a percepção da nossa marca. Nosso engajamento nas redes sociais cresceu exponencialmente.",
    author: "Carlos Mendes",
    position: "CEO, Inovare E-commerce",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=774"
  },
  {
    quote: "O site que criaram para nossa empresa não só ficou visualmente impressionante como também multiplicou nossa taxa de conversão por 3. Extremamente profissionais.",
    author: "Renata Alves",
    position: "Diretora Executiva, ImobInvest",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=774"
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const depth = (index + 1) * 0.2;
        card.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px) rotateY(${moveX * depth}deg) rotateX(${-moveY * depth}deg)`;
      });
    };
    
    const handleMouseLeave = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.style.transform = 'translate(0, 0) rotateY(0) rotateX(0)';
      });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Efeito de partículas */}
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
      
      {/* Elementos tecnológicos */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-30"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-medium mb-3">O QUE NOSSOS CLIENTES DIZEM</p>
          <h2 className="heading-lg mb-6">Resultados que Falam por Si</h2>
          <p className="text-xl text-blue-900/70 max-w-2xl mx-auto">
            Trabalhamos com empresas de diversos segmentos para criar estratégias digitais que geram impacto real nos negócios.
          </p>
        </div>
        
        <div ref={containerRef} className="perspective-1000 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="reveal transition-all duration-300"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="glow-border h-full card-hover">
                  <CardContent className="p-8 flex flex-col h-full">
                    <Quote className="text-blue-500 mb-6 h-10 w-10" />
                    <p className="text-blue-900 mb-6 flex-grow italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-blue-200"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900">{testimonial.author}</h4>
                        <p className="text-blue-700 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
