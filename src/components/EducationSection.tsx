import React from 'react';
import { GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" aria-labelledby="education-heading">
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 id="education-heading" className="scroll-mt-20 text-xl font-medium tracking-tight sm:text-2xl">
          Education &amp; Credentials
        </h2>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Academic Foundation
        </span>
      </div>

      <div className="px-4 py-5 sm:px-6 space-y-6">
        {/* Degrees */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <GraduationCap className="size-4 text-blue-500" />
            <span>Degrees</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="p-3.5 rounded-lg border border-border/80 bg-background/60 space-y-1.5 shadow-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm text-foreground leading-snug">
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-2.5 pt-2 border-t border-border/40">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <ShieldCheck className="size-4 text-emerald-500" />
            <span>Certifications</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-2.5 p-2.5 rounded-md border border-border/70 bg-muted/20"
              >
                <CheckCircle2 className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-foreground leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Fest Head */}
        <div className="space-y-2.5 pt-2 border-t border-border/40">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Award className="size-4 text-amber-500" />
            <span>Leadership &amp; Achievements</span>
          </div>

          <ul className="space-y-2">
            {ACHIEVEMENTS.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-2.5 rounded-md border border-border/60 bg-background hover:bg-muted/20 transition-colors"
              >
                <span className="size-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
