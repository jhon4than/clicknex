
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
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };
  
  return (
    <section id="contact" className="py-24 bg-neutral-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-neutral-500 font-medium mb-3">GET IN TOUCH</p>
            <h2 className="heading-lg mb-6">Let's Start a Project Together</h2>
            <p className="text-xl text-neutral-600">
              Have a project in mind? We'd love to hear about it. Tell us what you're looking for and we'll get back to you.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label htmlFor="name" className="font-medium">Name</label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-3">
                <label htmlFor="email" className="font-medium">Email</label>
                <Input id="email" type="email" placeholder="Your email" required />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="subject" className="font-medium">Subject</label>
              <Input id="subject" placeholder="Project inquiry" required />
            </div>
            
            <div className="space-y-3">
              <label htmlFor="message" className="font-medium">Message</label>
              <Textarea id="message" placeholder="Tell us about your project" rows={6} required />
            </div>
            
            <Button type="submit" className="w-full bg-black text-white hover:bg-neutral-800 py-6 text-lg">
              Send Message
            </Button>
          </form>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-neutral-600">hello@nexusagency.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-neutral-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Office</h3>
              <p className="text-neutral-600">123 Creative St, Suite 100<br />San Francisco, CA 94103</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
