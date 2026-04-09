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
import Partners from '../components/Partners';
import Stats from '../components/Stats';
import Seo from '../components/seo/Seo';
import { organizationLd, localBusinessLd, websiteLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL } from '../components/seo/siteConfig';

const Index = () => {
  useEffect(() => {
    const observeReveal = () => {
      const elements = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
            }
          });
        },
        { threshold: 0.1 }
      );
      elements.forEach((el) => observer.observe(el));
      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };
    const timeout = setTimeout(observeReveal, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Seo
        title="Agência de Marketing Digital em Lavras-MG"
        description="ClickNex — agência de marketing digital especializada em tráfego pago, Google Ads, Meta Ads, criação de sites e automações. Transformamos ideias em resultados reais."
        keywords={['agência marketing digital', 'tráfego pago', 'google ads', 'meta ads', 'criação de sites', 'automação marketing', 'lavras mg']}
        jsonLd={[
          organizationLd(),
          localBusinessLd(),
          websiteLd(),
          breadcrumbLd([{ name: 'Home', url: `${SITE_URL}/` }]),
        ]}
      />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Partners />
        <Stats />
        <Work />
        <Testimonials />
        <About />
        <Team />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
