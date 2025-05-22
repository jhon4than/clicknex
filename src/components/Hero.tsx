
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headingRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = headingRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      headingRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
    };
    
    const handleMouseLeave = () => {
      if (!headingRef.current) return;
      headingRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    
    const element = headingRef.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl">
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl font-medium mb-6 animate-fade-up opacity-0 text-blue-800" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              AGÊNCIA ESPECIALIZADA EM MARKETING DIGITAL
            </p>
          </div>
          
          <div className="overflow-hidden mb-10">
            <h1 
              ref={headingRef}
              className="heading-xl text-gradient animate-fade-up opacity-0 transition-all duration-300 ease-out"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards', transformStyle: 'preserve-3d' }}
            >
              TRANSFORMAMOS<br />IDEIAS EM<br />RESULTADOS
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl max-w-2xl mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Desenvolvemos estratégias avançadas de marketing digital e tráfego pago que conectam marcas com seu público-alvo e impulsionam seu crescimento.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 text-lg py-6 px-8 group">
              Nosso Trabalho
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-blue-900 text-blue-900 hover:bg-blue-50">
              Sobre Nós
            </Button>
          </div>
          
          {/* Elemento gráfico tecnológico */}
          <div className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none hidden lg:block">
            <div className="w-full h-full bg-gradient-to-tr from-blue-700 via-blue-500 to-transparent rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
