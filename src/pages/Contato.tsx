import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Seo from '../components/seo/Seo';
import { organizationLd, localBusinessLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL } from '../components/seo/siteConfig';

const Contato = () => (
  <>
    <Seo
      title="Contato | ClickNex Agência de Marketing Digital"
      description="Entre em contato com a ClickNex. Telefone: +55 (35) 99975-7076. E-mail: comercial@clicknex.com.br. Lavras-MG. Solicite um diagnóstico gratuito."
      keywords={['contato clicknex', 'falar com agência marketing', 'orçamento marketing digital', 'lavras mg marketing']}
      jsonLd={[
        organizationLd(),
        localBusinessLd(),
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Contato', url: `${SITE_URL}/contato` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  </>
);

export default Contato;
