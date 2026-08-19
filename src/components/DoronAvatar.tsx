import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

interface DoronAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
}

export const DoronAvatar: React.FC<DoronAvatarProps> = ({ 
  size = 'hero',
  showBadge = true
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-44 h-44',
    hero: 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64'
  };

  return (
    <div className="relative inline-block select-none group">
      {/* Outer cyber decorative glowing rings */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#49D6C4] via-[#F2B544] to-[#49D6C4] rounded-full opacity-30 blur-md group-hover:opacity-60 transition duration-500 animate-pulse"></div>
      
      {/* Precision Tech Ring */}
      <div className="relative p-1.5 rounded-full bg-[#101720] border-2 border-[#1D2935] group-hover:border-[#49D6C4] transition-colors duration-300">
        <div className={`${sizeClasses[size]} rounded-full overflow-hidden relative bg-[#080C12] border border-[#1D2935] flex items-center justify-center shadow-2xl`}>
          
          {/* Real Avatar Photo with fallback styling */}
          <img 
            src="/doron-cohen.jpg" 
            alt="דורון כהן - Senior QA Engineer"
            className="w-full h-full object-cover object-top filter contrast-105 brightness-100 group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Graceful fallback to rich technical SVG portrait if file is not directly found
              e.currentTarget.style.display = 'none';
              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />

          {/* High-craft QA Monogram & Vector Technical Portrait Fallback */}
          <div className="w-full h-full hidden flex-col items-center justify-center bg-gradient-to-br from-[#101720] via-[#0D131B] to-[#080C12] p-4 text-center">
            <div className="relative flex items-center justify-center mb-1">
              <div className="w-20 h-20 rounded-full border-2 border-[#49D6C4] flex items-center justify-center bg-[#49D6C4]/10 text-[#49D6C4] font-mono text-2xl font-bold">
                DC
              </div>
              <div className="absolute -bottom-1 -right-1 bg-[#3FD17A] text-[#080C12] p-1 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="font-mono text-xs text-[#49D6C4] font-semibold tracking-wider">
              DORON COHEN
            </div>
            <div className="font-mono text-[10px] text-[#8EA0B3]">
              SR. QA ENGINEER
            </div>
          </div>

          {/* Subtle Cyber scanline overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#49D6C4]/5 to-transparent pointer-events-none opacity-40"></div>
        </div>

        {/* Tech Corner Crosshairs */}
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#49D6C4] -mr-1 -mt-1 rounded-tr"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#49D6C4] -ml-1 -mb-1 rounded-bl"></div>
      </div>

      {/* Senior QA Status Badge */}
      {showBadge && (
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#101720] border border-[#49D6C4]/60 text-[#E8EEF4] text-xs font-mono py-1 px-3 rounded-full flex items-center gap-1.5 shadow-lg shadow-black/60 z-10">
          <span className="w-2 h-2 rounded-full bg-[#3FD17A] animate-ping inline-block"></span>
          <ShieldCheck className="w-3.5 h-3.5 text-[#49D6C4]" />
          <span className="font-bold text-[#49D6C4]">Senior QA</span>
          <span className="text-[#8EA0B3] text-[11px]">| 12+ Yrs</span>
        </div>
      )}
    </div>
  );
};
