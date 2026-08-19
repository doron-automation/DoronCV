import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Briefcase, 
  GraduationCap, 
  Award,
  Phone,
  Mail,
  Linkedin,
  MapPin
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate/Download PDF file or prompt
    const link = document.createElement('a');
    link.href = '/Doron_Cohen_QA_Resume.pdf';
    link.download = 'Doron_Cohen_QA_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#101720] border border-[#1D2935] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="bg-[#0D131B] border-b border-[#1D2935] p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#080C12] border border-[#1D2935] rounded-xl text-[#49D6C4]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#49D6C4] font-bold">
                CURRICULUM VITAE // DORON COHEN
              </span>
              <h3 className="text-xl font-bold text-[#E8EEF4] font-sans">
                קורות חיים מקצועיים — דורון כהן
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="הדפס קורות חיים"
              className="p-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#8EA0B3] hover:text-[#E8EEF4] hover:border-[#49D6C4] transition-colors hidden sm:flex items-center gap-1 text-xs font-mono"
            >
              <Printer className="w-4 h-4" />
              <span>הדפס</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#49D6C4] text-[#080C12] font-bold text-xs font-mono hover:bg-[#3ec4b3] transition-all hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>הורד קובץ PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#8EA0B3] hover:text-[#E8EEF4] hover:border-[#49D6C4] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable CV Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-right bg-[#080C12]">
          
          {/* Header Card in CV */}
          <div className="p-6 bg-[#101720] rounded-xl border border-[#1D2935] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-[#E8EEF4] font-sans">
                דורון כהן
              </h2>
              <div className="text-base font-mono text-[#49D6C4] font-bold mt-1">
                Senior QA Engineer | 12+ Years Experience
              </div>
              <p className="text-xs text-[#8EA0B3] mt-2 max-w-xl">
                מומחה בבדיקות מערכות Microservices, Cloud (AWS), API, אוטומציה ב-Python ו-Playwright, ובדיקות אינטגרציה מעמיקות במערכות מורכבות.
              </p>
            </div>

            <div className="space-y-1.5 text-xs font-mono text-[#8EA0B3] border-t sm:border-t-0 sm:border-r border-[#1D2935] sm:pr-6 pt-3 sm:pt-0">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#49D6C4]" />
                <a href="mailto:doroncohenqa@gmail.com" className="text-[#E8EEF4] hover:underline">
                  doroncohenqa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F2B544]" />
                <span className="text-[#E8EEF4]">054-6997207</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3FD17A]" />
                <span>ישראל (זמין מיידית)</span>
              </div>
            </div>
          </div>

          {/* Experience Section in CV */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold text-[#49D6C4] flex items-center gap-2 border-b border-[#1D2935] pb-2">
              <Briefcase className="w-4 h-4" />
              <span>ניסיון מקצועי (Professional Experience)</span>
            </h3>

            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="p-5 bg-[#101720] rounded-xl border border-[#1D2935] space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span className="text-lg font-bold text-[#E8EEF4]">{exp.company}</span>
                    <span className="text-xs font-mono text-[#49D6C4] mr-2">— {exp.role}</span>
                  </div>
                  <span className="text-xs font-mono text-[#F2B544] bg-[#080C12] px-2.5 py-1 rounded border border-[#1D2935]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-[#8EA0B3]">
                  {exp.summary}
                </p>

                <ul className="space-y-1.5 text-xs text-[#E8EEF4]">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#49D6C4] mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications in CV */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold text-[#49D6C4] flex items-center gap-2 border-b border-[#1D2935] pb-2">
                <GraduationCap className="w-4 h-4" />
                <span>השכלה (Education)</span>
              </h3>
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.id} className="p-3.5 bg-[#101720] rounded-xl border border-[#1D2935] text-xs">
                  <div className="font-bold text-[#E8EEF4]">{edu.degree}</div>
                  <div className="text-[#49D6C4] font-mono text-[11px] mt-0.5">{edu.institution}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-mono font-bold text-[#F2B544] flex items-center gap-2 border-b border-[#1D2935] pb-2">
                <Award className="w-4 h-4" />
                <span>הסמכות (Certifications)</span>
              </h3>
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="p-3.5 bg-[#101720] rounded-xl border border-[#1D2935] text-xs">
                  <div className="font-bold text-[#E8EEF4]">{cert.title}</div>
                  <div className="text-[#F2B544] font-mono text-[11px] mt-0.5">{cert.issuer} · {cert.year}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#0D131B] border-t border-[#1D2935] p-4 flex items-center justify-between">
          <div className="text-xs text-[#8EA0B3] font-mono">
            File name: <span className="text-[#49D6C4]">Doron_Cohen_QA_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#49D6C4] text-[#080C12] font-bold text-xs font-mono hover:bg-[#3ec4b3] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>הורד קורות חיים</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#8EA0B3] hover:text-[#E8EEF4] text-xs font-mono"
            >
              סגור
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
