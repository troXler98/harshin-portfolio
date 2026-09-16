import React from 'react';
import { X, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  playClick: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  playClick,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 modal-backdrop animate-fade-in">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-in flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="min-w-0 pr-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-blue-500 font-semibold">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug truncate">
              {project.title}
            </h3>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="size-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer shrink-0"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
              Project Overview
            </h4>
            <p className="text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>
          </div>

          {/* Key Implementation Points */}
          {project.bulletPoints && (
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                Key Technical &amp; Operational Highlights
              </h4>
              <ul className="space-y-2">
                {project.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-800 dark:text-neutral-200">
                    <CheckCircle2 className="size-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
              Technologies &amp; Methodologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-muted text-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Highlight Card */}
          {project.metrics && (
            <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 font-mono text-xs flex items-center gap-2">
              <Cpu className="size-4 shrink-0" />
              <span>{project.metrics}</span>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="p-4 border-t border-border bg-muted/20 flex items-center justify-between gap-2">
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-muted text-foreground transition-colors cursor-pointer"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="size-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
