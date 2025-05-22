
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-950 text-white py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start pb-16 border-b border-blue-900">
          <div className="mb-10 lg:mb-0">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 bg-blue-800 flex items-center justify-center rounded-md mr-2">
                <img 
                  src="/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png"
                  alt="Logo da Agência" 
                  className="h-10" 
                />
              </div>
              <h2 className="text-3xl font-bold">AGÊNCIA</h2>
            </div>
            <p className="text-blue-300 max-w-md">
              Criando estratégias digitais inovadoras que conectam marcas com seu público e geram resultados reais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-3">
                <li><a href="#work" className="text-blue-300 hover:text-white transition-colors">Projetos</a></li>
                <li><a href="#services" className="text-blue-300 hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#about" className="text-blue-300 hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#team" className="text-blue-300 hover:text-white transition-colors">Equipe</a></li>
                <li><a href="#contact" className="text-blue-300 hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Tráfego Pago</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Criativos</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Automações</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Websites</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-blue-400 mb-4 md:mb-0">
            © {currentYear} Agência de Marketing Digital. Todos os direitos reservados.
          </p>
          <a 
            href="#" 
            className="group inline-flex items-center text-blue-300 hover:text-white transition-colors"
          >
            Voltar ao topo 
            <ArrowRight className="ml-2 h-4 w-4 transform rotate-[-45deg] group-hover:translate-y-[-3px] group-hover:translate-x-[3px] transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
