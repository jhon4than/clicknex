
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white py-3 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="h-12 w-12 bg-blue-900 flex items-center justify-center rounded-md mr-2">
            <img 
              src="/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png"
              alt="Logo da Agência" 
              className="h-12" 
            />
          </div>
          <span className="text-2xl font-extrabold">AGÊNCIA</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#work" className="font-medium hover:text-blue-700 transition-colors">Projetos</a>
          <a href="#services" className="font-medium hover:text-blue-700 transition-colors">Serviços</a>
          <a href="#about" className="font-medium hover:text-blue-700 transition-colors">Sobre</a>
          <a href="#team" className="font-medium hover:text-blue-700 transition-colors">Equipe</a>
          <a href="#contact">
            <Button variant="default" className="bg-blue-900 text-white hover:bg-blue-800">
              Contato
            </Button>
          </a>
        </div>
        
        <button 
          className="md:hidden text-black" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-20 px-4">
          <div className="flex flex-col space-y-6 items-center">
            <a 
              href="#work" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Projetos
            </a>
            <a 
              href="#services" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#team" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Equipe
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="default" className="bg-blue-900 text-white hover:bg-blue-800 w-full">
                Contato
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
