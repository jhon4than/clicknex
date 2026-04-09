import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Eager — páginas principais com tráfego imediato
import Index from './pages/Index';
import Clinicas from './pages/Clinicas';

// Lazy — todas as demais
const NotFound = lazy(() => import('./pages/NotFound'));
const Sobre = lazy(() => import('./pages/Sobre'));
const ServicosHub = lazy(() => import('./pages/ServicosHub'));
const Contato = lazy(() => import('./pages/Contato'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const PoliticaPrivacidade = lazy(() => import('./pages/PoliticaPrivacidade'));
const TermosDeUso = lazy(() => import('./pages/TermosDeUso'));

// Serviços
const TrafegoPago = lazy(() => import('./pages/servicos/TrafegoPago'));
const GoogleAds = lazy(() => import('./pages/servicos/GoogleAds'));
const MetaAds = lazy(() => import('./pages/servicos/MetaAds'));
const CriacaoSites = lazy(() => import('./pages/servicos/CriacaoSites'));
const SeoPage = lazy(() => import('./pages/servicos/SeoPage'));
const Automacao = lazy(() => import('./pages/servicos/Automacao'));

// Nichos
const Dentistas = lazy(() => import('./pages/nichos/Dentistas'));
const Medicos = lazy(() => import('./pages/nichos/Medicos'));
const Esteticas = lazy(() => import('./pages/nichos/Esteticas'));
const Advocacia = lazy(() => import('./pages/nichos/Advocacia'));
const Imobiliarias = lazy(() => import('./pages/nichos/Imobiliarias'));
const Ecommerce = lazy(() => import('./pages/nichos/Ecommerce'));

// SEO Local
const LocalLavras = lazy(() => import('./pages/LocalLavras'));
const LocalSulDeMinas = lazy(() => import('./pages/LocalSulDeMinas'));

const queryClient = new QueryClient();

const Spinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-4 border-blue-900 border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
