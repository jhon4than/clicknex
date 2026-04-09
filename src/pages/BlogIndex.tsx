import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo/Seo';
import { organizationLd, breadcrumbLd } from '../lib/seo/jsonLd';
import { SITE_URL } from '../components/seo/siteConfig';
import { Clock, ArrowRight } from 'lucide-react';

export const blogPosts = [
  {
    slug: 'como-atrair-mais-pacientes-para-clinica',
    titulo: 'Como Atrair Mais Pacientes para sua Clínica em 2025',
    resumo: 'Descubra as estratégias de marketing digital mais eficazes para aumentar o fluxo de pacientes na sua clínica médica ou consultório.',
    cover: '/og/clicknex-default.jpg',
    tags: ['clínicas', 'tráfego pago', 'marketing médico'],
    publishedAt: '2025-03-01',
    readingTime: '8 min',
  },
  {
    slug: 'google-ads-para-clinicas-medicas-guia',
    titulo: 'Google Ads para Clínicas Médicas: Guia Completo 2025',
    resumo: 'Tudo que você precisa saber para criar e otimizar campanhas de Google Ads para clínicas, consultórios e hospitais com segurança e resultados.',
    cover: '/og/clicknex-default.jpg',
    tags: ['google ads', 'clínicas', 'tráfego pago'],
    publishedAt: '2025-03-15',
    readingTime: '12 min',
  },
  {
    slug: 'marketing-medico-cfm-anvisa-guia-completo',
    titulo: 'Marketing Médico: O Guia Completo sobre CFM e ANVISA',
    resumo: 'Entenda o que pode e o que não pode no marketing para médicos e clínicas, segundo as normas do CFM e ANVISA. Guia atualizado 2025.',
    cover: '/og/clicknex-default.jpg',
    tags: ['marketing médico', 'cfm', 'anvisa'],
    publishedAt: '2025-03-22',
    readingTime: '10 min',
  },
  {
    slug: 'quanto-custa-anuncio-google-ads',
    titulo: 'Quanto Custa Anunciar no Google Ads? Tudo que Você Precisa Saber',
    resumo: 'Descubra o investimento mínimo, como funciona o leilão de palavras-chave e como maximizar seu ROI no Google Ads em 2025.',
    cover: '/og/clicknex-default.jpg',
    tags: ['google ads', 'investimento', 'roi'],
    publishedAt: '2025-04-01',
    readingTime: '9 min',
  },
  {
    slug: 'automacao-de-marketing-para-pequenas-empresas',
    titulo: 'Automação de Marketing para Pequenas Empresas: Comece Hoje',
    resumo: 'Como pequenas empresas podem usar automação de marketing para nutrir leads, economizar tempo e aumentar vendas sem precisar de uma equipe grande.',
    cover: '/og/clicknex-default.jpg',
    tags: ['automação', 'pequenas empresas', 'leads'],
    publishedAt: '2025-04-08',
    readingTime: '7 min',
  },
  {
    slug: 'seo-local-para-clinicas',
    titulo: 'SEO Local para Clínicas: Apareça no Google Maps e Atraia Pacientes',
    resumo: 'Como otimizar o SEO local da sua clínica para aparecer nas primeiras posições do Google Maps e Google Meu Negócio na sua cidade.',
    cover: '/og/clicknex-default.jpg',
    tags: ['seo local', 'google maps', 'clínicas'],
    publishedAt: '2025-04-09',
    readingTime: '8 min',
  },
];

const BlogIndex = () => (
  <>
    <Seo
      title="Blog | Marketing Digital para Clínicas e Empresas — ClickNex"
      description="Artigos práticos sobre marketing digital, tráfego pago, SEO e automação. Conteúdo focado em clínicas médicas, e-commerce e negócios locais."
      keywords={['blog marketing digital', 'artigos tráfego pago', 'marketing para clínicas', 'seo para empresas']}
      jsonLd={[
        organizationLd(),
        breadcrumbLd([
          { name: 'Home', url: `${SITE_URL}/` },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]),
      ]}
    />
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 to-blue-800 text-white text-center">
        <div className="container-custom">
          <p className="text-blue-300 font-semibold mb-3 uppercase tracking-widest text-sm">Conteúdo Gratuito</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog ClickNex</h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Estratégias práticas de marketing digital para crescer seu negócio.
          </p>
        </div>
      </section>

      {/* Grid de posts */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                  <span className="text-white text-6xl font-black opacity-20">CX</span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-blue-950 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {post.titulo}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.resumo}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readingTime}
                    </span>
                    <span className="flex items-center gap-1 text-blue-700 font-semibold group-hover:gap-2 transition-all">
                      Ler artigo <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>
);

export default BlogIndex;
