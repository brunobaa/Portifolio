import { useEffect, useRef, useState } from 'react';
import './FlappyTech.css';

const FlappyTech = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem('highScore')) || 0
  );
  let birdY = 150;
  let velocity = 0;
  const gravity = 0.6;
  const jump = -9;
  let pipes = [{ x: 300, height: Math.random() * 200 + 50 }];

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 400;

    const drawBird = () => {
      ctx.fillStyle = "#00ff00";
      ctx.fillRect(50, birdY, 20, 20);
    };

    const drawPipes = () => {
      ctx.fillStyle = "#ff0000";
      pipes.forEach((pipe) => {
        ctx.fillRect(pipe.x, 0, 30, pipe.height);
        ctx.fillRect(pipe.x, pipe.height + 100, 30, canvas.height);
      });
    };

    const drawScore = () => {
      ctx.fillStyle = "#fff";
      ctx.font = "16px Arial";
      ctx.fillText(`Score: ${score} | High Score: ${highScore}`, 10, 20);
    };

    const checkCollision = () => {
      pipes.forEach((pipe) => {
        if (
          (50 < pipe.x + 30 && 50 + 20 > pipe.x && birdY < pipe.height) ||
          (50 < pipe.x + 30 && 50 + 20 > pipe.x && birdY + 20 > pipe.height + 100)
        ) {
          setIsPlaying(false);
          setScore(0); // Resetar pontuação ao colidir
        }
      });
    };

    const update = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      velocity += gravity;
      birdY += velocity;
      pipes.forEach((pipe) => (pipe.x -= 2));
      if (pipes[0].x < -30) {
        pipes.shift();
        pipes.push({ x: canvas.width, height: Math.random() * 200 + 50 });
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          if (newScore > highScore) {
            setHighScore(newScore);
            localStorage.setItem('highScore', newScore.toString());
          }
          return newScore;
        });
      }
      drawBird();
      drawPipes();
      drawScore();
      checkCollision();
      if (birdY > canvas.height || birdY < 0) {
        setIsPlaying(false);
        setScore(0); 
      }
    };

    let interval: number;
    if (isPlaying) interval = setInterval(update, 30);
    return () => clearInterval(interval);
  }, [isPlaying, score, highScore]);

  const handleJump = () => {
    velocity = jump;
  };

  return (
    <div className="flappy-container" onClick={handleJump}>
      <h2>Flappy Tech</h2>
      <canvas ref={canvasRef}></canvas>
      <p>Score: {score} | High Score: {highScore}</p>
      {!isPlaying && (
        <button onClick={() => setIsPlaying(true)} className="start-btn">Start</button>
      )}
    </div>
  );
};

export default FlappyTech;
