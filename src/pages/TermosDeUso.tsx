import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL, BRAND_EMAIL, SITE_NAME, LEGAL_NAME, TAX_ID, BRAND_ADDRESS } from '../components/seo/siteConfig';

const TermosDeUso = () => (
  <>
    <Seo
      title="Termos de Uso | ClickNex"
      description="Termos de Uso do site ClickNex. Leia as condições de uso dos nossos serviços de marketing digital."
      jsonLd={[
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Termos de Uso', url: `${SITE_URL}/termos-de-uso` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto prose prose-blue">
          <h1>Termos de Uso</h1>
          <p className="text-gray-500 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <p>Bem-vindo ao site da <strong>{SITE_NAME}</strong> ({LEGAL_NAME}, CNPJ {TAX_ID}). Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso.</p>

          <h2>1. Uso do Site</h2>
          <p>Este site é disponibilizado para fins informativos e comerciais. É vedado o uso para fins ilícitos, spam, ou qualquer atividade que possa prejudicar a ClickNex ou terceiros.</p>

          <h2>2. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site — textos, imagens, logotipos, layouts — é de propriedade exclusiva da ClickNex e está protegido pela legislação de propriedade intelectual. A reprodução sem autorização prévia por escrito é proibida.</p>

          <h2>3. Responsabilidade</h2>
          <p>As informações neste site são fornecidas "como estão". A ClickNex não garante que o site estará sempre disponível ou livre de erros. Não nos responsabilizamos por danos decorrentes do uso ou impossibilidade de uso do site.</p>

          <h2>4. Links Externos</h2>
          <p>Este site pode conter links para sites de terceiros. A ClickNex não controla e não se responsabiliza pelo conteúdo desses sites.</p>

          <h2>5. Serviços Contratados</h2>
          <p>Os termos específicos de cada serviço contratado são definidos em proposta/contrato individual assinado entre as partes, que prevalece sobre estes termos gerais.</p>

          <h2>6. Lei Aplicável</h2>
          <p>Estes termos são regidos pela legislação brasileira. O foro para resolução de conflitos é o da Comarca de {BRAND_ADDRESS.city}, {BRAND_ADDRESS.state}.</p>

          <h2>7. Contato</h2>
          <p>Dúvidas sobre estes termos: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>.</p>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default TermosDeUso;
