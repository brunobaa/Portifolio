import type { ReactNode } from 'react';

type GameFrameProps = {
  file: string;
  hint: string;
  score?: number;
  best?: number;
  overlay?: ReactNode;
  children: ReactNode;
};

// Moldura de "janela" compartilhada pelos mini-jogos
const GameFrame = ({ file, hint, score, best, overlay, children }: GameFrameProps) => (
  <div className="game-window">
    <div className="game-bar">
      <span className="dots"><i /><i /><i /></span>
      <span className="game-file">{file}</span>
    </div>
    <div className="game-screen">
      {children}
      {overlay && <div className="game-overlay">{overlay}</div>}
    </div>
    <div className="game-footer">
      <span>{hint}</span>
      {score !== undefined && (
        <span className="game-score">
          <b>{score}</b> pts · recorde <b>{best ?? 0}</b>
        </span>
      )}
    </div>
  </div>
);

export default GameFrame;
