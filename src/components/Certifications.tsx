import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, Code2, Network, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-7 h-7 text-[#49D6C4]" />;
      case 'Code2': return <Code2 className="w-7 h-7 text-[#F2B544]" />;
      case 'Network': return <Network className="w-7 h-7 text-[#49D6C4]" />;
      default: return <ShieldCheck className="w-7 h-7 text-[#49D6C4]" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-[#E8EEF4] flex items-center gap-2">
          <Award className="w-5 h-5 text-[#F2B544]" />
          <span>הסמכות מקצועיות (Certifications)</span>
        </h3>
        <span className="text-xs font-mono text-[#8EA0B3]">Official Credentials</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[#080C12] border border-[#1D2935] rounded-xl group-hover:border-[#49D6C4]/40 transition-colors">
                  {getCertIcon(cert.icon)}
                </div>
                <span className="text-[10px] font-mono text-[#49D6C4] bg-[#49D6C4]/10 border border-[#49D6C4]/30 px-2 py-0.5 rounded">
                  {cert.year}
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#E8EEF4] group-hover:text-[#49D6C4] transition-colors mb-1 font-sans">
                {cert.title}
              </h4>

              <div className="text-xs font-mono text-[#F2B544] mb-3">
                {cert.issuer}
              </div>

              <p className="text-xs text-[#8EA0B3] leading-relaxed mb-4">
                {cert.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#1D2935]">
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[10px] font-mono bg-[#080C12] border border-[#1D2935] text-[#8EA0B3] rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
