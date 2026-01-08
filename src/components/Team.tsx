
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const team = [
  {
    name: "Alexandre Moreira",
    role: "Diretor Criativo",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774",
  },
  {
    name: "Carla Santos",
    role: "Especialista em Tráfego",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776",
  },
  {
    name: "Marcos Lima",
    role: "Diretor Técnico",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774",
  },
  {
    name: "Olivia Costa",
    role: "Estrategista de Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761",
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Elementos tecnológicos decorativos */}
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-blue-500 via-transparent to-blue-500 opacity-30"></div>
      
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-medium mb-3">CONHEÇA NOSSA EQUIPE</p>
          <h2 className="heading-lg mb-6">AAAAAAAAA Os Talentos Por Trás de Nossa Agência</h2>
          <p className="text-xl text-blue-900/70 max-w-2xl mx-auto">
            Nossa equipe diversificada reúne expertise em design, tecnologia e marketing para criar trabalhos excepcionais que geram resultados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none overflow-hidden group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                  <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                  <p className="text-blue-700">{member.role}</p>
                  <div className="w-10 h-1 bg-blue-700 mt-2 mb-2 transition-all duration-300 group-hover:w-20"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center glass p-10 rounded-xl max-w-3xl mx-auto">
          <p className="text-xl mb-6 text-blue-900">Quer fazer parte da nossa equipe?</p>
          <a href="#" className="text-lg font-semibold text-blue-700 hover:text-blue-900 transition-colors flex items-center justify-center gap-2 group">
            Ver Vagas Abertas
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
