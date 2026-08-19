import React from 'react';
import { ArrowUp, Terminal, ShieldCheck, Heart, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080C] border-t border-[#1D2935] text-xs font-mono text-[#8EA0B3] relative">
      
      {/* QA Status Bar Top Strip */}
      <div className="border-b border-[#1D2935] py-3 bg-[#080C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#3FD17A]">
              <span className="w-2 h-2 rounded-full bg-[#3FD17A] animate-ping"></span>
              <span>TEST EXECUTION: 100% PASS</span>
            </span>
            <span className="text-[#5D6F82]">|</span>
            <span className="text-[#8EA0B3]">BUILD #2026.08.19</span>
            <span className="text-[#5D6F82]">|</span>
            <span className="text-[#49D6C4]">ENV: PRODUCTION</span>
            <span className="text-[#5D6F82] hidden sm:inline">|</span>
            <span className="text-[#8EA0B3] hidden sm:inline">COVERAGE: 95%</span>
          </div>

          <div className="flex items-center gap-2 text-[#F2B544]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>QUALITY GATE: APPROVED FOR PRODUCTION</span>
          </div>
        </div>
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">
          
          <div>
            <div className="font-bold text-base text-[#E8EEF4] font-sans flex items-center justify-center md:justify-start gap-2">
              <span>דורון כהן</span>
              <span className="text-[#49D6C4] font-mono text-xs">{'//'} Senior QA Engineer</span>
            </div>
            <p className="text-xs text-[#8EA0B3] mt-1 font-sans">
              12+ שנות מצוינות בהנדסת איכות, אוטומציה ובדיקות מערכות ענן ו-Microservices.
            </p>
          </div>

          {/* Quick links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-lg bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4] text-[#8EA0B3] hover:text-[#49D6C4] transition-colors"
              title="שלח אימייל"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-lg bg-[#101720] border border-[#1D2935] hover:border-[#F2B544] text-[#8EA0B3] hover:text-[#F2B544] transition-colors"
              title="התקשר"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-[#101720] border border-[#1D2935] hover:border-[#0077B5] text-[#8EA0B3] hover:text-[#0077B5] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4] text-[#E8EEF4] hover:text-[#49D6C4] transition-colors"
              title="חזור למעלה"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#49D6C4]" />
              <span className="text-xs">למעלה</span>
            </button>
          </div>

        </div>

        <div className="border-t border-[#1D2935] mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#5D6F82]">
          <div>
            © {new Date().getFullYear()} דורון כהן · כל הזכויות שמורות
          </div>
          <div className="flex items-center gap-1">
            <span>QA Engineered with React, TypeScript &amp; Tailwind</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
