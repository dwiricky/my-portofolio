import { useRef, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

/* ─────────────────────────────────────────────────────────────
   Animated "constellation / plexus" background — Canvas 2D, no
   external libraries. Drifting particles linked by fading lines,
   with a subtle glow that reacts to the cursor. Theme-aware,
   pauses when the tab is hidden, respects prefers-reduced-motion.
   ───────────────────────────────────────────────────────────── */

const PALETTE = {
  dark:  { dot: '0,212,255',  line: '129,140,248', dotA: 0.45, lineA: 0.26, mouse: '0,212,255', mouseA: 0.45 },
  light: { dot: '0,153,204',  line: '109,40,217',  dotA: 0.30, lineA: 0.14, mouse: '0,153,204', mouseA: 0.30 },
};

export default function ConstellationBackground() {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const themeRef = useRef(isDark);
  themeRef.current = isDark;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0, h = 0, dpr = 1;
    let particles = [];
    let raf = 0;
    const mouse = { x: null, y: null };

    const LINK = 120;        // px distance to link two particles
    const MOUSE_LINK = 170;  // px distance to link a particle to cursor

    const palette = () => PALETTE[themeRef.current ? 'dark' : 'light'];

    const initParticles = () => {
      const count = Math.min(88, Math.max(28, Math.floor((w * h) / 19000)));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: reduceMotion ? 0 : (Math.random() - 0.5) * 0.35,
          vy: reduceMotion ? 0 : (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.5 + 0.6,
        });
      }
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const draw = () => {
      const c = palette();
      ctx.clearRect(0, 0, w, h);

      // update + draw dots
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20; else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20; else if (p.y > h + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.dot},${c.dotA})`;
        ctx.fill();
      }

      // links between particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const alpha = (1 - dist / LINK) * c.lineA;
            ctx.strokeStyle = `rgba(${c.line},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // links to cursor
      if (mouse.x !== null) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MOUSE_LINK) {
            const alpha = (1 - dist / MOUSE_LINK) * c.mouseA;
            ctx.strokeStyle = `rgba(${c.mouse},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    };

    const frame = () => {
      draw();
      raf = requestAnimationFrame(frame);
    };

    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };
    const play = () => { if (!raf && !reduceMotion) frame(); };

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = null; mouse.y = null; };
    const onVisibility = () => (document.hidden ? stop() : play());

    resize();
    if (reduceMotion) {
      draw(); // single static frame
    } else {
      frame();
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseout', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
