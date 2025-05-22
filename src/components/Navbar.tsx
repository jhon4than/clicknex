
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
        <a href="#" className="text-2xl font-extrabold">NEXUS</a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#work" className="font-medium hover:text-neutral-500 transition-colors">Work</a>
          <a href="#services" className="font-medium hover:text-neutral-500 transition-colors">Services</a>
          <a href="#about" className="font-medium hover:text-neutral-500 transition-colors">About</a>
          <a href="#team" className="font-medium hover:text-neutral-500 transition-colors">Team</a>
          <a href="#contact">
            <Button variant="default" className="bg-black text-white hover:bg-neutral-800">
              Contact Us
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
              Work
            </a>
            <a 
              href="#services" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#team" 
              className="text-xl font-medium" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button variant="default" className="bg-black text-white hover:bg-neutral-800 w-full">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
