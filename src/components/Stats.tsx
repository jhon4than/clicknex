
import React, { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [end, duration, isVisible]);

  return <div ref={countRef}>{count}{suffix}</div>;
};

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-950 py-20 relative overflow-hidden">
      {/* Elementos tecnológicos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="tech-dot" style={{top: '10%', left: '15%'}}></div>
        <div className="tech-dot" style={{top: '30%', left: '45%'}}></div>
        <div className="tech-dot" style={{top: '70%', left: '75%'}}></div>
        <div className="tech-dot" style={{top: '20%', right: '10%'}}></div>
        <div className="tech-dot" style={{top: '60%', right: '30%'}}></div>
        
        <div className="tech-line" style={{top: '30%', left: 0, right: 0}}></div>
        <div className="tech-line" style={{top: '70%', left: 0, right: 0}}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div className="bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal">
            <div className="text-5xl font-bold mb-2 text-white">
              <CountUp end={500} suffix="+" />
            </div>
            <p className="text-blue-200 font-medium">Campanhas Realizadas</p>
          </div>
          
          <div className="bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="text-5xl font-bold mb-2 text-white">
              <CountUp end={2} suffix="M+" />
            </div>
            <p className="text-blue-200 font-medium">Leads Gerados</p>
          </div>
          
          <div className="bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="text-5xl font-bold mb-2 text-white">
              <CountUp end={15} suffix="M+" />
            </div>
            <p className="text-blue-200 font-medium">ROI Gerado</p>
          </div>
          
          <div className="bg-blue-800/20 p-6 rounded-lg backdrop-blur-sm text-center reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="text-5xl font-bold mb-2 text-white">
              <CountUp end={98} suffix="%" />
            </div>
            <p className="text-blue-200 font-medium">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
