import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { AutomationSection } from './components/AutomationSection';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#080C12] text-[#E8EEF4] selection:bg-[#49D6C4] selection:text-[#080C12] relative bento-bg">
      
      {/* Subtle ambient accent glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-[#49D6C4]/8 via-[#49D6C4]/2 to-transparent blur-3xl pointer-events-none -z-10"></div>
      
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Metrics />
        <About />
        <Experience />
        <AutomationSection />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}
