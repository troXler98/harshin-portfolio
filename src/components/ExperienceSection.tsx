import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceSectionProps {
  playClick: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ playClick }) => {
  const [expandedId, setExpandedId] = useState<string | null>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    playClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5 pb-2">
        <h2 id="experience-heading" className="scroll-mt-20 text-xl font-medium tracking-tight sm:text-2xl">
          Experience
        </h2>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Internships &amp; Roles
        </span>
      </div>

      <ul className="space-y-4 px-4 py-5 sm:px-6">
        {EXPERIENCES.map((exp) => {
          const isExpanded = expandedId === exp.id;

          return (
            <li
              key={exp.id}
              className="rounded-lg border border-border/80 bg-background/50 hover:border-border transition-all overflow-hidden"
            >
              {/* Header Clickable Row */}
              <button
                type="button"
                onClick={() => toggleExpand(exp.id)}
                className="w-full flex items-start gap-3.5 p-3.5 sm:p-4 text-left cursor-pointer hover:bg-muted/30 transition-colors"
              >
                {/* Company Initials Avatar Badge */}
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-[10px] text-white font-mono font-bold text-xs shadow-xs ${exp.logoBg}`}
                >
                  {exp.logoText}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h3 className="text-foreground min-w-0 font-semibold text-[15px] leading-snug">
                      {exp.role}{' '}
                      <span className="text-muted-foreground font-normal text-xs">at</span>{' '}
                      <span className="text-foreground font-semibold">{exp.company}</span>
                    </h3>
                    <p className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
                      {exp.period}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-muted-foreground text-[13px] leading-snug">
                      {exp.location} <span aria-hidden="true">•</span> {exp.duration}
                    </p>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                      {isExpanded ? (
                        <>
                          Hide details <ChevronUp className="size-3.5" />
                        </>
                      ) : (
                        <>
                          View details <ChevronDown className="size-3.5" />
                        </>
                      )}
                    </span>
                  </div>
                </div>
              </button>

              {/* Expanded Bullet Points */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-1 sm:px-5 border-t border-border/40 bg-muted/10 animate-fade-in">
                  <ul className="list-disc space-y-2 pl-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
