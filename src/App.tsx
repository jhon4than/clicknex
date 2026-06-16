import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Routes, Route, Navigate } from 'react-router-dom';

// Imports estáticos (eager) — necessário para o prerender (SSG): com React.lazy
// o renderToString capturaria apenas o fallback (Spinner) em vez do conteúdo.
import Index from './pages/Index';
import Clinicas from './pages/Clinicas';
import NotFound from './pages/NotFound';
import Sobre from './pages/Sobre';
import ServicosHub from './pages/ServicosHub';
import Contato from './pages/Contato';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import TermosDeUso from './pages/TermosDeUso';

// Serviços
import TrafegoPago from './pages/servicos/TrafegoPago';
import GoogleAds from './pages/servicos/GoogleAds';
import MetaAds from './pages/servicos/MetaAds';
import CriacaoSites from './pages/servicos/CriacaoSites';
import SeoPage from './pages/servicos/SeoPage';
import Automacao from './pages/servicos/Automacao';

// Nichos
import Dentistas from './pages/nichos/Dentistas';
import Medicos from './pages/nichos/Medicos';
import Esteticas from './pages/nichos/Esteticas';
import Advocacia from './pages/nichos/Advocacia';
import Imobiliarias from './pages/nichos/Imobiliarias';
import Ecommerce from './pages/nichos/Ecommerce';

// SEO Local
import LocalLavras from './pages/LocalLavras';
import LocalSulDeMinas from './pages/LocalSulDeMinas';

const queryClient = new QueryClient();

// Apenas a árvore de rotas. O Router é provido por quem monta o App:
// - main.tsx  → <BrowserRouter> (cliente, hidratação)
// - entry-server.tsx → <StaticRouter location> (prerender no build)
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Home — clínicas (página principal) */}
        <Route path="/" element={<Clinicas />} />

        {/* Agência institucional */}
        <Route path="/agencia" element={<Index />} />

        {/* Redirects legados */}
        <Route path="/clinicas" element={<Navigate to="/" replace />} />

        {/* Institucional */}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<ServicosHub />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />

        {/* Serviços */}
        <Route path="/servicos/trafego-pago" element={<TrafegoPago />} />
        <Route path="/servicos/google-ads" element={<GoogleAds />} />
        <Route path="/servicos/meta-ads" element={<MetaAds />} />
        <Route path="/servicos/criacao-de-sites" element={<CriacaoSites />} />
        <Route path="/servicos/seo" element={<SeoPage />} />
        <Route path="/servicos/automacao-de-marketing" element={<Automacao />} />

        {/* Nichos */}
        <Route path="/nichos/clinicas" element={<Navigate to="/" replace />} />
        <Route path="/nichos/dentistas" element={<Dentistas />} />
        <Route path="/nichos/medicos" element={<Medicos />} />
        <Route path="/nichos/esteticas" element={<Esteticas />} />
        <Route path="/nichos/advocacia" element={<Advocacia />} />
        <Route path="/nichos/imobiliarias" element={<Imobiliarias />} />
        <Route path="/nichos/ecommerce" element={<Ecommerce />} />

        {/* SEO Local */}
        <Route path="/agencia-marketing-digital-lavras-mg" element={<LocalLavras />} />
        <Route path="/agencia-marketing-digital-sul-de-minas" element={<LocalSulDeMinas />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
