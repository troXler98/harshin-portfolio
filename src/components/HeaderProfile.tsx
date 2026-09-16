import React, { useState, useEffect } from 'react';
import { Mail, Check, Copy } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProfileProps {
  playClick: () => void;
  onCopyEmail: () => void;
  copiedEmail: boolean;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({
  playClick,
  onCopyEmail,
  copiedEmail,
}) => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [showAltAvatar, setShowAltAvatar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex w-full items-start p-3 sm:p-4 gap-4">
      {/* Avatar Container with Switcher */}
      <div className="flex w-fit flex-col items-center gap-2 shrink-0">
        <div className="w-fit rounded-[8px] border border-border p-[2.7px] dark:border-neutral-700 bg-background/50 shadow-xs">
          <div className="relative box-border size-16 sm:size-20 md:size-21 overflow-hidden rounded-[7px] border border-border bg-neutral-100 dark:bg-neutral-800 p-0.5 select-none transition-all duration-300">
            {!showAltAvatar ? (
              // Real Profile Photo from GitHub
              <div className="w-full h-full rounded-[5px] overflow-hidden bg-neutral-200 dark:bg-neutral-800 relative">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-[5px] transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to monogram if image fails to load
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ) : (
              // Stylized Monogram Profile Graphic
              <div className="w-full h-full rounded-[5px] bg-gradient-to-br from-neutral-900 via-zinc-800 to-neutral-900 dark:from-zinc-900 dark:via-neutral-800 dark:to-black flex flex-col items-center justify-center text-white relative overflow-hidden border border-white/10">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:8px_8px]" />
                <span className="font-pixel text-lg sm:text-xl font-bold tracking-tight text-neutral-100 drop-shadow-sm">
                  HK
                </span>
                <span className="font-mono text-[7px] sm:text-[8px] uppercase tracking-wider text-blue-400 font-medium mt-0.5 text-center px-1">
                  MBA · Mktg &amp; Log
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Avatar Switcher Switch */}
        <button
          type="button"
          role="switch"
          aria-checked={showAltAvatar}
          onClick={() => {
            playClick();
            setShowAltAvatar(!showAltAvatar);
          }}
          aria-label="Toggle profile avatar mode"
          title="Toggle avatar badge style"
          className="relative h-[18px] w-8 shrink-0 cursor-pointer rounded-full border border-border bg-neutral-200 dark:bg-neutral-800 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span
            aria-hidden="true"
            className={`absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-white dark:bg-neutral-200 shadow-sm transition-all duration-200 ${
              showAltAvatar ? 'left-[16px] bg-blue-500' : 'left-[2px]'
            }`}
          />
        </button>
      </div>

      {/* Name, Cycling Roles & Direct Actions */}
      <div className="flex min-w-0 flex-1 flex-col gap-0 pt-1 sm:pt-2">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight text-neutral-800 md:text-2xl dark:text-neutral-50 truncate">
            {PERSONAL_INFO.name}
          </h1>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 shrink-0">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available
          </span>
        </div>

        {/* Animated Role Ticker */}
        <div className="flex min-h-6 items-center text-xs sm:text-sm font-medium text-muted-foreground mt-0.5">
          <div className="relative inline-block overflow-hidden h-5 sm:h-6 w-full">
            <span
              key={activeRoleIndex}
              className="absolute inset-0 flex items-center font-mono text-[11px] sm:text-[13px] text-neutral-600 dark:text-neutral-300 animate-fade-in truncate"
            >
              {PERSONAL_INFO.roles[activeRoleIndex]}
            </span>
          </div>
        </div>

        {/* Quick Location & Direct Action Buttons */}
        <div className="mt-2.5 flex flex-wrap items-center gap-2">
          {/* Email Button */}
          <a
            href={PERSONAL_INFO.links.email}
            onClick={playClick}
            data-tap-feedback
            className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 shadow-xs cursor-pointer"
          >
            <Mail className="size-3.5 shrink-0" />
            <span>Send email</span>
          </a>

          {/* Copy Email Shortcut */}
          <button
            type="button"
            onClick={onCopyEmail}
            data-tap-feedback
            title="Copy email address"
            className="border-border bg-background/80 hover:bg-muted text-foreground border inline-flex items-center justify-center gap-1 rounded-md px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-colors shadow-xs cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="size-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3 text-muted-foreground" />
                <span className="text-muted-foreground text-[11px]">{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>

          {/* LinkedIn Button */}
          <a
            href={PERSONAL_INFO.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            data-tap-feedback
            className="border-border bg-background/80 hover:bg-muted text-foreground border inline-flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-colors shadow-xs cursor-pointer"
          >
            <LinkedinIcon className="size-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  );
};
