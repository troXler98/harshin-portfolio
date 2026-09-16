import React from 'react';
import { FileText, Send, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConnectSectionProps {
  playClick: () => void;
  onOpenResumeModal: () => void;
  onScrollToContact: () => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({
  playClick,
  onOpenResumeModal,
  onScrollToContact,
}) => {
  const connectItems = [
    {
      label: 'Resume',
      icon: <FileText className="size-3.5 shrink-0" />,
      onClick: onOpenResumeModal,
      isExternal: false,
    },
    {
      label: 'Contact',
      icon: <Send className="size-3.5 shrink-0" />,
      onClick: onScrollToContact,
      isExternal: false,
    },
    {
      label: 'LinkedIn',
      icon: <LinkedinIcon className="size-3.5 shrink-0" />,
      href: PERSONAL_INFO.links.linkedin,
      isExternal: true,
    },
    {
      label: 'GitHub',
      icon: <GithubIcon className="size-3.5 shrink-0" />,
      href: PERSONAL_INFO.links.github,
      isExternal: true,
    },
    {
      label: 'Email',
      icon: <Mail className="size-3.5 shrink-0" />,
      href: PERSONAL_INFO.links.email,
      isExternal: true,
    },
  ];

  return (
    <section aria-labelledby="connect-heading">
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 id="connect-heading" className="scroll-mt-20 text-xl font-medium tracking-tight sm:text-2xl">
          Connect
        </h2>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Links &amp; Channels
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-2 px-4 py-5 sm:px-5 sm:grid-cols-3 md:grid-cols-5">
        {connectItems.map((item) => (
          <li key={item.label} className="flex min-w-0">
            {item.href ? (
              <a
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={playClick}
                data-tap-feedback
                className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-md border border-transparent px-2.5 py-1.5 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 w-full shadow-xs cursor-pointer"
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  playClick();
                  item.onClick?.();
                }}
                data-tap-feedback
                className="focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-md border border-transparent px-2.5 py-1.5 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 w-full shadow-xs cursor-pointer"
              >
                {item.icon}
                <span className="truncate">{item.label}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
