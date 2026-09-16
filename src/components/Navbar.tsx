import React, { useState } from 'react';
import { Search, Volume2, VolumeX, Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  onOpenSearch: () => void;
  playClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  isMuted,
  onToggleSound,
  onOpenSearch,
  playClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    playClick();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 isolate z-50 w-full pt-1 bg-background/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto w-full px-4 md:max-w-portfolio md:px-0">
        <div className="screen-line-top screen-line-bottom relative flex w-full items-center justify-between gap-2 px-3 py-2 sm:px-4">
          
          {/* Logo / Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              playClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px] group"
          >
            <span className="font-pixel text-xl sm:text-2xl leading-none tracking-wider uppercase font-bold text-foreground group-hover:opacity-80 transition-opacity">
              HARSHIN
            </span>
            <span className="size-1.5 rounded-full bg-blue-500 animate-pulse-subtle" />
            <span className="sr-only">Harshin - Home</span>
          </a>

          {/* Desktop Navigation & Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Main" className="hidden items-center gap-4 md:flex">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors outline-none focus-visible:ring-2 focus-visible:ring-foreground/20 rounded px-1.5 py-0.5 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              {/* Command Palette Trigger */}
              <button
                type="button"
                onClick={() => {
                  playClick();
                  onOpenSearch();
                }}
                className="text-muted-foreground hover:text-foreground hover:border-foreground/20 border-border bg-background/80 inline-flex h-7 items-center gap-2 rounded-full border px-2.5 text-xs transition-colors outline-none focus-visible:ring-2 cursor-pointer shadow-xs"
              >
                <Search className="size-3.5" />
                <span className="font-normal text-[11px]">Search</span>
                <kbd className="bg-muted text-muted-foreground rounded px-1 py-px font-mono text-[10px] leading-4 border border-border/50">
                  ⌘K
                </kbd>
              </button>
            </nav>

            <span className="bg-border hidden h-4 w-px md:block" aria-hidden="true" />

            {/* Audio & Theme Switchers */}
            <div className="flex h-8 items-center gap-0.5 rounded-full bg-muted/60 p-0.5 border border-border/60">
              {/* Sound Toggle */}
              <button
                type="button"
                onClick={() => {
                  onToggleSound();
                }}
                title={isMuted ? 'Unmute sounds' : 'Mute sounds'}
                aria-label={isMuted ? 'Unmute sound effects' : 'Mute sound effects'}
                className={`flex size-7 cursor-pointer items-center justify-center rounded-full transition-colors ${
                  !isMuted ? 'text-foreground bg-background shadow-xs' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={() => {
                  playClick();
                  onToggleTheme();
                }}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle theme"
                className="flex size-7 cursor-pointer items-center justify-center rounded-full text-foreground hover:bg-background/80 transition-colors shadow-xs"
              >
                {isDark ? (
                  <Sun className="size-3.5 text-amber-400" />
                ) : (
                  <Moon className="size-3.5 text-zinc-700" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="border-border border-l pl-1 md:hidden">
              <button
                onClick={() => {
                  playClick();
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="flex size-8 items-center justify-center rounded-full text-foreground hover:bg-muted transition-colors cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-border bg-background px-4 py-3 space-y-2 animate-fade-in">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-border/50">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm py-1.5 px-2 rounded-md hover:bg-muted text-foreground/90 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between text-xs py-2 px-2.5 rounded-md bg-muted text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <Search className="size-3.5" /> Quick search & shortcuts
              </span>
              <kbd className="font-mono text-[10px]">⌘K</kbd>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
