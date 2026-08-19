import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { 
  X, 
  Code, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Terminal, 
  Copy, 
  Check, 
  Layers,
  Sparkles,
  Play
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'architecture'>('overview');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet?.code) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#101720] border border-[#1D2935] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="bg-[#0D131B] border-b border-[#1D2935] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#080C12] border border-[#1D2935] rounded-xl text-[#49D6C4]">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#49D6C4] uppercase font-bold">
                {project.category} AUTOMATION PROJECT
              </span>
              <h3 className="text-xl font-bold text-[#E8EEF4] font-sans">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#8EA0B3] hover:text-[#E8EEF4] hover:border-[#49D6C4] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subnav Tabs */}
        <div className="bg-[#080C12] border-b border-[#1D2935] px-6 py-2 flex gap-3 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'overview' 
                ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40 font-bold' 
                : 'text-[#8EA0B3] hover:text-[#E8EEF4]'
            }`}
          >
            סקירת פרויקט (Overview)
          </button>

          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeTab === 'code' 
                  ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40 font-bold' 
                  : 'text-[#8EA0B3] hover:text-[#E8EEF4]'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>קוד בדיקות (Test Code)</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'architecture' 
                ? 'bg-[#49D6C4]/15 text-[#49D6C4] border border-[#49D6C4]/40 font-bold' 
                : 'text-[#8EA0B3] hover:text-[#E8EEF4]'
            }`}
          >
            מתודולוגיה ואיכות (Architecture)
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-right">
          
          {activeTab === 'overview' && (
            <>
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-[#49D6C4] font-bold">PROJECT_DESCRIPTION</h4>
                <p className="text-[#E8EEF4] text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono text-[#8EA0B3]">TECHNOLOGY_STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#080C12] border border-[#1D2935] text-[#49D6C4] font-mono text-xs rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-[#49D6C4] font-bold">KEY_FRAMEWORK_FEATURES</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="p-3 bg-[#080C12] border border-[#1D2935] rounded-xl flex items-start gap-2.5 text-xs text-[#E8EEF4]">
                      <CheckCircle2 className="w-4 h-4 text-[#3FD17A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              {project.metrics && (
                <div className="p-4 bg-[#080C12] border border-[#F2B544]/30 rounded-xl flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8EA0B3]">Verified QA Impact:</span>
                  <span className="text-[#F2B544] font-bold">{project.metrics}</span>
                </div>
              )}
            </>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#080C12] px-4 py-2 border border-[#1D2935] rounded-t-xl text-xs font-mono">
                <span className="text-[#49D6C4]">{project.codeSnippet.filename}</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-[#8EA0B3] hover:text-[#49D6C4] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#3FD17A]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'הועתק!' : 'העתק קוד'}</span>
                </button>
              </div>

              <pre className="p-4 bg-[#080C12] border-x border-b border-[#1D2935] rounded-b-xl overflow-x-auto text-xs font-mono text-[#a9c9c2] leading-relaxed select-text" dir="ltr">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-4 text-xs font-mono">
              <div className="p-4 bg-[#080C12] border border-[#1D2935] rounded-xl space-y-3">
                <div className="text-sm font-bold text-[#49D6C4] font-sans">
                  ארכיטקטורת הבדיקות וניהול מחזור החיים
                </div>
                <p className="text-[#8EA0B3] font-sans text-xs leading-relaxed">
                  הפרויקט בנוי לפי Best Practices מחמירים של הנדסת איכות תוכנה:
                </p>
                <ul className="space-y-2 text-[#E8EEF4] font-sans">
                  <li>• <b>Page Object Model (POM):</b> יצירת שכבת הפשטה מלאה המפרידה בין תסריט הבדיקה למבנה הדף.</li>
                  <li>• <b>Fail-Fast &amp; Resilience:</b> זיהוי נפילות מוקדם, מנגנון Retries אוטומטי במקרים של רשתות עמוסות.</li>
                  <li>• <b>Observability &amp; Tracing:</b> הפקת צילומי מסך, קבצי לוג ועקבות רשת (HAR logs) מלאים בכל כישלון.</li>
                  <li>• <b>CI/CD Ready:</b> הרצה מקבילית מהירה מבוססת Docker בקונטיינרים מבודדים.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#0D131B] border-t border-[#1D2935] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-[#8EA0B3] font-mono">
            ID: <span className="text-[#49D6C4]">{project.id}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4] text-[#E8EEF4] hover:text-[#49D6C4] text-xs font-mono transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            ) : (
              <button
                disabled
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#101720] border border-[#1D2935] text-[#5D6F82] text-xs font-mono cursor-not-allowed opacity-60"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (Internal NICE / Gilat Enterprise)</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#49D6C4] text-[#080C12] font-bold text-xs font-mono hover:bg-[#3ec4b3] transition-colors"
            >
              סגור
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
