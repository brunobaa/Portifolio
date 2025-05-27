import { useEffect, useRef, useState } from 'react';
import './AstroDodge.css';

const AstroDodge = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem('astroHighScore')) || 0
  );
  const [shipX, setShipX] = useState(150);
  const shipWidth = 40;
  const shipHeight = 20;
  const [meteors, setMeteors] = useState([{ x: Math.random() * 300, y: -50 }]);

  // useRef to hold dynamic speed
  const speedRef = useRef(5);

  // Increase speed every second when playing
  useEffect(() => {
    let speedInterval: number;
    if (isPlaying) {
      // reset speed on new game
      speedRef.current = 5;
      speedInterval = window.setInterval(() => {
        speedRef.current += 0.7;
      }, 1000);
    }
    return () => {
      window.clearInterval(speedInterval);
    };
  }, [isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 300;
    canvas.height = 400;

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 60;
    const frameDuration = 1000 / fps;

    const drawShip = () => {
      ctx.fillStyle = '#00ff00';
      ctx.fillRect(shipX, canvas.height - 30, shipWidth, shipHeight);
    };

    const drawMeteors = () => {
      ctx.fillStyle = '#ff0000';
      meteors.forEach((meteor) => {
        ctx.fillRect(meteor.x, meteor.y, 20, 20);
      });
    };

    const drawScore = () => {
      ctx.fillStyle = '#fff';
      ctx.font = '16px Arial';
      ctx.fillText(`Score: ${score} | High Score: ${highScore}`, 10, 20);
    };

    const checkCollision = () => {
      meteors.forEach((meteor) => {
        if (
          meteor.y + 20 > canvas.height - 30 &&
          meteor.x < shipX + shipWidth &&
          meteor.x + 20 > shipX
        ) {
          setIsPlaying(false);
          setScore(0);
          setShipX(150);
          setMeteors([{ x: Math.random() * 300, y: -50 }]);
        }
      });
    };

    const updateGame = (time: number) => {
      if (time - lastTime < frameDuration) {
        animationFrameId = requestAnimationFrame(updateGame);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setMeteors((prevMeteors) => {
        const updatedMeteors = prevMeteors.map((meteor) => ({
          ...meteor,
          y: meteor.y + speedRef.current,
        }));
        if (updatedMeteors[0].y > canvas.height) {
          updatedMeteors.shift();
          updatedMeteors.push({ x: Math.random() * 280, y: -20 });
          setScore((prevScore) => {
            const newScore = prevScore + 1;
            if (newScore > highScore) {
              setHighScore(newScore);
              localStorage.setItem('astroHighScore', newScore.toString());
            }
            return newScore;
          });
        }
        return updatedMeteors;
      });

      drawShip();
      drawMeteors();
      drawScore();
      checkCollision();
      animationFrameId = requestAnimationFrame(updateGame);
    };

    if (isPlaying) {
      updateGame(0);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, score, highScore, shipX, meteors]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && shipX > 0) setShipX((prev) => prev - 20);
    if (e.key === 'ArrowRight' && shipX < 260) setShipX((prev) => prev + 20);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shipX]);

  return (
    <div className="astro-container">
      <h2>Astro Dodge</h2>
      <canvas ref={canvasRef}></canvas>
      <p>Score: {score} | High Score: {highScore}</p>
      {!isPlaying && (
        <button onClick={() => setIsPlaying(true)} className="start-btn">
          Start
        </button>
      )}
    </div>
  );
};

export default AstroDodge;
