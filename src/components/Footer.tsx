import React from 'react';
import { Search } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenSearch: () => void;
  playClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSearch, playClick }) => {
  return (
    <footer>
      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Credits & Copyright */}
      <div className="flex flex-col items-center justify-center py-6 px-4 text-center">
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
          Designed &amp; Developed for{' '}
          <span className="font-semibold text-foreground">{PERSONAL_INFO.name}</span>
          <br />
          <span className="font-mono text-[11px] text-muted-foreground/80">
            © {new Date().getFullYear()} · Malappuram, Kerala · MBA &amp; BCA Operations
          </span>
        </p>
      </div>

      <div aria-hidden="true" className="bg-border h-px w-full shrink-0" />

      {/* Decorative Bottom Dot Pattern Grid matching prathm.me */}
      <div className="screen-line-bottom relative w-full py-2 overflow-hidden">
        <div className="flex w-full items-center justify-center h-20 sm:h-28 opacity-40 bg-[radial-gradient(#71717a_1px,transparent_1px)] [background-size:12px_12px] dark:bg-[radial-gradient(#a1a1aa_1px,transparent_1px)]" />
      </div>

      {/* Mobile Floating Search Pill matching prathm.me */}
      <div className="fixed inset-x-0 bottom-6 z-40 mx-auto w-fit md:hidden">
        <button
          type="button"
          onClick={() => {
            playClick();
            onOpenSearch();
          }}
          className="inline-flex items-center justify-center whitespace-nowrap text-xs font-medium h-9 bg-background/95 gap-2 rounded-full border border-border px-5 shadow-lg backdrop-blur-md transition-transform active:scale-95 text-foreground cursor-pointer"
        >
          <Search className="size-3.5" />
          <span>Search &amp; Menu (⌘K)</span>
        </button>
      </div>
    </footer>
  );
};
