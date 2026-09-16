import React, { useEffect, useRef } from 'react';

interface InteractiveHeroCanvasProps {
  isDark: boolean;
}

export const InteractiveHeroCanvas: React.FC<InteractiveHeroCanvasProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 700);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 120);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initDots();
    };

    window.addEventListener('resize', handleResize);

    const spacing = 16;
    let dots: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];

    const initDots = () => {
      dots = [];
      const cols = Math.floor(width / spacing);
      const rows = Math.floor(height / spacing);
      const offsetX = (width - cols * spacing) / 2 + spacing / 2;
      const offsetY = (height - rows * spacing) / 2 + spacing / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + i * spacing;
          const y = offsetY + j * spacing;
          dots.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    initDots();

    let mouseX = -9999;
    let mouseY = -9999;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const dotColor = isDark ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ';

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Ambient soft sine wave
        const wave = Math.sin((dot.originX * 0.05) + (frame * 0.02) + (dot.originY * 0.05)) * 1.5;

        // Mouse distance
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 70;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 7;
          dot.vx -= (dx / dist) * force;
          dot.vy -= (dy / dist) * force;
        }

        // Spring back to origin
        dot.vx += (dot.originX - dot.x) * 0.12;
        dot.vy += (dot.originY + wave - dot.y) * 0.12;

        // Damping
        dot.vx *= 0.82;
        dot.vy *= 0.82;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Opacity and radius based on distance to mouse
        const isHovered = dist < maxDist;
        const opacity = isHovered ? 0.65 : 0.18;
        const radius = isHovered ? 1.6 : 1.1;

        ctx.fillStyle = `${dotColor}${opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="screen-line-bottom h-20 w-full sm:h-28 overflow-hidden relative select-none">
      <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
    </div>
  );
};
