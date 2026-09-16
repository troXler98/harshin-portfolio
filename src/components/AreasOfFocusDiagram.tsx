import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AreasOfFocusDiagramProps {
  playClick: () => void;
  onOpenContactForm?: () => void;
}

export const AreasOfFocusDiagram: React.FC<AreasOfFocusDiagramProps> = ({
  playClick,
}) => {
  const [activeOrb, setActiveOrb] = useState<string | null>(null);

  return (
    <section aria-label="Areas of focus" className="screen-line-top screen-line-bottom relative px-5 py-8 overflow-hidden">
      <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md my-4">
        <div className="relative aspect-square w-full select-none">
          {/* Top Circle - Logistics Operations */}
          <div
            onMouseEnter={() => setActiveOrb('logistics')}
            onMouseLeave={() => setActiveOrb(null)}
            className={`border absolute top-0 left-1/2 h-[56%] w-[56%] -translate-x-1/2 rounded-full transition-all duration-300 ${
              activeOrb === 'logistics'
                ? 'border-blue-500 bg-blue-500/10 scale-105 z-10'
                : 'border-foreground/15 hover:border-foreground/30'
            }`}
          />

          {/* Left Circle - Marketing Strategy */}
          <div
            onMouseEnter={() => setActiveOrb('marketing')}
            onMouseLeave={() => setActiveOrb(null)}
            className={`border absolute top-[22%] left-[2%] h-[56%] w-[56%] rounded-full transition-all duration-300 ${
              activeOrb === 'marketing'
                ? 'border-emerald-500 bg-emerald-500/10 scale-105 z-10'
                : 'border-foreground/15 hover:border-foreground/30'
            }`}
          />

          {/* Right Circle - Technical IT */}
          <div
            onMouseEnter={() => setActiveOrb('it')}
            onMouseLeave={() => setActiveOrb(null)}
            className={`border absolute top-[22%] right-[2%] h-[56%] w-[56%] rounded-full transition-all duration-300 ${
              activeOrb === 'it'
                ? 'border-purple-500 bg-purple-500/10 scale-105 z-10'
                : 'border-foreground/15 hover:border-foreground/30'
            }`}
          />

          {/* Bottom Circle - Data Analytics */}
          <div
            onMouseEnter={() => setActiveOrb('analytics')}
            onMouseLeave={() => setActiveOrb(null)}
            className={`border absolute bottom-0 left-1/2 h-[56%] w-[56%] -translate-x-1/2 rounded-full transition-all duration-300 ${
              activeOrb === 'analytics'
                ? 'border-amber-500 bg-amber-500/10 scale-105 z-10'
                : 'border-foreground/15 hover:border-foreground/30'
            }`}
          />

          {/* Labels */}
          <span
            className={`absolute top-[13%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] sm:text-xs font-mono font-medium transition-colors leading-tight ${
              activeOrb === 'logistics' ? 'text-blue-500 font-bold' : 'text-foreground/70'
            }`}
          >
            Logistics Operations
          </span>

          <span
            className={`absolute top-1/2 left-[14%] -translate-x-1/2 -translate-y-1/2 text-center text-[10px] sm:text-xs font-mono font-medium transition-colors leading-tight ${
              activeOrb === 'marketing' ? 'text-emerald-500 font-bold' : 'text-foreground/70'
            }`}
          >
            Marketing Strategy
          </span>

          <span
            className={`absolute top-1/2 right-[14%] translate-x-1/2 -translate-y-1/2 text-center text-[10px] sm:text-xs font-mono font-medium transition-colors leading-tight ${
              activeOrb === 'it' ? 'text-purple-500 font-bold' : 'text-foreground/70'
            }`}
          >
            IT &amp; Tech Grounding
          </span>

          <span
            className={`absolute bottom-[13%] left-1/2 -translate-x-1/2 translate-y-1/2 text-center text-[10px] sm:text-xs font-mono font-medium transition-colors leading-tight ${
              activeOrb === 'analytics' ? 'text-amber-500 font-bold' : 'text-foreground/70'
            }`}
          >
            Data &amp; Analytics
          </span>

          {/* Center Monogram Avatar Hub */}
          <div className="border-background absolute top-1/2 left-1/2 size-14 sm:size-16 md:size-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 sm:border-4 shadow-lg bg-neutral-900 flex items-center justify-center text-white z-20">
            <div className="flex flex-col items-center">
              <span className="font-pixel text-xs sm:text-sm font-bold tracking-widest text-neutral-100">
                HK
              </span>
              <span className="font-mono text-[6.5px] sm:text-[7.5px] text-blue-400 text-center leading-none mt-0.5">
                MKTG &amp; LOG
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Signature CTA: prathm.me "Still reading? That means something clicked" */}
      <div id="contact" className="flex w-full flex-col items-center px-4 pt-4 pb-2 text-center">
        <p className="mb-4 text-sm sm:text-base text-balance text-foreground/80 font-normal">
          Still reading? That means something clicked. Let’s connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          <a
            href={PERSONAL_INFO.links.email}
            onClick={playClick}
            data-tap-feedback
            className="group inline-flex cursor-pointer items-center rounded-md border border-foreground/20 bg-foreground text-background px-3.5 py-1.5 text-xs sm:text-sm font-medium shadow-md transition-all hover:opacity-90 active:scale-95"
          >
            <Mail className="size-3.5 mr-2 shrink-0" />
            <span>Send Harshin an Email</span>
            <ArrowUpRight className="size-3.5 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            data-tap-feedback
            className="border-border bg-background hover:bg-muted text-foreground border inline-flex items-center rounded-md px-3.5 py-1.5 text-xs sm:text-sm font-medium shadow-xs transition-colors"
          >
            <LinkedinIcon className="size-3.5 mr-1.5 text-blue-600 dark:text-blue-400" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
