import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL, BRAND_EMAIL, BRAND_ADDRESS } from '../components/seo/siteConfig';

const PoliticaPrivacidade = () => (
  <>
    <Seo
      title="Política de Privacidade | ClickNex"
      description="Política de Privacidade da ClickNex — BERTINI E MEIRELES SERVIÇOS LTDA. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD."
      keywords={['política de privacidade clicknex', 'lgpd clicknex']}
      jsonLd={[
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Política de Privacidade', url: `${SITE_URL}/politica-de-privacidade` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto prose prose-blue">
          <h1>Política de Privacidade</h1>
          <p className="text-gray-500 text-sm">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

          <p>A <strong>ClickNex</strong> (BERTINI E MEIRELES SERVIÇOS LTDA, CNPJ 61.754.617/0001-97), com sede na {BRAND_ADDRESS.street}, {BRAND_ADDRESS.neighborhood}, {BRAND_ADDRESS.city}-{BRAND_ADDRESS.state}, CEP {BRAND_ADDRESS.postalCode}, valoriza sua privacidade e está comprometida com a proteção dos seus dados pessoais em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.</p>

          <h2>1. Dados que Coletamos</h2>
          <p>Coletamos dados que você fornece voluntariamente ao preencher formulários de contato ou solicitar diagnósticos, incluindo: nome completo, e-mail, telefone/WhatsApp, nome da empresa e mensagem.</p>
          <p>Também coletamos automaticamente dados de navegação via cookies e ferramentas de análise (Google Analytics, Meta Pixel) para melhoria da experiência e mensuração de campanhas.</p>

          <h2>2. Finalidade do Tratamento</h2>
          <ul>
            <li>Responder às suas solicitações e enviar propostas comerciais</li>
            <li>Enviar comunicações relacionadas aos nossos serviços (com seu consentimento)</li>
            <li>Analisar o desempenho do site e das campanhas de marketing</li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>

          <h2>3. Base Legal</h2>
          <p>O tratamento dos seus dados é fundamentado no consentimento (Art. 7º, I), na execução de contrato ou procedimentos preliminares (Art. 7º, V) e no legítimo interesse (Art. 7º, IX) da ClickNex.</p>

          <h2>4. Compartilhamento de Dados</h2>
          <p>Seus dados não são vendidos. Podemos compartilhá-los com parceiros de tecnologia estritamente necessários para a prestação dos serviços (ex: plataformas de CRM, ferramentas de e-mail), sempre sob acordos de confidencialidade.</p>

          <h2>5. Seus Direitos (LGPD)</h2>
          <p>Você tem direito a: confirmação de tratamento, acesso aos dados, correção, anonimização, portabilidade, eliminação e revogação do consentimento. Para exercer esses direitos, entre em contato: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>.</p>

          <h2>6. Retenção de Dados</h2>
          <p>Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido por lei. Dados de navegação são retidos por até 26 meses.</p>

          <h2>7. Cookies</h2>
          <p>Utilizamos cookies essenciais (funcionamento do site) e analíticos (Google Analytics 4, Meta Pixel). Você pode gerenciar cookies nas configurações do seu navegador.</p>

          <h2>8. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição.</p>

          <h2>9. Contato do Encarregado (DPO)</h2>
          <p>Para questões relacionadas à privacidade: <a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a>.</p>

          <h2>10. Atualizações</h2>
          <p>Esta política pode ser atualizada periodicamente. Publicaremos as alterações nesta página com a data de revisão.</p>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default PoliticaPrivacidade;
