
import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png'
  },
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png'
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1920px-Meta_Platforms_Inc._logo.svg.png'
  },
  {
    name: 'Oracle',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png'
  }
];

const Partners = () => {
  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-blue-700 font-medium mb-3">PARCERIAS DE SUCESSO</p>
          <h2 className="heading-md mb-6">Empresas que Confiam em Nosso Trabalho</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
