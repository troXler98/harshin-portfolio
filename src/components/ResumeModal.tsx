import React from 'react';
import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  playClick: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  playClick,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-background/80 modal-backdrop animate-fade-in">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="w-full max-w-2xl rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-in flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-muted/40">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Harshin Kailas K · Curriculum Vitae
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print or Save as PDF"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-border bg-background hover:bg-muted text-foreground transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="size-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="size-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm print:p-0">
          
          {/* Header */}
          <div className="border-b border-border/70 pb-4">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium mt-1">
              {PERSONAL_INFO.location} &nbsp;|&nbsp; {PERSONAL_INFO.email} &nbsp;|&nbsp; linkedin.com/in/harshin-kailas
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Professional Summary
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              MBA graduate (Dual Specialisation: Marketing &amp; Logistics) with a BCA (Computer Applications) foundation, combining marketing strategy, logistics &amp; supply chain operations, and technical IT support capability. Practical experience in documentation management, ERP systems, dealer/vendor relations, and cross-functional coordination, gained through internships in logistics operations (Cubes International Logistics) and marketing (Kerala Feeds Ltd). Technical grounding in networking, Android application development, databases, Python &amp; Flask, and Generative AI tools, supported by strong analytical skills using MS Excel and SPSS. Organized, detail-oriented, and quick to learn new systems and processes — well suited for Logistics Operations, Marketing Coordination, or Technical Assistant roles in an enterprise IT environment.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="space-y-1.5">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Core Competencies
            </h2>
            <p className="leading-relaxed text-xs font-mono text-foreground/90">
              Logistics &amp; Supply Chain Operations • Marketing Strategy &amp; Distribution • Technical/IT Assistance • Documentation Management • ERP Systems • Database Fundamentals • Python &amp; Flask • Networking (Cisco) • Data Analysis &amp; Reporting (Excel, SPSS) • Dealer &amp; Vendor Coordination • MS Office Suite • Problem Solving • Team Collaboration
            </p>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Professional Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-foreground">
                    {exp.role} <span className="font-normal text-muted-foreground">| {exp.company}, {exp.location}</span>
                  </h3>
                  <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-xs leading-relaxed">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Education
            </h2>
            <div className="space-y-1.5">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <span className="font-semibold text-foreground">{edu.degree}</span>
                    <span className="text-muted-foreground"> — {edu.institution}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Projects */}
          <div className="space-y-2">
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Academic Projects
            </h2>
            <div className="space-y-2">
              <div>
                <p className="font-semibold text-foreground">
                  AdBot — Admission Help System Chatbot <span className="font-normal text-muted-foreground">| BCA Final Year Project</span>
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  Built an automated chatbot for admission-test queries using two approaches: a rule-based engine with SQLite3, and an NLP-based engine using NLTK and scikit-learn. Developed with Flask (Python 3) and HTML/CSS.
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  A Study on Freight Forwarding Process with Reference to Employees <span className="font-normal text-muted-foreground">| MBA Research Project</span>
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  Conducted structured employee-perception study using primary survey methods. Applied SPSS statistical testing (Chi-Square Test) to analyze data and formulate formal management recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-border/60">
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                Certifications
              </h2>
              <p className="text-xs text-muted-foreground">
                Networking (Cisco) • Android Development with Jetpack Compose (Tech Labs) • Generative AI with Google Cloud
              </p>
            </div>
            <div>
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                Languages
              </h2>
              <p className="text-xs text-muted-foreground">
                Malayalam (Native) • English (Professional) • Hindi (Conversational)
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
