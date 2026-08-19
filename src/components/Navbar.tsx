import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  FileText, 
  Send, 
  ShieldCheck, 
  Code2, 
  CheckCircle,
  Linkedin,
  PhoneCall
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy
      const sections = ['home', 'about', 'experience', 'automation', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'בית' },
    { id: 'about', label: 'אודות' },
    { id: 'experience', label: 'ניסיון' },
    { id: 'automation', label: 'אוטומציה' },
    { id: 'skills', label: 'כישורים' },
    { id: 'projects', label: 'פרויקטים' },
    { id: 'education', label: 'השכלה' },
    { id: 'contact', label: 'צור קשר' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080C12]/85 backdrop-blur-md border-b border-[#1D2935] shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#101720] border border-[#1D2935] group-hover:border-[#49D6C4] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#3FD17A] animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <div className="font-mono text-sm sm:text-base font-bold tracking-tight text-[#E8EEF4] group-hover:text-[#49D6C4] transition-colors">
                DORON.COHEN
                <span className="text-[#49D6C4] ml-1.5 text-xs font-normal">{'//'} QA_ENGINEER</span>
              </div>
              <span className="text-[10px] font-mono text-[#8EA0B3] -mt-1 hidden sm:block">
                Status: <span className="text-[#3FD17A]">AVAILABLE_FOR_HIRE</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#101720]/70 border border-[#1D2935] rounded-full p-1.5 px-3 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-[#49D6C4] text-[#080C12] font-bold shadow-md shadow-[#49D6C4]/20' 
                      : 'text-[#8EA0B3] hover:text-[#E8EEF4] hover:bg-[#1D2935]/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons Right */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-1.5 text-xs font-mono py-2 px-3.5 rounded-lg border border-[#1D2935] hover:border-[#49D6C4] bg-[#101720] text-[#E8EEF4] hover:text-[#49D6C4] transition-all hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-[#49D6C4]" />
              <span>קורות חיים</span>
            </button>

            <a
              href="mailto:doroncohenqa@gmail.com"
              className="flex items-center gap-1.5 text-xs font-bold font-mono py-2 px-4 rounded-lg bg-[#49D6C4] text-[#080C12] hover:bg-[#3ec4b3] transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#49D6C4]/20"
            >
              <Send className="w-3.5 h-3.5 text-[#080C12]" />
              <span>צור קשר</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenResumeModal}
              className="p-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#49D6C4] text-xs font-mono flex items-center gap-1"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#E8EEF4] hover:text-[#49D6C4]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D131B] border-b border-[#1D2935] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-4 border-b border-[#1D2935]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-right px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/30 font-bold'
                    : 'text-[#8EA0B3] hover:text-[#E8EEF4] hover:bg-[#101720]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#101720] border border-[#1D2935] text-[#E8EEF4] font-mono text-sm"
            >
              <FileText className="w-4 h-4 text-[#49D6C4]" />
              <span>הורדת קורות חיים (PDF)</span>
            </button>
            <a
              href="mailto:doroncohenqa@gmail.com"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#49D6C4] text-[#080C12] font-bold font-mono text-sm"
            >
              <Send className="w-4 h-4" />
              <span>צור קשר עכשיו</span>
            </a>
            <a
              href="tel:0546997207"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#F2B544] font-mono text-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>חיוג ישיר: 054-6997207</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
