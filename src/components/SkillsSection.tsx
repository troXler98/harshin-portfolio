import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Terminal, Layers, BarChart2, Languages } from 'lucide-react';

interface SkillsSectionProps {
  playClick: () => void;
  onSkillClick?: (skillName: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  playClick,
  onSkillClick,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = ['All', ...SKILL_GROUPS.map((g) => g.category)];

  const displayedGroups =
    activeCategory === 'All'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((g) => g.category === activeCategory);

  const handleSkillTap = (name: string) => {
    playClick();
    setSelectedSkill(name);
    onSkillClick?.(name);
    setTimeout(() => {
      setSelectedSkill((prev) => (prev === name ? null : prev));
    }, 1800);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Marketing & Logistics Operations':
        return <Layers className="size-3.5 text-blue-500" />;
      case 'Technical & IT Support':
        return <Terminal className="size-3.5 text-emerald-500" />;
      case 'Data Analysis & Tools':
        return <BarChart2 className="size-3.5 text-purple-500" />;
      default:
        return <Languages className="size-3.5 text-amber-500" />;
    }
  };

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5">
        <h2 id="skills-heading" className="scroll-mt-20 text-xl font-medium tracking-tight sm:text-2xl">
          Skills
        </h2>
        <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
          Competencies &amp; Tech
        </span>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1 px-4 pt-3 pb-1 border-b border-border/40">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              playClick();
              setActiveCategory(cat);
            }}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              activeCategory === cat
                ? 'bg-foreground text-background font-medium shadow-xs'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Badges */}
      <div className="p-4 sm:p-5 space-y-4">
        {displayedGroups.map((group) => (
          <div key={group.category} className="space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground/80">
              {getCategoryIcon(group.category)}
              <span>{group.category}</span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const isSelected = selectedSkill === skill.name;

                return (
                  <li key={skill.name} className="flex">
                    <button
                      type="button"
                      onClick={() => handleSkillTap(skill.name)}
                      data-tap-feedback
                      className={`focus-visible:ring-ring/50 border border-border inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium whitespace-nowrap outline-none transition-all select-none cursor-pointer shadow-xs ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-blue-400/50'
                          : skill.highlight
                          ? 'bg-background hover:border-foreground/40 text-foreground font-semibold'
                          : 'bg-muted/40 hover:border-foreground/30 text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {skill.highlight && (
                        <span className="size-1.5 rounded-full bg-blue-500 shrink-0" />
                      )}
                      <span>{skill.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
