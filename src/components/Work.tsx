
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Campanha Digital Imobiliária",
    category: "Tráfego Pago",
    imageUrl: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=1000",
    description: "Estratégia de anúncios para empresa do setor imobiliário com ROI de 300% em 3 meses."
  },
  {
    id: 2,
    title: "E-commerce de Moda",
    category: "Marketing Digital",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000",
    description: "Automação de marketing e tráfego para loja online com aumento de 220% nas vendas."
  },
  {
    id: 3,
    title: "B2B Tech Solutions",
    category: "Criação de Site",
    imageUrl: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=1000",
    description: "Site institucional e estratégia de geração de leads B2B com conversão de 15%."
  },
  {
    id: 4,
    title: "Nutrição Especializada",
    category: "Produto Validado",
    imageUrl: "https://images.unsplash.com/photo-1571292098320-997aa03a5d19?q=80&w=1000",
    description: "Desenvolvimento e validação de produto digital para clínica com 1.200 vendas no lançamento."
  }
];

// Adding more project data to fill in empty space
const additionalProjects = [
  {
    id: 5,
    title: "SaaS de Gestão Financeira",
    category: "Tráfego Pago",
    imageUrl: "https://images.unsplash.com/photo-1593510987185-1ec2256148f3?q=80&w=1000",
    description: "Campanha de aquisição de usuários para plataforma SaaS com CPA 40% abaixo do benchmark."
  },
  {
    id: 6,
    title: "Clínica Médica Especializada",
    category: "Marketing Digital",
    imageUrl: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1000",
    description: "Estratégia completa de presença digital aumentando agendamentos em 180% em 6 meses."
  }
];

// Combining all projects
const allProjects = [...projects, ...additionalProjects];

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const filters = ["all", "Tráfego Pago", "Marketing Digital", "Criação de Site", "Produto Validado"];
  
  const filteredProjects = activeFilter === "all" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeFilter);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });
    
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [filteredProjects]);
  
  return (
    <section id="work" className="py-24 relative">
      {/* Elementos tecnológicos decorativos */}
      <div className="absolute right-0 top-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute left-0 bottom-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div className="reveal">
            <p className="text-blue-700 font-medium mb-3">NOSSO PORTFÓLIO</p>
            <h2 className="heading-lg mb-6">Projetos que Geram Resultados</h2>
            <p className="text-xl text-blue-900/70 max-w-xl">
              Trabalhamos com marcas de diversos setores para criar estratégias digitais que trazem resultados reais, mensuráveis e escaláveis.
            </p>
          </div>
          <Button className="mt-8 lg:mt-0 bg-blue-900 text-white hover:bg-blue-800 group reveal" style={{ transitionDelay: '0.2s' }}>
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Filtro de categorias */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 reveal" style={{ transitionDelay: '0.3s' }}>
          {filters.map((filter, index) => (
            <button 
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-blue-900 text-white' 
                  : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
              }`}
            >
              {filter === 'all' ? 'Todos' : filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => projectRefs.current[index] = el}
              className="group relative overflow-hidden rounded-xl shadow-lg reveal"
              style={{ transitionDelay: `${index * 0.1 + 0.4}s`, opacity: 0, transform: 'translateY(20px)' }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/90 to-blue-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-blue-300 mb-2 font-medium tracking-wide">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-blue-100 mb-6">{project.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 group">
                    Ver Projeto
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
                  </Button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-xl relative z-10">
                <div className="absolute left-0 top-0 w-1 h-full bg-blue-700 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                <div className="pl-3">
                  <p className="text-blue-700 font-medium">{project.category}</p>
                  <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Preenchendo espaço vazio */}
        <div className="mt-24 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-10 text-white reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Pronto para transformar seu negócio digital?</h3>
              <p className="text-blue-100 mb-6">
                Descubra como nossa abordagem estratégica pode ajudar sua empresa a atingir novos patamares de sucesso digital.
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900 group">
                Agende uma Consulta Gratuita
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/30 rounded-full filter blur-xl"></div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <p>Análise completa do seu negócio</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <p>Estratégia personalizada</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <p>Implementação por especialistas</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <p>Resultados mensuráveis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
