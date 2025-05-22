
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Code, Layout, Search, Monitor } from 'lucide-react';

const services = [
  {
    icon: <Layout className="h-10 w-10" />,
    title: "Web Design",
    description: "Creating stunning, responsive websites that captivate your audience and deliver exceptional user experiences."
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Development",
    description: "Building robust, scalable web applications with cutting-edge technologies and best practices."
  },
  {
    icon: <Search className="h-10 w-10" />,
    title: "Digital Marketing",
    description: "Driving growth through strategic SEO, content marketing, and social media campaigns."
  },
  {
    icon: <Monitor className="h-10 w-10" />,
    title: "Brand Strategy",
    description: "Crafting compelling brand identities that connect with your target audience and build lasting relationships."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-neutral-500 font-medium mb-3">WHAT WE DO</p>
          <h2 className="heading-lg">Our Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="mb-6 text-black">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 overflow-hidden">
          <div className="py-10 bg-black text-white">
            <div className="whitespace-nowrap animate-marquee">
              <span className="text-7xl font-extrabold mx-4">CREATIVE</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">INNOVATIVE</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">STRATEGIC</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">BOLD</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">CREATIVE</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
              <span className="text-7xl font-extrabold mx-4">INNOVATIVE</span>
              <span className="text-7xl font-extrabold mx-4">•</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
