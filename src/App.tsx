import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useSoundFeedback } from './hooks/useSoundFeedback';
import { PERSONAL_INFO } from './data/portfolioData';
import { Project } from './types';

// Components
import { Navbar } from './components/Navbar';
import { InteractiveHeroCanvas } from './components/InteractiveHeroCanvas';
import { HeaderProfile } from './components/HeaderProfile';
import { AboutSection } from './components/AboutSection';
import { ConnectSection } from './components/ConnectSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { AreasOfFocusDiagram } from './components/AreasOfFocusDiagram';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';

export function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const { isMuted, toggleSound, playClick } = useSoundFeedback();

  // Modals & Popups
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  const handleCopyEmail = () => {
    playClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    showToast('Email copied: ' + PERSONAL_INFO.email);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleScrollToContact = () => {
    playClick();
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200 selection:bg-foreground selection:text-background">
      {/* Sticky Header Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isMuted={isMuted}
        onToggleSound={toggleSound}
        onOpenSearch={() => setIsSearchOpen(true)}
        playClick={playClick}
      />

      {/* Main Centered Column with prathm.me Lateral Guide Frame */}
      <div className="mx-auto w-full px-4 md:max-w-portfolio md:px-0">
        <div className="relative">
          {/* Left Guide Border */}
          <div
            aria-hidden="true"
            className="border-border pointer-events-none absolute top-0 bottom-0 z-0 hidden border-r md:-left-6 md:block md:w-6 dark:opacity-60"
          />
          {/* Right Guide Border */}
          <div
            aria-hidden="true"
            className="border-border pointer-events-none absolute top-0 bottom-0 z-0 hidden border-l md:-right-6 md:block md:w-6 dark:opacity-60"
          />

          {/* Central Main Content Container */}
          <main id="main" className="relative z-10">
            {/* Interactive Dot Canvas Header */}
            <InteractiveHeroCanvas isDark={isDark} />

            {/* Profile Header (Avatar, Cycling Roles, Quick CTAs) */}
            <HeaderProfile
              playClick={playClick}
              onCopyEmail={handleCopyEmail}
              copiedEmail={copiedEmail}
            />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* About Section */}
            <AboutSection />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* Connect Section (Pill Badges) */}
            <ConnectSection
              playClick={playClick}
              onOpenResumeModal={() => setIsResumeOpen(true)}
              onScrollToContact={handleScrollToContact}
            />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* Work & Internship Experience */}
            <ExperienceSection playClick={playClick} />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* Projects & Research Grid */}
            <ProjectsSection
              playClick={playClick}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* Core Competencies & Skills */}
            <SkillsSection
              playClick={playClick}
              onSkillClick={(skill) => showToast(`Skill: ${skill}`)}
            />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* Education, Certifications & Leadership */}
            <EducationSection />

            <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

            {/* Areas of Focus Orbit/Venn Graphic & Final CTA */}
            <AreasOfFocusDiagram
              playClick={playClick}
              onOpenContactForm={handleScrollToContact}
            />
          </main>

          {/* Footer */}
          <Footer
            onOpenSearch={() => setIsSearchOpen(true)}
            playClick={playClick}
          />
        </div>
      </div>

      {/* Command Palette (⌘K / Ctrl+K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        isMuted={isMuted}
        onToggleSound={toggleSound}
        onOpenResume={() => setIsResumeOpen(true)}
        playClick={playClick}
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        playClick={playClick}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        playClick={playClick}
      />

      {/* Minimal Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
