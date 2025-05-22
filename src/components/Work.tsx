
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Brand Identity",
    imageUrl: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=1000",
    description: "Vibrant brand identity for a nightlife startup."
  },
  {
    id: 2,
    title: "Serene Spaces",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1000",
    description: "Minimal website for an interior design studio."
  },
  {
    id: 3,
    title: "Urban Pulse",
    category: "Digital Campaign",
    imageUrl: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=1000",
    description: "Citywide digital marketing campaign for urban fashion brand."
  },
  {
    id: 4,
    title: "Eco Alliance",
    category: "Branding & Web",
    imageUrl: "https://images.unsplash.com/photo-1571292098320-997aa03a5d19?q=80&w=1000",
    description: "Complete rebrand and website for environmental nonprofit."
  }
];

const Work = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section id="work" className="py-24">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <div>
            <p className="text-neutral-500 font-medium mb-3">OUR PORTFOLIO</p>
            <h2 className="heading-lg mb-6">Selected Work</h2>
            <p className="text-xl text-neutral-600 max-w-xl">
              We've worked with brands from various industries to create memorable digital experiences.
            </p>
          </div>
          <Button className="mt-8 lg:mt-0 bg-black text-white hover:bg-neutral-800">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden"
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
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-neutral-300 mb-2">{project.category}</p>
                  <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-neutral-200 mb-6">{project.description}</p>
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    View Project
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-neutral-500">{project.category}</p>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
