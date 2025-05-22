
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!headingRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = headingRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      headingRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${y * -3}deg)`;
      
      // Atualizando posição para efeito parallax
      setMousePosition({ x: clientX, y: clientY });
    };
    
    const handleMouseLeave = () => {
      if (!headingRef.current) return;
      headingRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };
    
    const element = headingRef.current;
    const heroElement = heroRef.current;
    
    if (element) {
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    }
    
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  useEffect(() => {
    // Inicializar partículas
    const createParticles = () => {
      const particlesContainer = document.querySelector('.hero-particles');
      if (!particlesContainer) return;
      
      // Limpar partículas existentes
      particlesContainer.innerHTML = '';
      
      // Criar novas partículas
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'tech-dot';
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5}`;
        particle.style.animationDuration = `${3 + Math.random() * 5}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        particlesContainer.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Adicionar efeito de scroll reveal para elementos
    const revealElements = document.querySelectorAll('.hero-reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Partículas tecnológicas */}
      <div className="absolute inset-0 pointer-events-none hero-particles"></div>
      
      {/* Linhas decorativas */}
      <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="absolute left-0 bottom-1/2 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-20"></div>
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      
      {/* Círculos decorativos */}
      <div 
        className="absolute -right-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-900/10 to-blue-400/5 pointer-events-none parallax parallax-slow"
        style={{ 
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.2)` 
        }}
      ></div>
      <div 
        className="absolute -left-40 -top-40 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-400/5 to-blue-900/10 pointer-events-none parallax parallax-medium"
        style={{ 
          transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px) scale(1.1)` 
        }}
      ></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl">
          <div className="overflow-hidden">
            <p className="text-lg md:text-xl font-medium mb-6 hero-reveal animate-fade-up opacity-0 text-blue-800" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              AGÊNCIA ESPECIALIZADA EM MARKETING DIGITAL
            </p>
          </div>
          
          <div className="overflow-hidden mb-10">
            <h1 
              ref={headingRef}
              className="heading-xl text-gradient hero-reveal animate-fade-up opacity-0 transition-all duration-300 ease-out"
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards', transformStyle: 'preserve-3d' }}
            >
              TRANSFORMAMOS<br />IDEIAS EM<br />RESULTADOS
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl max-w-2xl mb-10 hero-reveal animate-fade-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Desenvolvemos estratégias avançadas de marketing digital e tráfego pago que conectam marcas com seu público-alvo e impulsionam seu crescimento.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 hero-reveal animate-fade-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Button className="bg-blue-900 text-white hover:bg-blue-800 text-lg py-6 px-8 group relative overflow-hidden">
              <span className="relative z-10">Nosso Trabalho</span>
              <span className="absolute inset-0 bg-blue-700 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-blue-900 text-blue-900 hover:bg-blue-50 relative overflow-hidden group">
              <span className="relative z-10">Sobre Nós</span>
              <span className="absolute inset-0 bg-blue-100 transform scale-y-0 origin-bottom transition-transform group-hover:scale-y-100"></span>
            </Button>
          </div>
          
          {/* Elemento flutuante decorativo */}
          <div
            className="absolute right-10 top-1/3 w-32 h-32 opacity-60 pointer-events-none parallax parallax-fast"
            style={{ 
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute inset-2 border border-blue-400/30 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              </div>
            </div>
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
