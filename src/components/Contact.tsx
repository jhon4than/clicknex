
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally handle the form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato o mais breve possível.",
    });
  };
  
  return (
    <section id="contact" className="py-24 bg-blue-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-700 font-medium mb-3">ENTRE EM CONTATO</p>
            <h2 className="heading-lg mb-6">Vamos Começar um Projeto Juntos</h2>
            <p className="text-xl text-blue-900/70">
              Tem um projeto em mente? Adoraríamos ouvir sobre ele. Conte-nos o que você está procurando e entraremos em contato.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label htmlFor="name" className="font-medium">Nome</label>
                <Input id="name" placeholder="Seu nome" required />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="font-medium">Email</label>
                <Input id="email" type="email" placeholder="Seu email" required />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="subject" className="font-medium">Assunto</label>
              <Input id="subject" placeholder="Consulta de projeto" required />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="font-medium">Mensagem</label>
              <Textarea id="message" placeholder="Conte-nos sobre seu projeto" rows={6} required />
            </div>
            
            <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800 py-6 text-lg">
              Enviar Mensagem
            </Button>
          </form>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-blue-900/70">contato@suaagencia.com.br</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Telefone</h3>
              <p className="text-blue-900/70">(11) 99999-9999</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Escritório</h3>
              <p className="text-blue-900/70">Av. Paulista, 1000<br />São Paulo, SP, 01310-100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
