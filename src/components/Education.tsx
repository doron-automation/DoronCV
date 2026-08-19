import React from 'react';
import { EDUCATION_DATA, MILITARY_BACKGROUND } from '../data/portfolioData';
import { Certifications } from './Certifications';
import { 
  GraduationCap, 
  Terminal, 
  Network, 
  ShieldAlert, 
  Globe2, 
  CheckCircle2, 
  BookOpen,
  Award
} from 'lucide-react';

export const Education: React.FC = () => {
  const getEduIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#49D6C4]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#F2B544]" />;
      case 'Network': return <Network className="w-6 h-6 text-[#49D6C4]" />;
      default: return <BookOpen className="w-6 h-6 text-[#49D6C4]" />;
    }
  };

  return (
    <section id="education" className="py-20 bg-[#0A0E14] border-t border-[#1D2935] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC_BACKGROUND // CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
            השכלה והסמכות
          </h2>
          <p className="text-[#8EA0B3] text-base mt-2 max-w-2xl">
            תואר אקדמי במדעי המחשב לצד הסמכות בינלאומיות בבדיקות תוכנה, אוטומציה ורשתות.
          </p>
          <div className="w-20 h-1 bg-[#49D6C4] mt-3 rounded-full"></div>
        </div>

        {/* Certifications Highlight */}
        <Certifications />

        {/* Formal Education Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#E8EEF4] flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#49D6C4]" />
              <span>לימודים אקדמיים והכשרות מקצועיות</span>
            </h3>
            <span className="text-xs font-mono text-[#8EA0B3]">Academic &amp; Intensive Training</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#080C12] border border-[#1D2935] rounded-xl group-hover:border-[#49D6C4]/40 transition-colors">
                    {getEduIcon(edu.icon)}
                  </div>
                  <span className="text-[10px] font-mono text-[#8EA0B3]">
                    {edu.field}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#E8EEF4] group-hover:text-[#49D6C4] transition-colors mb-1 font-sans">
                  {edu.degree}
                </h4>

                <div className="text-xs font-mono text-[#49D6C4] mb-3">
                  {edu.institution}
                </div>

                <p className="text-xs text-[#8EA0B3] leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Military Background & Languages Two-Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Military Service */}
          <div className="bg-[#101720] border border-[#1D2935] rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center gap-3 border-b border-[#1D2935] pb-4 mb-4">
              <div className="p-2.5 bg-[#080C12] border border-[#1D2935] rounded-xl text-[#F2B544]">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#E8EEF4] font-sans">
                  {MILITARY_BACKGROUND.title.he}
                </h4>
                <div className="text-xs font-mono text-[#49D6C4]">
                  {MILITARY_BACKGROUND.branch.he}
                </div>
              </div>
            </div>

            <p className="text-xs text-[#8EA0B3] leading-relaxed">
              {MILITARY_BACKGROUND.details.he}
            </p>
          </div>

          {/* Languages & Soft Skills */}
          <div className="bg-[#101720] border border-[#1D2935] rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 border-b border-[#1D2935] pb-4">
              <div className="p-2.5 bg-[#080C12] border border-[#1D2935] rounded-xl text-[#49D6C4]">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-[#E8EEF4] font-sans">
                  שפות וכישורים אישיים
                </h4>
                <div className="text-xs font-mono text-[#8EA0B3]">
                  Communication &amp; Teamwork
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-[#080C12] rounded-xl border border-[#1D2935]">
                <span className="text-[#8EA0B3] block">עברית:</span>
                <span className="text-[#E8EEF4] font-bold text-sm">שפת אם (Native)</span>
              </div>
              <div className="p-3 bg-[#080C12] rounded-xl border border-[#1D2935]">
                <span className="text-[#8EA0B3] block">אנגלית:</span>
                <span className="text-[#49D6C4] font-bold text-sm">רמה מקצועית גבוהה</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#8EA0B3] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#3FD17A] shrink-0" />
              <span>יכולת הובלה טכנית, עבודה בסביבה בינלאומית ומול צוותי פיתוח מבוזרים.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
