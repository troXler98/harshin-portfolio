import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  User,
  Briefcase,
  FolderGit2,
  Cpu,
  GraduationCap,
  Mail,
  Sun,
  Moon,
  Volume2,
  VolumeX,
  FileText,
  Copy,
  Check,
  X,
  ArrowRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenResume: () => void;
  playClick: () => void;
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  isDark,
  onToggleTheme,
  isMuted,
  onToggleSound,
  onOpenResume,
  playClick,
  onCopyEmail,
  copiedEmail,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          playClick();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, playClick]);

  if (!isOpen) return null;

  const navigateTo = (selector: string) => {
    playClick();
    onClose();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { label: 'About Harshin', selector: '#about', icon: <User className="size-4" />, category: 'Navigation' },
    { label: 'Work Experience', selector: '#experience', icon: <Briefcase className="size-4" />, category: 'Navigation' },
    { label: 'Projects & Research', selector: '#projects', icon: <FolderGit2 className="size-4" />, category: 'Navigation' },
    { label: 'Core Skills & Stack', selector: '#skills', icon: <Cpu className="size-4" />, category: 'Navigation' },
    { label: 'Education & Credentials', selector: '#education', icon: <GraduationCap className="size-4" />, category: 'Navigation' },
    { label: 'Contact & Connect', selector: '#contact', icon: <Mail className="size-4" />, category: 'Navigation' },
  ];

  const actions = [
    {
      label: copiedEmail ? 'Email Copied!' : 'Copy Email Address',
      icon: copiedEmail ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />,
      onClick: onCopyEmail,
      detail: PERSONAL_INFO.email,
    },
    {
      label: 'Open LinkedIn Profile',
      icon: <LinkedinIcon className="size-4 text-blue-500" />,
      onClick: () => {
        window.open(PERSONAL_INFO.links.linkedin, '_blank');
        onClose();
      },
      detail: 'linkedin.com/in/harshin-kailas',
    },
    {
      label: 'Open GitHub Profile',
      icon: <GithubIcon className="size-4 text-neutral-400" />,
      onClick: () => {
        window.open(PERSONAL_INFO.links.github, '_blank');
        onClose();
      },
      detail: 'github.com/harshinkailas',
    },
    {
      label: 'View / Download Resume',
      icon: <FileText className="size-4 text-blue-500" />,
      onClick: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      label: `Switch to ${isDark ? 'Light' : 'Dark'} Mode`,
      icon: isDark ? <Sun className="size-4 text-amber-400" /> : <Moon className="size-4 text-zinc-600" />,
      onClick: onToggleTheme,
    },
    {
      label: isMuted ? 'Unmute Interface Sounds' : 'Mute Interface Sounds',
      icon: isMuted ? <VolumeX className="size-4 text-rose-500" /> : <Volume2 className="size-4 text-emerald-500" />,
      onClick: onToggleSound,
    },
  ];

  const filteredSections = sections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );
  const filteredActions = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    (a.detail && a.detail.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-background/80 modal-backdrop animate-fade-in">
      {/* Background click to dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Palette Container */}
      <div className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-in">
        
        {/* Search Input Bar */}
        <div className="flex items-center gap-2 px-3.5 py-3 border-b border-border">
          <Search className="size-4 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section name or action (e.g. 'skills', 'email')..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
          <kbd className="hidden sm:inline-block rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-4">
          
          {/* Navigation Section */}
          {filteredSections.length > 0 && (
            <div>
              <p className="px-2 pb-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Navigation
              </p>
              <div className="space-y-0.5">
                {filteredSections.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => navigateTo(item.selector)}
                    className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-sm text-foreground hover:bg-muted/70 transition-colors group cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-muted-foreground group-hover:text-foreground">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <ArrowRight className="size-3.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {filteredActions.length > 0 && (
            <div>
              <p className="px-2 pb-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                Actions &amp; Settings
              </p>
              <div className="space-y-0.5">
                {filteredActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => {
                      playClick();
                      action.onClick();
                    }}
                    className="w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-sm text-foreground hover:bg-muted/70 transition-colors group cursor-pointer"
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <span className="text-muted-foreground group-hover:text-foreground shrink-0">
                        {action.icon}
                      </span>
                      <span className="truncate">{action.label}</span>
                    </span>
                    {action.detail && (
                      <span className="font-mono text-[11px] text-muted-foreground truncate max-w-[170px]">
                        {action.detail}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredSections.length === 0 && filteredActions.length === 0 && (
            <div className="py-8 text-center text-xs text-muted-foreground">
              No matching commands found for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-3 py-2 border-t border-border bg-muted/30 flex items-center justify-between text-[11px] text-muted-foreground">
          <span>Harshin Kailas K · Portfolio Command Menu</span>
          <span className="font-mono">Use ↑↓ to navigate</span>
        </div>
      </div>
    </div>
  );
};
