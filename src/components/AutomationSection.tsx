import React, { useState } from 'react';
import { 
  AUTOMATION_PIPELINE, 
  AUTOMATION_CARDS 
} from '../data/portfolioData';
import { 
  Cpu, 
  Workflow, 
  Gauge, 
  Globe, 
  Terminal, 
  Play, 
  Network, 
  GitBranch, 
  PieChart,
  ArrowDown,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldAlert,
  Zap,
  Flame
} from 'lucide-react';

export const AutomationSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(3);

  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Gauge': return <Gauge className="w-6 h-6 text-[#49D6C4]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#49D6C4]" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#F2B544]" />;
      case 'Play': return <Play className="w-6 h-6 text-[#49D6C4]" />;
      case 'Network': return <Network className="w-6 h-6 text-[#49D6C4]" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-[#49D6C4]" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-[#F2B544]" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-[#49D6C4]" />;
      default: return <Cpu className="w-6 h-6 text-[#49D6C4]" />;
    }
  };

  return (
    <section id="automation" className="py-20 bg-[#080C12] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#49D6C4]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>CONTINUOUS_QUALITY // PIPELINE_ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
            Automation Engineering
          </h2>
          <p className="text-[#8EA0B3] text-base mt-2 max-w-2xl">
            תשתית אוטומציה הוליסטית מקצה לקצה — מאפיון ופיתוח תסריטי בדיקה מבוססי POM ועד אינטגרציית CI/CD ודוחות Allure מתקדמים.
          </p>
          <div className="w-20 h-1 bg-[#49D6C4] mt-3 rounded-full"></div>
        </div>

        {/* Visual Pipeline Interactive Section */}
        <div className="bg-[#101720] border border-[#1D2935] rounded-2xl p-6 sm:p-8 mb-16 shadow-2xl relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1D2935] pb-5 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#E8EEF4] flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#3FD17A] rounded-full animate-ping"></span>
                <span>Automation Pipeline: End-to-End Workflow</span>
              </h3>
              <p className="text-xs text-[#8EA0B3] font-mono mt-1">
                Data Flow: Requirement → Automation → Execution → Quality Gates → Production
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#49D6C4] bg-[#080C12] px-3 py-1.5 rounded-lg border border-[#1D2935]">
              <Zap className="w-3.5 h-3.5" />
              <span>Interactive Step Inspector</span>
            </div>
          </div>

          {/* Desktop Horizontal Interactive Pipeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 relative">
            {AUTOMATION_PIPELINE.map((step) => {
              const isSelected = activeStep === step.stepNumber;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.stepNumber)}
                  className={`p-3 rounded-xl border text-right transition-all flex flex-col justify-between h-32 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-[#49D6C4]/15 border-[#49D6C4] shadow-lg shadow-[#49D6C4]/20 scale-105 z-10'
                      : 'bg-[#080C12] border-[#1D2935] hover:border-[#49D6C4]/40 hover:bg-[#0D131B]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                      isSelected ? 'bg-[#49D6C4] text-[#080C12]' : 'bg-[#1D2935] text-[#8EA0B3]'
                    }`}>
                      {step.stepNumber}
                    </span>
                    {step.stepNumber < 8 && (
                      <span className="text-[#5D6F82] text-xs font-mono group-hover:text-[#49D6C4] transition-colors hidden lg:inline">
                        →
                      </span>
                    )}
                  </div>

                  <div className="mt-2">
                    <div className={`font-bold text-xs leading-tight line-clamp-2 ${
                      isSelected ? 'text-[#49D6C4]' : 'text-[#E8EEF4]'
                    }`}>
                      {step.subtitle}
                    </div>
                    <div className="text-[10px] text-[#8EA0B3] font-mono mt-1 truncate">
                      {step.tech[0]}
                    </div>
                  </div>

                  {/* Active Indicator bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 right-0 left-0 h-1 bg-[#49D6C4] rounded-b-xl"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Box */}
          {activeStep && (
            <div className="mt-8 p-6 bg-[#080C12] border border-[#49D6C4]/40 rounded-xl relative animate-in fade-in duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#49D6C4]/15 border border-[#49D6C4]/40 flex items-center justify-center text-[#49D6C4] font-mono font-bold">
                    0{activeStep}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#E8EEF4]">
                      {AUTOMATION_PIPELINE[activeStep - 1].title}
                    </h4>
                    <div className="text-xs text-[#49D6C4] font-mono">
                      {AUTOMATION_PIPELINE[activeStep - 1].subtitle}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {AUTOMATION_PIPELINE[activeStep - 1].tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#F2B544]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#E8EEF4] leading-relaxed">
                {AUTOMATION_PIPELINE[activeStep - 1].description}
              </p>
            </div>
          )}

        </div>

        {/* 8 Core Automation Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#E8EEF4] flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#49D6C4]" />
              <span>תשתיות ורכיבי האוטומציה המרכזיים</span>
            </h3>
            <span className="text-xs font-mono text-[#8EA0B3] hidden sm:inline">
              8 Core QA Building Blocks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AUTOMATION_CARDS.map((card, idx) => (
              <div 
                key={idx}
                className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/50 rounded-xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#080C12] border border-[#1D2935] rounded-lg group-hover:border-[#49D6C4]/40 transition-colors">
                      {getCardIcon(card.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-[#F2B544] bg-[#F2B544]/10 px-2 py-0.5 rounded border border-[#F2B544]/20">
                      {card.category}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-[#E8EEF4] group-hover:text-[#49D6C4] transition-colors mb-2 font-mono">
                    {card.name}
                  </h4>

                  <p className="text-xs text-[#8EA0B3] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1D2935] flex items-center justify-between text-[11px] font-mono text-[#5D6F82]">
                  <span>Status: Production Ready</span>
                  <span className="text-[#3FD17A]">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
