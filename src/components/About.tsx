
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-blue-900 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-blue-300 font-medium mb-3">SOBRE NÓS</p>
            <h2 className="heading-lg mb-8">Somos uma equipe de especialistas em marketing digital e tráfego pago</h2>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
              Nossa Metodologia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl">
              Fundada em 2020, nossa agência é especializada em soluções completas de marketing digital que conectam marcas com seu público-alvo através de estratégias inovadoras.
            </p>
            <p className="text-blue-200">
              Acreditamos que o marketing eficiente vai além da estética — trata-se de resolver problemas e criar experiências significativas. Nossa equipe combina pensamento estratégico, talento criativo e expertise técnica para entregar projetos que superam expectativas.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-blue-300">Clientes Satisfeitos</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">120+</p>
                <p className="text-blue-300">Projetos Concluídos</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">15+</p>
                <p className="text-blue-300">Especialistas</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">8+</p>
                <p className="text-blue-300">Prêmios do Setor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
