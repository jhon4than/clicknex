
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Campanha Digital Imobiliária",
    category: "Tráfego Pago",
    imageUrl: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=1000",
    description: "Estratégia de anúncios para empresa do setor imobiliário com ROI de 300%."
  },
  {
    id: 2,
    title: "E-commerce de Moda",
    category: "Marketing Digital",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000",
    description: "Automação de marketing e tráfego para loja online de moda sustentável."
  },
  {
    id: 3,
    title: "B2B Tech Solutions",
    category: "Criação de Site",
    imageUrl: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=1000",
    description: "Site institucional e estratégia de geração de leads para empresa de tecnologia."
  },
  {
    id: 4,
    title: "Nutrição Especializada",
    category: "Produto Validado",
    imageUrl: "https://images.unsplash.com/photo-1571292098320-997aa03a5d19?q=80&w=1000",
    description: "Desenvolvimento e validação de produto digital para clínica de nutrição."
  }
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section id="work" className="py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div>
            <p className="text-blue-700 font-medium mb-3">NOSSO PORTFÓLIO</p>
            <h2 className="heading-lg mb-6">Projetos Selecionados</h2>
            <p className="text-xl text-blue-900/70 max-w-xl">
              Trabalhamos com marcas de diversos setores para criar estratégias digitais que trazem resultados reais e mensuráveis.
            </p>
          </div>
          <Button className="mt-8 lg:mt-0 bg-blue-900 text-white hover:bg-blue-800">
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div 
                className="aspect-[4/3] w-full overflow-hidden"
              >
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>
              <div className="absolute inset-0 bg-blue-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-blue-200 mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-blue-100 mb-6">{project.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                    Ver Projeto
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-blue-700">{project.category}</p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
