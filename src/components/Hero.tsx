import React from 'react';
import { 
  Send, 
  FileDown, 
  Linkedin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Layers, 
  Cloud,
  ChevronDown
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DoronAvatar } from './DoronAvatar';
import { HeroConsole } from './HeroConsole';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const techBadges = [
    'Playwright',
    'Selenium',
    'Python',
    'API',
    'AWS',
    'SQL',
    'CI/CD'
  ];

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 right-5 w-80 h-80 bg-[#49D6C4]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-5 w-80 h-80 bg-[#F2B544]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Main Bio Bento Card (Span 8 on desktop) */}
          <div className="lg:col-span-8 flex flex-col space-y-4">
            
            {/* Primary Bio Card */}
            <div className="bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#49D6C4] opacity-5 blur-[120px] pointer-events-none"></div>
              
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1D2935] border border-[#49D6C4]/20 text-xs font-mono text-[#49D6C4]">
                    <span className="w-2 h-2 rounded-full bg-[#3FD17A] animate-pulse"></span>
                    <span>SENIOR QA &amp; AUTOMATION ENGINEER</span>
                  </div>
                  <span className="text-xs font-mono text-[#8EA0B3]">12+ שנות ניסיון</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight text-[#E8EEF4] font-sans">
                  {PERSONAL_INFO.name.he}
                </h1>
                
                <h2 className="text-[#49D6C4] text-xl sm:text-2xl font-mono mb-4 font-semibold">
                  Senior QA Engineer
                </h2>

                <p className="text-[#8EA0B3] text-base sm:text-lg max-w-2xl leading-relaxed">
                  {PERSONAL_INFO.heroSub.he}
                </p>

                {/* Tech Pills (Bento style) */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {techBadges.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-[#1D2935] text-[#49D6C4] px-3 py-1 rounded text-xs font-mono border border-[#49D6C4]/20 hover:border-[#49D6C4]/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Card */}
              <div className="flex flex-wrap items-center gap-3 pt-6 mt-4 border-t border-[#1D2935]">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                  className="bg-[#49D6C4] text-[#080C12] font-bold px-5 py-2.5 rounded-lg text-xs font-mono hover:brightness-110 transition-all flex items-center gap-2 shadow-md shadow-[#49D6C4]/20 hover:scale-105 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>צור קשר</span>
                </a>

                <button
                  onClick={onOpenResumeModal}
                  className="border border-[#1D2935] bg-[#101720] hover:bg-[#1D2935] text-white px-5 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#49D6C4]" />
                  <span>הורד קורות חיים</span>
                </button>

                <a
                  href="https://www.linkedin.com/in/doron-cohen-qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#1D2935] bg-[#101720] hover:bg-[#1D2935] text-[#8EA0B3] hover:text-[#E8EEF4] px-4 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>

                <a
                  href="tel:0546997207"
                  className="border border-[#1D2935] bg-[#101720] hover:bg-[#1D2935] text-[#F2B544] px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="text-xs">054-6997207</span>
                </a>
              </div>

            </div>

            {/* QA Interactive Terminal Console Bento Tile */}
            <div className="flex-1">
              <HeroConsole />
            </div>

          </div>

          {/* Side Bento Column (Span 4 on desktop) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            
            {/* Profile Avatar Card */}
            <div className="bento-card p-6 flex flex-col items-center text-center justify-center">
              <div className="mb-4">
                <DoronAvatar size="md" showBadge={false} />
              </div>

              <h3 className="text-xl font-bold mb-0.5 text-[#E8EEF4] font-sans">
                {PERSONAL_INFO.name.he}
              </h3>
              <p className="text-[#8EA0B3] text-xs mb-4 font-mono">
                Senior QA &amp; Automation Expert
              </p>

              <div className="w-full space-y-2">
                <button 
                  onClick={onOpenResumeModal}
                  className="w-full bg-[#49D6C4] text-[#080C12] font-bold py-2.5 rounded-lg text-xs font-mono hover:brightness-110 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-[#49D6C4]/20"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>הורד קורות חיים (PDF)</span>
                </button>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
                  className="w-full border border-[#1D2935] bg-[#080C12] text-white py-2 rounded-lg text-xs font-mono hover:bg-[#1D2935] transition-all flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-[#49D6C4]" />
                  <span>צור קשר עכשיו</span>
                </a>
              </div>
            </div>

            {/* 4 Quick Bento Stat Tiles */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bento-card p-4 text-center">
                <div className="text-2xl font-bold font-mono text-[#49D6C4]">+12</div>
                <div className="text-[10px] text-[#8EA0B3] uppercase tracking-wider font-mono mt-1">שנות ניסיון</div>
              </div>
              <div className="bento-card p-4 text-center">
                <div className="text-2xl font-bold font-mono text-[#F2B544]">95%</div>
                <div className="text-[10px] text-[#8EA0B3] uppercase tracking-wider font-mono mt-1">כיסוי בדיקות</div>
              </div>
              <div className="bento-card p-4 text-center">
                <div className="text-2xl font-bold font-mono text-[#3FD17A]">-30%</div>
                <div className="text-[10px] text-[#8EA0B3] uppercase tracking-wider font-mono mt-1">באגים ב-Prod</div>
              </div>
              <div className="bento-card p-4 text-center">
                <div className="text-2xl font-bold font-mono text-[#49D6C4]">-40%</div>
                <div className="text-[10px] text-[#8EA0B3] uppercase tracking-wider font-mono mt-1">זמן ריצה</div>
              </div>
            </div>

            {/* Recent Experience Bento Tile */}
            <div className="bento-card p-5 flex-1 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-[#8EA0B3] text-xs font-bold font-mono uppercase tracking-widest">
                    Recent Experience
                  </h4>
                  <span className="text-[10px] font-mono text-[#49D6C4]">Verified</span>
                </div>

                <div className="space-y-4 relative text-right">
                  <div className="border-r-2 border-[#1D2935] pr-4 relative">
                    <div className="absolute -right-[7px] top-1 w-3 h-3 rounded-full bg-[#49D6C4] shadow-[0_0_8px_#49D6C4]"></div>
                    <h5 className="font-bold text-sm text-[#E8EEF4]">NICE Systems</h5>
                    <p className="text-[#49D6C4] text-xs font-mono">Senior QA Engineer</p>
                    <p className="text-[#8EA0B3] text-[10px] font-mono">2020 – 2026</p>
                  </div>

                  <div className="border-r-2 border-[#1D2935] pr-4 relative opacity-80">
                    <div className="absolute -right-[7px] top-1 w-3 h-3 rounded-full bg-[#8EA0B3]"></div>
                    <h5 className="font-bold text-sm text-[#E8EEF4]">Gilat Satellite</h5>
                    <p className="text-[#49D6C4] text-xs font-mono">Senior QA Engineer</p>
                    <p className="text-[#8EA0B3] text-[10px] font-mono">2011 – 2019</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 mt-4 border-t border-[#1D2935] flex items-center justify-between text-[11px] font-mono text-[#5D6F82]">
                <span>Status: Available Immediately</span>
                <span className="text-[#3FD17A]">● Open</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
