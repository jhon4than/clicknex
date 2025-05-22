
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import About from '../components/About';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Função para observar elementos com a classe 'reveal' e adicionar a classe 'reveal-visible' quando entrarem no viewport
    const observeReveal = () => {
      const elements = document.querySelectorAll('.reveal');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      }, { threshold: 0.1 });
      
      elements.forEach((el) => observer.observe(el));
      
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };
    
    const timeout = setTimeout(observeReveal, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
