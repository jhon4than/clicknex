
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start pb-16 border-b border-neutral-800">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">NEXUS</h2>
            <p className="text-neutral-400 max-w-md">
              Creating innovative digital experiences that connect brands with their audiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-3">
                <li><a href="#work" className="text-neutral-400 hover:text-white transition-colors">Work</a></li>
                <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="text-neutral-400 hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Web Design</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Brand Strategy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-neutral-500 mb-4 md:mb-0">
            © {currentYear} NEXUS. All rights reserved.
          </p>
          <a 
            href="#" 
            className="group inline-flex items-center text-neutral-400 hover:text-white transition-colors"
          >
            Back to top 
            <ArrowRight className="ml-2 h-4 w-4 transform rotate-[-45deg] group-hover:translate-y-[-3px] group-hover:translate-x-[3px] transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
