import { useCallback, useEffect, useRef, useState } from 'react';
import GameFrame from './GameFrame';
import { loadBest, saveBest, setupCanvas } from './gameUtils';
import { useLanguage } from '../i18n/useLanguage';

const W = 300;
const H = 400;
const SHIP_W = 30;
const SHIP_H = 26;
const SHIP_Y = H - 46;
const SHIP_SPEED = 5;
const BEST_KEY = 'astroBest';

type Meteor = { x: number; y: number; r: number; v: number };
type Star = { x: number; y: number; s: number };
type Status = 'idle' | 'playing' | 'over';

const stars: Star[] = Array.from({ length: 40 }, () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  s: Math.random() * 1.5 + 0.3,
}));

const AstroDodge = () => {
  const { t } = useLanguage();
  const g = t.games;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shipX = useRef(W / 2 - SHIP_W / 2);
  const targetX = useRef<number | null>(null);
  const keys = useRef({ left: false, right: false });
  const meteors = useRef<Meteor[]>([]);
  const scoreRef = useRef(0);
  const [status, setStatus] = useState<Status>('idle');
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => loadBest(BEST_KEY));

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, W, H);

    ctx.fillStyle = 'rgba(230,237,246,0.6)';
    stars.forEach((st) => ctx.fillRect(st.x, st.y, st.s, st.s));

    meteors.current.forEach((m) => {
      ctx.save();
      ctx.shadowColor = '#8b5cf6';
      ctx.shadowBlur = 12;
      ctx.fillStyle = '#8b5cf6';
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    const x = shipX.current;
    ctx.save();
    ctx.shadowColor = '#22d3ee';
    ctx.shadowBlur = 16;
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.moveTo(x + SHIP_W / 2, SHIP_Y);
    ctx.lineTo(x + SHIP_W, SHIP_Y + SHIP_H);
    ctx.lineTo(x, SHIP_Y + SHIP_H);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }, []);

  const start = () => {
    shipX.current = W / 2 - SHIP_W / 2;
    targetX.current = null;
    meteors.current = [];
    scoreRef.current = 0;
    setScore(0);
    setStatus('playing');
    canvasRef.current?.focus();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = setupCanvas(canvas, W, H);
    if (ctx) draw(ctx);
  }, [draw]);

  // Setas só controlam a nave durante a partida, sem rolar a página
  useEffect(() => {
    if (status !== 'playing') return;
    const onKey = (down: boolean) => (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        keys.current[e.key === 'ArrowLeft' ? 'left' : 'right'] = down;
        targetX.current = null;
      }
    };
    const onDown = onKey(true);
    const onUp = onKey(false);
    window.addEventListener('keydown', onDown);
    window.addEventListener('keyup', onUp);
    return () => {
      window.removeEventListener('keydown', onDown);
      window.removeEventListener('keyup', onUp);
      keys.current = { left: false, right: false };
    };
  }, [status]);

  useEffect(() => {
    if (status !== 'playing') return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let last = performance.now();
    let elapsed = 0;
    let spawnIn = 0;

    const tick = (now: number) => {
      const k = Math.min((now - last) / 16.67, 3);
      last = now;
      elapsed += k;
      const difficulty = 1 + elapsed / 900;

      // movimento da nave: teclado ou dedo/mouse
      if (keys.current.left) shipX.current -= SHIP_SPEED * k;
      if (keys.current.right) shipX.current += SHIP_SPEED * k;
      if (targetX.current !== null) {
        shipX.current += (targetX.current - SHIP_W / 2 - shipX.current) * 0.25 * k;
      }
      shipX.current = Math.max(0, Math.min(W - SHIP_W, shipX.current));

      stars.forEach((st) => {
        st.y += st.s * 0.6 * k * difficulty;
        if (st.y > H) st.y = 0;
      });

      spawnIn -= k;
      if (spawnIn <= 0) {
        const r = 8 + Math.random() * 10;
        meteors.current.push({ x: r + Math.random() * (W - 2 * r), y: -r, r, v: (2 + Math.random() * 1.5) * difficulty });
        spawnIn = Math.max(14, 42 / difficulty);
      }

      let hit = false;
      meteors.current = meteors.current.filter((m) => {
        m.y += m.v * k;
        const cx = Math.max(shipX.current, Math.min(m.x, shipX.current + SHIP_W));
        const cy = Math.max(SHIP_Y + 6, Math.min(m.y, SHIP_Y + SHIP_H));
        if ((m.x - cx) ** 2 + (m.y - cy) ** 2 < (m.r * 0.85) ** 2) hit = true;
        if (m.y - m.r > H) {
          scoreRef.current += 1;
          setScore(scoreRef.current);
          return false;
        }
        return true;
      });

      draw(ctx);

      if (hit) {
        setStatus('over');
        setBest((prev) => {
          const next = Math.max(prev, scoreRef.current);
          saveBest(BEST_KEY, next);
          return next;
        });
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [status, draw]);

  const onPointer = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (status !== 'playing') return;
    const rect = e.currentTarget.getBoundingClientRect();
    targetX.current = ((e.clientX - rect.left) / rect.width) * W;
  };

  const overlay =
    status === 'idle' ? (
      <button className="game-start" onClick={start}>{g.start}</button>
    ) : status === 'over' ? (
      <>
        <p className="game-over">{g.astro.over} · {score} {g.points}</p>
        <button className="game-start" onClick={start}>{g.playAgain}</button>
      </>
    ) : null;

  return (
    <GameFrame file="astro_dodge.ts" hint={g.astro.hint} score={score} best={best} overlay={overlay}>
      <canvas
        ref={canvasRef}
        className="game-canvas touch-none"
        tabIndex={0}
        aria-label={g.astro.aria}
        onPointerMove={onPointer}
        onPointerDown={onPointer}
      />
    </GameFrame>
  );
};

export default AstroDodge;
