import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Code, 
  CheckCircle2, 
  Layers, 
  ArrowLeft, 
  Terminal,
  FileCode2,
  Sparkles
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 bg-[#080C12] border-t border-[#1D2935] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101720] border border-[#1D2935] text-xs font-mono text-[#49D6C4] mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO_ARTIFACTS // QA_FRAMEWORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E8EEF4] font-sans">
            QA Automation Projects
          </h2>
          <p className="text-[#8EA0B3] text-base mt-2 max-w-2xl">
            פרויקטים ותשתיות אוטומציה מודרניות שנבנו בדגש על עמידות, מהירות ריצה, ארכיטקטורת POM ודוחות איכות עשירים.
          </p>
          <div className="w-20 h-1 bg-[#49D6C4] mt-3 rounded-full"></div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="bg-[#101720] border border-[#1D2935] hover:border-[#49D6C4]/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group"
            >
              <div>
                
                {/* Project Header */}
                <div className="flex items-start justify-between gap-4 border-b border-[#1D2935] pb-5 mb-5">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 bg-[#080C12] border border-[#1D2935] rounded-xl group-hover:border-[#49D6C4]/40 text-[#49D6C4] transition-colors">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#49D6C4] uppercase font-bold tracking-wider">
                        {project.category} FRAMEWORK
                      </span>
                      <h3 className="text-xl font-bold text-[#E8EEF4] group-hover:text-[#49D6C4] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {project.metrics && (
                    <span className="hidden sm:inline-block text-[11px] font-mono text-[#F2B544] bg-[#F2B544]/10 border border-[#F2B544]/30 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {project.metrics.split(',')[0]}
                    </span>
                  )}
                </div>

                {/* Subtitle / Description */}
                <p className="text-sm text-[#E8EEF4] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Feature Highlights Bullet list */}
                <div className="space-y-2 mb-6">
                  {project.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#8EA0B3]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3FD17A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-[#080C12] border border-[#1D2935] text-[#8EA0B3] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#1D2935] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#49D6C4] text-[#080C12] hover:bg-[#3ec4b3] text-xs font-mono font-bold transition-all hover:scale-105 active:scale-95 shadow-md shadow-[#49D6C4]/20"
                >
                  <FileCode2 className="w-3.5 h-3.5" />
                  <span>צפה בפרויקט וקוד</span>
                </button>

                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#080C12] border border-[#1D2935] hover:border-[#49D6C4] text-[#8EA0B3] hover:text-[#E8EEF4] text-xs font-mono transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#080C12] border border-[#1D2935] text-[#5D6F82] text-xs font-mono hover:text-[#8EA0B3] transition-colors"
                    title="Enterprise Repository details available in modal"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Enterprise Repo</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
