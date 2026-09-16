import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 id="about-heading" className="scroll-mt-20 text-xl font-medium tracking-tight sm:text-2xl">
          About
        </h2>
        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
          Background
        </span>
      </div>

      <div className="px-4 py-6 sm:px-6 sm:py-7">
        <ul className="space-y-4 text-[15px] sm:text-[16px] leading-[1.75] font-normal text-neutral-700 dark:text-neutral-300">
          <li className="flex items-start gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <p>
              I am <span className="font-semibold text-neutral-900 dark:text-neutral-100">Harshin Kailas K</span> — an{' '}
              <span className="font-medium text-neutral-950 dark:text-neutral-100">
                MBA graduate with Dual Specialisation in Marketing &amp; Logistics
              </span>{' '}
              and a strong BCA foundation, uniquely positioned at the intersection of commercial operations and IT systems.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <p>
              In operations, I coordinate end-to-end workflows across{' '}
              <span className="font-medium text-neutral-950 dark:text-neutral-100">
                freight forwarding, distribution channels, and enterprise ERP systems
              </span>{' '}
              — refined through hands-on internships at{' '}
              <span className="text-neutral-900 dark:text-neutral-200">Cubes International Logistics</span> and{' '}
              <span className="text-neutral-900 dark:text-neutral-200">Kerala Feeds Ltd</span>.
            </p>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
            <p>
              On the technical and analytical front, I work with{' '}
              <span className="font-medium text-neutral-950 dark:text-neutral-100">
                Python 3, Flask, SQLite, and Cisco networking
              </span>
              , supported by{' '}
              <span className="font-medium text-neutral-950 dark:text-neutral-100">
                SPSS statistical hypothesis testing (Chi-Square) and advanced MS Excel
              </span>{' '}
              to translate operational data into structured business insights.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
