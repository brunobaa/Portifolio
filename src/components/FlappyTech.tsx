import { useCallback, useEffect, useRef, useState } from 'react';
import GameFrame from './GameFrame';
import { loadBest, saveBest, setupCanvas } from './gameUtils';
import { useLanguage } from '../i18n/useLanguage';

const W = 300;
const H = 400;
const BIRD_X = 70;
const BIRD = 18;
const PIPE_W = 46;
const GAP = 125;
const SPEED = 2.3;
const GRAVITY = 0.42;
const JUMP = -7.2;
const SPACING = 170;
const BEST_KEY = 'flappyBest';

type Pipe = { x: number; gapY: number; passed: boolean };
type Status = 'idle' | 'playing' | 'over';

const newPipe = (x: number): Pipe => ({ x, gapY: 60 + Math.random() * (H - GAP - 120), passed: false });

const FlappyTech = () => {
  const { t } = useLanguage();
  const g = t.games;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bird = useRef({ y: H / 2, v: 0 });
  const pipes = useRef<Pipe[]>([]);
  const scoreRef = useRef(0);
  const [status, setStatus] = useState<Status>('idle');
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(() => loadBest(BEST_KEY));

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, W, H);

    // grade de fundo
    ctx.strokeStyle = 'rgba(148,163,184,0.07)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= W; x += 25) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y <= H; y += 25) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // canos
    pipes.current.forEach((p) => {
      const grad = ctx.createLinearGradient(p.x, 0, p.x + PIPE_W, 0);
      grad.addColorStop(0, '#1d4ed8');
      grad.addColorStop(1, '#3b82f6');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(p.x, -10, PIPE_W, p.gapY + 10, 6);
      ctx.roundRect(p.x, p.gapY + GAP, PIPE_W, H - p.gapY - GAP + 10, 6);
      ctx.fill();
    });

    // "pássaro"
    ctx.save();
    ctx.shadowColor = '#22d3ee';
    ctx.shadowBlur = 16;
    ctx.fillStyle = '#22d3ee';
    ctx.beginPath();
    ctx.roundRect(BIRD_X, bird.current.y, BIRD, BIRD, 5);
    ctx.fill();
    ctx.restore();
  }, []);

  const reset = () => {
    bird.current = { y: H / 2, v: 0 };
    pipes.current = [newPipe(W + 40), newPipe(W + 40 + SPACING)];
    scoreRef.current = 0;
    setScore(0);
  };

  const flap = () => {
    if (status !== 'playing') {
      reset();
      setStatus('playing');
    }
    bird.current.v = JUMP;
  };

  // Desenha o estado inicial
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = setupCanvas(canvas, W, H);
    if (!ctx) return;
    if (pipes.current.length === 0) pipes.current = [newPipe(W + 40)];
    draw(ctx);
  }, [draw]);

  // Laço do jogo
  useEffect(() => {
    if (status !== 'playing') return;
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const k = Math.min((now - last) / 16.67, 3);
      last = now;
      const b = bird.current;
      b.v += GRAVITY * k;
      b.y += b.v * k;

      pipes.current.forEach((p) => (p.x -= SPEED * k));
      if (pipes.current[0].x < -PIPE_W) pipes.current.shift();
      const lastPipe = pipes.current[pipes.current.length - 1];
      if (lastPipe.x < W - SPACING) pipes.current.push(newPipe(lastPipe.x + SPACING));

      let hit = b.y < 0 || b.y + BIRD > H;
      pipes.current.forEach((p) => {
        const overlapX = BIRD_X + BIRD > p.x && BIRD_X < p.x + PIPE_W;
        if (overlapX && (b.y < p.gapY || b.y + BIRD > p.gapY + GAP)) hit = true;
        if (!p.passed && p.x + PIPE_W < BIRD_X) {
          p.passed = true;
          scoreRef.current += 1;
          setScore(scoreRef.current);
        }
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

  const overlay =
    status === 'idle' ? (
      <button className="game-start" onClick={flap}>{g.start}</button>
    ) : status === 'over' ? (
      <>
        <p className="game-over">{g.flappy.over} · {score} {g.points}</p>
        <button className="game-start" onClick={flap}>{g.playAgain}</button>
      </>
    ) : null;

  return (
    <GameFrame file="flappy_tech.ts" hint={g.flappy.hint} score={score} best={best} overlay={overlay}>
      <canvas
        ref={canvasRef}
        className="game-canvas"
        tabIndex={0}
        aria-label={g.flappy.aria}
        onPointerDown={() => status === 'playing' && flap()}
        onKeyDown={(e) => {
          if (e.code === 'Space') {
            e.preventDefault();
            flap();
          }
        }}
      />
    </GameFrame>
  );
};

export default FlappyTech;
