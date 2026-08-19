import React, { useState, useEffect, useRef } from 'react';
import { KEY_METRICS } from '../data/portfolioData';
import { ShieldCheck, CodeXml, BugOff, Zap, TrendingUp, Check } from 'lucide-react';

export const Metrics: React.FC = () => {
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    years: 0,
    coverage: 0,
    bug_reduction: 0,
    exec_speed: 0
  });
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#49D6C4]" />;
      case 'CodeXml': return <CodeXml className="w-6 h-6 text-[#49D6C4]" />;
      case 'BugOff': return <BugOff className="w-6 h-6 text-[#F2B544]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#49D6C4]" />;
      default: return <TrendingUp className="w-6 h-6 text-[#49D6C4]" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          const duration = 1800; // ms
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            setCounts({
              years: Math.min(12, Math.round(easeProgress * 12)),
              coverage: Math.min(95, Math.round(easeProgress * 95)),
              bug_reduction: Math.min(30, Math.round(easeProgress * 30)),
              exec_speed: Math.min(40, Math.round(easeProgress * 40))
            });

            if (frame === totalFrames) {
              clearInterval(timer);
              setCounts({
                years: 12,
                coverage: 95,
                bug_reduction: 30,
                exec_speed: 40
              });
            }
          }, frameDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="metrics" ref={sectionRef} className="py-12 bg-[#0A0E14] border-y border-[#1D2935] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Label */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#49D6C4] rounded-sm"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#49D6C4]">
              KEY_QA_IMPACT_METRICS // PROVEN_RESULTS
            </span>
          </div>
          <span className="font-mono text-xs text-[#8EA0B3] hidden sm:inline">
            Verified across NICE Systems &amp; Gilat
          </span>
        </div>

        {/* 4 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_METRICS.map((metric) => {
            const countValue = counts[metric.id] ?? 0;
            return (
              <div 
                key={metric.id}
                className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-xl p-6 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60"
              >
                {/* Subtle top indicator line */}
                <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#49D6C4]/30 to-transparent group-hover:via-[#49D6C4] transition-all"></div>

                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#080C12] border border-[#1D2935] rounded-lg group-hover:border-[#49D6C4]/40 transition-colors">
                    {getIcon(metric.iconName)}
                  </div>
                  <span className="text-[10px] font-mono text-[#5D6F82] group-hover:text-[#49D6C4] transition-colors">
                    SYS_METRIC
                  </span>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#E8EEF4] group-hover:text-[#49D6C4] transition-colors tracking-tight">
                    {countValue}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#49D6C4]">
                    {metric.suffix}
                  </span>
                </div>

                <div className="mt-2 text-base font-bold text-[#E8EEF4] font-sans">
                  {metric.label}
                </div>

                <p className="mt-1 text-xs text-[#8EA0B3] leading-relaxed">
                  {metric.sublabel}
                </p>

                {/* Progress bar line indicator */}
                <div className="w-full bg-[#080C12] h-1.5 rounded-full mt-4 overflow-hidden border border-[#1D2935]">
                  <div 
                    className="h-full bg-gradient-to-r from-[#49D6C4] to-[#F2B544] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${hasAnimated ? (metric.id === 'years' ? 100 : metric.number) : 0}%` }}
                  ></div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
