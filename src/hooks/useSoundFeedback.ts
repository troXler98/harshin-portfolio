import { useState, useEffect, useCallback, useRef } from 'react';

export function useSoundFeedback() {
  const [isMuted, setIsMuted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sound-muted');
      return saved === 'true';
    }
    return false;
  });

  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    localStorage.setItem('sound-muted', String(isMuted));
  }, [isMuted]);

  const initAudio = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
  };

  const playClick = useCallback((freq = 900, duration = 0.035, type: OscillatorType = 'sine') => {
    if (isMuted) return;

    try {
      initAudio();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Ignore audio synthesis errors
    }
  }, [isMuted]);

  const playPop = useCallback(() => {
    playClick(1200, 0.045, 'triangle');
  }, [playClick]);

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (isMuted) {
      // unmuting -> play test click
      setTimeout(() => playClick(1000, 0.04), 50);
    }
  };

  return {
    isMuted,
    toggleSound,
    playClick,
    playPop,
  };
}
