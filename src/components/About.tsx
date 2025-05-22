
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-neutral-400 font-medium mb-3">ABOUT US</p>
            <h2 className="heading-lg mb-8">We are a team of creative thinkers and problem solvers</h2>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              Our Process
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="space-y-8">
            <p className="text-xl">
              Founded in 2020, NEXUS is a full-service digital agency that helps brands connect with their audiences through innovative design and technology.
            </p>
            <p className="text-neutral-300">
              We believe that great design is more than just aesthetics—it's about solving problems and creating meaningful experiences. Our team combines strategic thinking, creative talent, and technical expertise to deliver projects that exceed expectations.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <p className="text-5xl font-bold mb-2">50+</p>
                <p className="text-neutral-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">120+</p>
                <p className="text-neutral-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">15+</p>
                <p className="text-neutral-400">Team Members</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">8+</p>
                <p className="text-neutral-400">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
