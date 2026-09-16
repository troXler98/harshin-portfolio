import React, { useState } from 'react';
import { Bot, BarChart3, Radio } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  playClick: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  playClick,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'analytics'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'fullstack') return p.category === 'Full-Stack & ML';
    if (filter === 'analytics') return p.category === 'Research & Analytics';
    return true;
  });

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'adbot':
        return <Bot className="size-6 text-blue-500" />;
      case 'freight-study':
        return <BarChart3 className="size-6 text-emerald-500" />;
      default:
        return <Radio className="size-6 text-amber-500" />;
    }
  };

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 id="projects-heading" className="scroll-mt-20 text-xl font-medium tracking-tight sm:text-2xl">
          Projects
        </h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => {
              playClick();
              setFilter('all');
            }}
            className={`text-xs px-2 py-0.5 rounded transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-foreground text-background font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              playClick();
              setFilter('fullstack');
            }}
            className={`text-xs px-2 py-0.5 rounded transition-colors cursor-pointer ${
              filter === 'fullstack'
                ? 'bg-foreground text-background font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            AdBot (ML)
          </button>
          <button
            onClick={() => {
              playClick();
              setFilter('analytics');
            }}
            className={`text-xs px-2 py-0.5 rounded transition-colors cursor-pointer ${
              filter === 'analytics'
                ? 'bg-foreground text-background font-medium'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Research (SPSS)
          </button>
        </div>
      </div>

      {/* Grid container with prathm.me vertical dividing line */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="bg-border pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-px sm:block"
        />

        <div className="relative grid grid-cols-1 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <div key={project.id} className="relative flex flex-col p-4">
              <div className="group/card relative flex flex-1 flex-col gap-3 rounded-lg border border-border/80 p-3 sm:p-4 bg-background/50 hover:border-foreground/30 transition-all shadow-xs">
                
                {/* Visual Banner Header */}
                <div
                  onClick={() => {
                    playClick();
                    onSelectProject(project);
                  }}
                  className="group/media border border-border overflow-hidden rounded-md cursor-pointer bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950 h-36 sm:h-40 flex flex-col items-center justify-center p-4 relative"
                >
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-background/80 text-muted-foreground border border-border">
                      {project.category}
                    </span>
                  </div>

                  <div className="size-12 rounded-xl bg-background/90 border border-border flex items-center justify-center shadow-sm group-hover/media:scale-110 transition-transform duration-300">
                    {getProjectIcon(project.id)}
                  </div>

                  <p className="mt-3 font-mono text-xs font-semibold text-foreground text-center truncate max-w-full px-2">
                    {project.title.split('—')[0].trim()}
                  </p>
                  <span className="text-[11px] text-muted-foreground text-center line-clamp-1 mt-0.5 font-sans">
                    {project.tagline}
                  </span>
                </div>

                {/* Card Title & Badges */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="min-w-0 text-[15px] leading-snug font-semibold text-foreground">
                    <button
                      onClick={() => {
                        playClick();
                        onSelectProject(project);
                      }}
                      className="hover:underline text-left cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <button
                    type="button"
                    onClick={() => {
                      playClick();
                      onSelectProject(project);
                    }}
                    data-tap-feedback
                    className="shrink-0 bg-background border border-border text-foreground hover:border-neutral-400 dark:hover:border-neutral-600 inline-flex items-center rounded-md text-[11px] font-medium px-2 py-0.5 shadow-xs cursor-pointer"
                  >
                    Details
                  </button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <ul className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/40">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="flex">
                      <span className="bg-muted/70 text-foreground border border-border/60 rounded-md font-mono text-[10px] px-1.5 py-0.5 font-normal">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
