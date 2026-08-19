import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck,
  TrendingDown,
  Clock
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('nice');

  return (
    <section id="experience" className="py-20 bg-[#0A0E14] border-t border-[#1D2935] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER_TIMELINE // WORK_EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
            ניסיון תעסוקתי
          </h2>
          <p className="text-[#8EA0B3] text-base mt-2 max-w-2xl">
            למעלה מעשור של הובלת בדיקות במערכות ענן מבוזרות ומערכות תקשורת לוויין רב-תחומיות.
          </p>
          <div className="w-20 h-1 bg-[#49D6C4] mt-3 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-r-2 border-[#1D2935] pr-6 sm:pr-10 space-y-12 mr-2 sm:mr-4">
          
          {EXPERIENCE_DATA.map((exp, index) => {
            const isExpanded = expandedId === exp.id || expandedId === null;
            return (
              <div 
                key={exp.id} 
                className="relative group"
              >
                {/* Timeline Dot Node with pulse */}
                <div className="absolute -right-[31px] sm:-right-[47px] top-1.5 w-6 h-6 rounded-full bg-[#101720] border-2 border-[#49D6C4] flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-[#49D6C4]/30">
                  <span className="w-2 h-2 rounded-full bg-[#3FD17A] animate-pulse"></span>
                </div>

                {/* Experience Card */}
                <div className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl shadow-black/40">
                  
                  {/* Role Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#1D2935] pb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h3 className="text-2xl font-extrabold text-[#E8EEF4] font-sans">
                          {exp.company}
                        </h3>
                        <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40">
                          {exp.role}
                        </span>
                      </div>
                      <div className="text-sm font-mono text-[#8EA0B3] flex items-center gap-2">
                        <span>{exp.department}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                      <div className="flex items-center gap-1.5 bg-[#080C12] px-3 py-1.5 rounded-lg border border-[#1D2935] text-[#F2B544] font-semibold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-[#080C12] px-3 py-1.5 rounded-lg border border-[#1D2935] text-[#8EA0B3]">
                        <MapPin className="w-3.5 h-3.5 text-[#49D6C4]" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="py-4 text-[#E8EEF4] text-base font-medium">
                    {exp.summary}
                  </div>

                  {/* Impact Stats Pills if present */}
                  {exp.impactStats && exp.impactStats.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {exp.impactStats.map((stat, i) => (
                        <div 
                          key={i} 
                          className="bg-[#080C12] p-3 rounded-xl border border-[#1D2935] flex items-center justify-between"
                        >
                          <span className="text-xs text-[#8EA0B3] font-mono">{stat.label}</span>
                          <span className="text-base font-bold font-mono text-[#49D6C4]">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullet achievements list */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-mono text-[#49D6C4] uppercase font-bold tracking-wider">
                      KEY_RESPONSIBILITIES_AND_DELIVERABLES:
                    </div>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-[#E8EEF4] leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-[#49D6C4] shrink-0 mt-1" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-5 border-t border-[#1D2935]">
                    <div className="text-xs font-mono text-[#8EA0B3] mb-2.5">
                      TECH_ENVIRONMENT:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono bg-[#080C12] border border-[#1D2935] rounded text-[#8EA0B3] hover:text-[#49D6C4] hover:border-[#49D6C4]/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
