import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Target,
  BarChart3,
  Heart,
  Activity,
  Menu,
  X,
  MessageCircle,
  Megaphone,
  Lightbulb,
  Globe,
  Bot,
  Code,
  CalendarCheck,
  Stethoscope,
  ClipboardList,
  Bell,
  UserCheck
} from 'lucide-react';

const Clinicas = () => {
  const { toast } = useToast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [whatsappModalOpen, setWhatsappModalOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    clinica: '',
    especialidade: '',
    mensagem: ''
  });
  const [whatsappFormData, setWhatsappFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    clinica: '',
    especialidade: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observeReveal = () => {
      const elements = document.querySelectorAll('.reveal-clinicas');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible-clinicas');
          }
        });
      }, { threshold: 0.1 });
      elements.forEach((el) => observer.observe(el));
      return () => elements.forEach((el) => observer.unobserve(el));
    };
    const timeout = setTimeout(observeReveal, 100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const createParticles = () => {
      const container = document.querySelector('.particles-hero');
      if (!container) return;
      container.innerHTML = '';
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle-dot';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.animationDuration = `${3 + Math.random() * 4}s`;
        container.appendChild(particle);
      }
    };
    createParticles();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um diagnóstico gratuito.%0A%0A*Nome:* ${formData.nome}%0A*E-mail:* ${formData.email}%0A*Telefone:* ${formData.telefone}%0A*Clínica:* ${formData.clinica}%0A*Especialidade:* ${formData.especialidade}${formData.mensagem ? `%0A*Mensagem:* ${formData.mensagem}` : ''}`;
    window.open(`https://wa.me/5535999999999?text=${message}`, '_blank');
    toast({
      title: "Redirecionando para o WhatsApp!",
      description: "Você será atendido em instantes.",
    });
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      clinica: '',
      especialidade: '',
      mensagem: ''
    });
  };

  const resultados = [
    { numero: "340%", descricao: "Aumento médio em agendamentos", icon: <Calendar className="w-8 h-8" /> },
    { numero: "R$2.8M", descricao: "Faturamento gerado para clínicas", icon: <TrendingUp className="w-8 h-8" /> },
    { numero: "127+", descricao: "Clínicas atendidas com sucesso", icon: <Users className="w-8 h-8" /> },
    { numero: "4.9", descricao: "Avaliação média dos clientes", icon: <Star className="w-8 h-8" /> }
  ];

  const servicos = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      titulo: "Tráfego Pago",
      descricao: "Estratégias avançadas de anúncios em Google Ads, Meta Ads e outras plataformas para maximizar seu retorno sobre investimento."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      titulo: "Criação de Criativos",
      descricao: "Design de materiais publicitários impactantes otimizados para conversão que transformam visualizações em vendas reais."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      titulo: "Criação de Sites",
      descricao: "Desenvolvimento de websites responsivos, otimizados para SEO e focados em conversão para fortalecer sua presença digital."
    },
    {
      icon: <Bot className="w-10 h-10" />,
      titulo: "Automação de Marketing",
      descricao: "Sistemas inteligentes que automatizam processos de marketing e nutrem leads até a conversão final, economizando tempo e recursos."
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      titulo: "Gestão de Campanhas",
      descricao: "Gerenciamento estratégico de campanhas publicitárias com análises avançadas e otimização contínua para resultados mensuráveis."
    },
    {
      icon: <Code className="w-10 h-10" />,
      titulo: "Produtos Validados",
      descricao: "Desenvolvimento e validação de produtos digitais com base em pesquisa de mercado, análise de dados e testes com usuários reais."
    },
    {
      icon: <CalendarCheck className="w-10 h-10" />,
      titulo: "Sistema de Agendamentos",
      descricao: "Plataforma completa de agendamento online para médicos e clínicas, com confirmação automática, lembretes e gestão de agenda integrada."
    }
  ];

  const depoimentos = [
    {
      nome: "Dra. Marina Santos",
      cargo: "Dermatologista - Clínica Derma Care",
      texto: "Em 3 meses, triplicamos o número de consultas. A equipe entende perfeitamente as particularidades do marketing médico e respeita todas as normas do CFM.",
      avatar: "MS"
    },
    {
      nome: "Dr. Ricardo Oliveira",
      cargo: "Ortopedista - Instituto Ortho Plus",
      texto: "O retorno sobre investimento superou todas as expectativas. Hoje temos uma agenda cheia e pacientes qualificados que realmente precisam dos nossos serviços.",
      avatar: "RO"
    },
    {
      nome: "Dra. Camila Ferreira",
      cargo: "Ginecologista - Centro Médico Vida",
      texto: "Profissionalismo e resultados reais. A transparência nos relatórios e o suporte dedicado fazem toda a diferença para quem não tem tempo de acompanhar tudo.",
      avatar: "CF"
    }
  ];

  const diferenciais = [
    { icon: <Shield className="w-6 h-6" />, texto: "Conformidade total com normas do CFM e ANVISA" },
    { icon: <Clock className="w-6 h-6" />, texto: "Suporte dedicado em horário comercial" },
    { icon: <Target className="w-6 h-6" />, texto: "Estratégias personalizadas por especialidade" },
    { icon: <BarChart3 className="w-6 h-6" />, texto: "Relatórios transparentes e métricas claras" }
  ];

  const especialidades = [
    "Dermatologia",
    "Ortopedia",
    "Cardiologia",
    "Ginecologia",
    "Pediatria",
    "Oftalmologia",
    "Odontologia",
    "Psiquiatria",
    "Nutrição",
    "Fisioterapia",
    "Clínica Geral",
    "Outra"
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(30, 64, 175, 0.3); }
          50% { box-shadow: 0 0 40px rgba(30, 64, 175, 0.6); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .particle-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float-particle 4s ease-in-out infinite;
        }
        .reveal-clinicas {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-visible-clinicas {
          opacity: 1;
          transform: translateY(0);
        }
        .card-hover-3d {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .card-hover-3d:hover {
          transform: translateY(-8px) rotateX(2deg);
          box-shadow: 0 25px 50px -12px rgba(30, 64, 175, 0.25);
        }
        .gradient-text {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #1e40af 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 3s ease infinite;
        }
        .glow-button {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .whatsapp-float {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        .hero-animate {
          animation: slide-up 1s ease-out forwards;
        }
        .hero-animate-delay-1 {
          animation: slide-up 1s ease-out 0.2s forwards;
          opacity: 0;
        }
        .hero-animate-delay-2 {
          animation: slide-up 1s ease-out 0.4s forwards;
          opacity: 0;
        }
        .hero-animate-delay-3 {
          animation: slide-up 1s ease-out 0.6s forwards;
          opacity: 0;
        }
        .form-animate {
          animation: slide-in-right 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .stat-card {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .parallax-slow {
          transition: transform 0.3s ease-out;
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-card-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .floating-stat {
          animation: float-card 4s ease-in-out infinite;
        }
        .floating-stat-delayed {
          animation: float-card-delayed 4s ease-in-out 1s infinite;
        }
        .floating-stat-delayed-2 {
          animation: float-card 4s ease-in-out 2s infinite;
        }
      `}</style>

      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={() => setWhatsappModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all duration-300 whatsapp-float hover:scale-110"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>

      {/* Modal WhatsApp com Formulário */}
      {whatsappModalOpen && (
        <>
          <div 
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            onClick={() => setWhatsappModalOpen(false)}
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-[scale-in_0.2s_ease-out] overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 relative">
                <button 
                  onClick={() => setWhatsappModalOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Diagnóstico Gratuito</h3>
                    <p className="text-green-100 text-sm">Descubra o potencial de crescimento da sua clínica</p>
                  </div>
                </div>
              </div>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const message = `Olá! Gostaria de solicitar um diagnóstico gratuito.%0A%0A*Nome:* ${whatsappFormData.nome}%0A*E-mail:* ${whatsappFormData.email}%0A*Telefone:* ${whatsappFormData.telefone}%0A*Clínica:* ${whatsappFormData.clinica}%0A*Especialidade:* ${whatsappFormData.especialidade}`;
                  window.open(`https://wa.me/5535999999999?text=${message}`, '_blank');
                  setWhatsappModalOpen(false);
                  setWhatsappFormData({ nome: '', email: '', telefone: '', clinica: '', especialidade: '' });
                  toast({
                    title: "Redirecionando para o WhatsApp!",
                    description: "Você será atendido em instantes.",
                  });
                }}
                className="p-5 space-y-4"
              >
                <div>
                  <Input
                    placeholder="Seu nome completo"
                    value={whatsappFormData.nome}
                    onChange={(e) => setWhatsappFormData(prev => ({ ...prev, nome: e.target.value }))}
                    required
                    className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={whatsappFormData.email}
                    onChange={(e) => setWhatsappFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                  <Input
                    type="tel"
                    placeholder="WhatsApp com DDD"
                    value={whatsappFormData.telefone}
                    onChange={(e) => setWhatsappFormData(prev => ({ ...prev, telefone: e.target.value }))}
                    required
                    className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <Input
                    placeholder="Nome da clínica ou consultório"
                    value={whatsappFormData.clinica}
                    onChange={(e) => setWhatsappFormData(prev => ({ ...prev, clinica: e.target.value }))}
                    required
                    className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                
                <div>
                  <select
                    value={whatsappFormData.especialidade}
                    onChange={(e) => setWhatsappFormData(prev => ({ ...prev, especialidade: e.target.value }))}
                    required
                    className="w-full h-12 px-3 border border-gray-200 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none text-gray-700 bg-white"
                  >
                    <option value="">Selecione a especialidade</option>
                    {especialidades.map((esp, index) => (
                      <option key={index} value={esp}>{esp}</option>
                    ))}
                  </select>
                </div>
                
                <Button type="submit" className="w-full h-12 bg-green-500 hover:bg-green-600 text-white text-base font-semibold rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quero Meu Diagnóstico Gratuito
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  Ao enviar, você concorda com nossa política de privacidade. 
                  Seus dados estão seguros e não serão compartilhados.
                </p>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="container-custom">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-lg rounded-full px-6 py-2' 
              : 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2'
          }`}>
            <a href="/" className="flex items-center group">
              <img 
                src="/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png"
                alt="ClickNex Logo" 
                className={`h-9 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${isScrolled ? '' : 'brightness-0 invert'}`}
              />
              <span className={`text-base font-bold ml-2 transition-colors duration-300 ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                para Clínicas
              </span>
            </a>
            
            {/* Links centrais em container pill */}
            <div className={`hidden md:flex items-center rounded-full px-2 py-1 ${
              isScrolled ? 'bg-gray-100' : 'bg-white/10'
            }`}>
              <a href="#resultados" className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:bg-white hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}>Resultados</a>
              <a href="#servicos" className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:bg-white hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}>Serviços</a>
              <a href="#agendamentos" className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:bg-white hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}>Agendamentos</a>
              <a href="#depoimentos" className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${isScrolled ? 'text-gray-700 hover:bg-white hover:text-blue-600' : 'text-white/90 hover:bg-white/20 hover:text-white'}`}>Depoimentos</a>
            </div>
            
            <div className="hidden md:block">
              <a href="#contato">
                <Button className="bg-blue-900 text-white hover:bg-blue-800 rounded-full px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Falar com Especialista
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            {/* Overlay escuro */}
            <div 
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Menu dropdown elegante */}
            <div className="md:hidden fixed top-20 left-4 right-4 z-50 bg-white rounded-2xl shadow-2xl animate-[scale-in_0.2s_ease-out] overflow-hidden">
              <div className="p-5">
                <div className="flex flex-col space-y-1">
                  <a href="#resultados" className="flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <BarChart3 className="w-5 h-5 mr-3 text-blue-600" />
                    Resultados
                  </a>
                  <a href="#servicos" className="flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Target className="w-5 h-5 mr-3 text-blue-600" />
                    Serviços
                  </a>
                  <a href="#agendamentos" className="flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <CalendarCheck className="w-5 h-5 mr-3 text-blue-600" />
                    Agendamentos
                  </a>
                  <a href="#depoimentos" className="flex items-center text-base font-medium text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-all py-3 px-4 rounded-xl" onClick={() => setMobileMenuOpen(false)}>
                    <Star className="w-5 h-5 mr-3 text-blue-600" />
                    Depoimentos
                  </a>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-xl py-3">
                      Falar com Especialista
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-28 sm:pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        {/* Partículas animadas */}
        <div className="particles-hero absolute inset-0 pointer-events-none"></div>
        
        {/* Elementos decorativos com parallax */}
        <div 
          className="absolute -right-32 -top-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl parallax-slow"
          style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute -left-32 -bottom-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl parallax-slow"
          style={{ transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)` }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
        
        {/* Linhas decorativas */}
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-blue-400/30 via-transparent to-blue-400/30"></div>
        
        {/* Métricas Flutuantes - Posicionadas nas laterais para não sobrepor conteúdo */}
        <div className="hidden xl:block absolute left-[45%] bottom-8 floating-stat z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-gray-500 text-xs">Receita Mensal</p>
              <p className="text-base font-bold text-gray-900">+42%</p>
            </div>
          </div>
        </div>
        
        <div className="hidden xl:block absolute right-6 top-28 floating-stat-delayed z-20">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-3 flex items-center gap-2">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-gray-900 font-medium text-sm">Novo Agendamento</p>
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <div className="hero-animate inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                <Heart className="w-4 h-4 mr-2 text-red-400 animate-pulse" />
                <span className="text-sm font-medium">Marketing Digital para Área da Saúde</span>
              </div>
              
              <h1 className="hero-animate-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Aumente os Agendamentos da Sua Clínica em até{' '}
                <span className="gradient-text">340%</span>
              </h1>
              
              <p className="hero-animate-delay-2 text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
                Estratégias de marketing digital desenvolvidas exclusivamente para clínicas e consultórios médicos. 
                Resultados comprovados, conformidade com o CFM e ROI mensurável.
              </p>
              
              <div className="hero-animate-delay-3 flex flex-col sm:flex-row gap-4 mb-10">
                <a href="#contato" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 glow-button transition-all duration-300 hover:scale-105">
                    Solicitar Diagnóstico Gratuito
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
              
              <div className="hero-animate-delay-3 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
                {diferenciais.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex items-center text-blue-200">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0" />
                    <span className="text-sm">{item.texto}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Formulário Hero */}
            <div className="form-animate bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
              <div className="text-center mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Diagnóstico Gratuito</h2>
                <p className="text-gray-600 text-sm sm:text-base">Descubra o potencial de crescimento da sua clínica</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <Input
                    name="nome"
                    placeholder="Seu nome completo"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  />
                  <Input
                    name="telefone"
                    type="tel"
                    placeholder="WhatsApp com DDD"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                    className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <Input
                    name="clinica"
                    placeholder="Nome da clínica ou consultório"
                    value={formData.clinica}
                    onChange={handleInputChange}
                    required
                    className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <select
                    name="especialidade"
                    value={formData.especialidade}
                    onChange={handleInputChange}
                    required
                    className="w-full h-11 sm:h-12 px-3 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-gray-700 bg-white transition-all duration-300"
                  >
                    <option value="">Selecione a especialidade</option>
                    {especialidades.map((esp, index) => (
                      <option key={index} value={esp}>{esp}</option>
                    ))}
                  </select>
                </div>
                
                <Button type="submit" className="w-full h-11 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  Quero Meu Diagnóstico Gratuito
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  Ao enviar, você concorda com nossa política de privacidade. 
                  Seus dados estão seguros e não serão compartilhados.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section id="resultados" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 reveal-clinicas">
            <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm">Resultados Comprovados</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Números que Falam por Si
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Métricas reais de clínicas que transformaram sua captação de pacientes com nossas estratégias
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {resultados.map((item, index) => (
              <div 
                key={index} 
                className="reveal-clinicas card-hover-3d bg-white rounded-xl p-4 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 text-blue-600 rounded-full mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{item.numero}</div>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 reveal-clinicas">
            <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm">Nossos Serviços</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluções Completas para Clínicas
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Estratégias desenvolvidas especificamente para o setor de saúde, respeitando todas as normas éticas
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicos.map((servico, index) => (
              <div 
                key={index}
                className={`reveal-clinicas group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 sm:p-8 hover:from-blue-50 hover:to-white transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:shadow-xl card-hover-3d ${index === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-600 mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-500">
                  {servico.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{servico.titulo}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{servico.descricao}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl p-6 sm:p-8 lg:p-12 reveal-clinicas relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]"></div>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="text-white">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                  Por que clínicas escolhem a ClickNex?
                </h3>
                <p className="text-blue-100 mb-6 text-base sm:text-lg">
                  Entendemos as particularidades do marketing médico e trabalhamos em total conformidade com as diretrizes do Conselho Federal de Medicina.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {diferenciais.map((item, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3 group-hover/item:bg-white/30 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <span className="text-xs sm:text-sm text-blue-50">{item.texto}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <a href="#contato">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Agendar Reunião Estratégica
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de Agendamentos Section */}
      <section id="agendamentos" className="py-16 sm:py-20 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-clinicas">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                <CalendarCheck className="w-4 h-4 mr-2 text-blue-300" />
                <span className="text-sm font-medium text-white">Sistema Exclusivo</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                Sistema de Agendamentos para Médicos e Clínicas
              </h2>
              
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                Plataforma completa de agendamento online desenvolvida especificamente para profissionais da saúde. 
                Automatize sua agenda e nunca mais perca um paciente.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Lembretes Automáticos</p>
                    <p className="text-blue-200 text-sm">SMS e WhatsApp para reduzir faltas em até 70%</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <ClipboardList className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Gestão de Agenda Integrada</p>
                    <p className="text-blue-200 text-sm">Visualize e gerencie todos os agendamentos em um só lugar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Confirmação Automática</p>
                    <p className="text-blue-200 text-sm">Pacientes confirmam presença com um clique</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Multi-Especialidades</p>
                    <p className="text-blue-200 text-sm">Configure diferentes tipos de consulta e procedimentos</p>
                  </div>
                </div>
              </div>
              
              <a href="#contato">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Conhecer o Sistema
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
            
            <div className="reveal-clinicas relative">
              {/* Dashboard Preview Mockup */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-blue-600 px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="ml-2 text-white text-sm font-medium">Sistema de Agendamentos</span>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Maria Silva</p>
                          <p className="text-xs text-gray-500">Consulta - 09:00</p>
                        </div>
                      </div>
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Confirmado</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">João Santos</p>
                          <p className="text-xs text-gray-500">Retorno - 10:30</p>
                        </div>
                      </div>
                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Aguardando</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Ana Costa</p>
                          <p className="text-xs text-gray-500">Exame - 14:00</p>
                        </div>
                      </div>
                      <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded-full">Novo</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 floating-stat">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Taxa de Presença</p>
                    <p className="font-bold text-gray-900">94%</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 floating-stat-delayed">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Agendamentos Hoje</p>
                    <p className="font-bold text-gray-900">24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12 sm:mb-16 reveal-clinicas">
            <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm">Depoimentos</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Histórias reais de médicos e gestores que transformaram suas clínicas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {depoimentos.map((depoimento, index) => (
              <div 
                key={index}
                className="reveal-clinicas bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 card-hover-3d"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic text-sm sm:text-base">"{depoimento.texto}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-4 text-sm sm:text-base">
                    {depoimento.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{depoimento.nome}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{depoimento.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Formulário Section */}
      <section id="contato" className="py-16 sm:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            <div className="reveal-clinicas">
              <p className="text-blue-600 font-semibold mb-3 uppercase tracking-wide text-sm">Vamos Conversar</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pronto para Transformar sua Clínica?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
                Agende uma consultoria gratuita e descubra como podemos aumentar o número de pacientes da sua clínica de forma ética e sustentável.
              </p>
              
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Telefone / WhatsApp</p>
                    <p className="text-gray-600 text-sm sm:text-base">(35) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">E-mail</p>
                    <p className="text-gray-600 text-sm sm:text-base">comercial@clicknex.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Endereço</p>
                    <p className="text-gray-600 text-sm sm:text-base">R. Comandante Nelio, 299<br />Jardim Floresta - CEP: 37.206-656<br />Lavras - MG</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 sm:p-6 border border-blue-200">
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">Compromisso com a Ética</span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Todas as nossas estratégias são desenvolvidas em conformidade com as resoluções do CFM, 
                  garantindo que sua clínica mantenha a credibilidade e reputação intactas.
                </p>
              </div>
            </div>
            
            {/* Formulário Completo */}
            <div className="reveal-clinicas bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Solicite seu Diagnóstico</h3>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Preencha o formulário e receba uma análise personalizada</p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                    <Input
                      name="nome"
                      placeholder="Dr(a). João Silva"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail profissional</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="contato@clinica.com.br"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                    <Input
                      name="telefone"
                      type="tel"
                      placeholder="(35) 99999-9999"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome da clínica</label>
                    <Input
                      name="clinica"
                      placeholder="Clínica Exemplo"
                      value={formData.clinica}
                      onChange={handleInputChange}
                      required
                      className="h-11 sm:h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Especialidade principal</label>
                  <select
                    name="especialidade"
                    value={formData.especialidade}
                    onChange={handleInputChange}
                    required
                    className="w-full h-11 sm:h-12 px-3 border border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 focus:outline-none text-gray-700 bg-white transition-all duration-300"
                  >
                    <option value="">Selecione uma especialidade</option>
                    {especialidades.map((esp, index) => (
                      <option key={index} value={esp}>{esp}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Como podemos ajudar? (opcional)</label>
                  <Textarea
                    name="mensagem"
                    placeholder="Conte um pouco sobre sua clínica e seus objetivos..."
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>
                
                <Button type="submit" className="w-full h-12 sm:h-14 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  Enviar Solicitação
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <p className="text-xs text-center text-gray-500">
                  Respeitamos sua privacidade. Seus dados são protegidos e utilizados apenas para contato comercial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-12 sm:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/61e09eab-7455-483f-aa3e-e6fee0f382f7.png"
                  alt="ClickNex Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert" 
                />
                <span className="text-lg sm:text-xl font-bold ml-3">para Clínicas</span>
              </div>
              <p className="text-blue-300 mb-6 max-w-md text-sm sm:text-base">
                Especialistas em marketing digital para a área da saúde. 
                Ajudamos clínicas e consultórios a crescerem de forma ética e sustentável.
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-4 sm:p-5 border border-blue-800">
                <p className="font-semibold text-white mb-2 text-sm sm:text-base">BERTINI E MEIRELES SERVIÇOS LTDA</p>
                <p className="text-blue-300 text-xs sm:text-sm">CNPJ: 61.754.617/0001-97</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Links Rápidos</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#resultados" className="text-blue-300 hover:text-white transition-colors text-sm sm:text-base">Resultados</a></li>
                <li><a href="#servicos" className="text-blue-300 hover:text-white transition-colors text-sm sm:text-base">Serviços</a></li>
                <li><a href="#depoimentos" className="text-blue-300 hover:text-white transition-colors text-sm sm:text-base">Depoimentos</a></li>
                <li><a href="#contato" className="text-blue-300 hover:text-white transition-colors text-sm sm:text-base">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-sm sm:text-base">Contato</h4>
              <ul className="space-y-2 sm:space-y-3 text-blue-300 text-xs sm:text-sm">
                <li className="flex items-start">
                  <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>comercial@clicknex.com.br</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>R. Comandante Nelio, 299<br />Jardim Floresta<br />CEP: 37.206-656<br />Lavras - MG</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-400 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} ClickNex - BERTINI E MEIRELES SERVIÇOS LTDA. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="#" className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-blue-400 hover:text-white text-xs sm:text-sm transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Clinicas;
