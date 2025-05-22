
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alex Morgan",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774",
  },
  {
    name: "Sarah Chen",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776",
  },
  {
    name: "Marcus Wright",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=774",
  },
  {
    name: "Olivia Kim",
    role: "Marketing Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761",
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-neutral-500 font-medium mb-3">MEET THE TEAM</p>
          <h2 className="heading-lg mb-6">The Talented People Behind NEXUS</h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Our diverse team brings together expertise from design, technology, and marketing to create exceptional work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none overflow-hidden group">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-neutral-500">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-xl mb-6">Want to join our team?</p>
          <a href="#" className="text-lg font-semibold underline underline-offset-4 hover:text-neutral-500 transition-colors">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;
