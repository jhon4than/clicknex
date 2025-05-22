
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

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section id="work" className="py-24 relative">
      {/* Elementos tecnológicos decorativos */}
      <div className="absolute right-0 top-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute left-0 bottom-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div>
            <p className="text-blue-700 font-medium mb-3">NOSSO PORTFÓLIO</p>
            <h2 className="heading-lg mb-6">Projetos que Geram Resultados</h2>
            <p className="text-xl text-blue-900/70 max-w-xl">
              Trabalhamos com marcas de diversos setores para criar estratégias digitais que trazem resultados reais, mensuráveis e escaláveis.
            </p>
          </div>
          <Button className="mt-8 lg:mt-0 bg-blue-900 text-white hover:bg-blue-800 group">
            Ver Todos os Projetos
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
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
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/90 to-blue-900/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-blue-300 mb-2 font-medium tracking-wide">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-blue-100 mb-6">{project.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
                    Ver Projeto
                  </Button>
                </div>
              </div>
              <div className="bg-white p-4 rounded-b-xl">
                <p className="text-blue-700 font-medium">{project.category}</p>
                <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
