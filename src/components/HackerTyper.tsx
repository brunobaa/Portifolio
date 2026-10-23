import { useEffect, useRef, useState } from 'react';
import GameFrame from './GameFrame';
import { useLanguage } from '../i18n/useLanguage';

const CHARS_PER_KEY = 3;

const HackerTyper = () => {
  const { t, lang } = useLanguage();
  const text = t.games.terminal;
  const script = text.script;
  const [pos, setPos] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);
  const done = pos >= script.length;

  const advance = (n = CHARS_PER_KEY) => setPos((p) => (p >= script.length ? 0 : Math.min(script.length, p + n)));

  // Mantém a última linha visível
  useEffect(() => {
    const el = screenRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [pos]);

  return (
    <GameFrame file={lang === 'pt' ? 'diagnostico.sh' : 'diagnostics.sh'} hint={done ? text.hintDone : text.hint}>
      <div
        ref={screenRef}
        className="terminal-screen"
        tabIndex={0}
        role="textbox"
        aria-label={text.aria}
        onKeyDown={(e) => {
          if (e.key === 'Tab') return;
          e.preventDefault();
          advance();
        }}
        onPointerDown={() => advance(12)}
      >
        <pre>
          {script.slice(0, pos)}
          <span className="terminal-caret" />
        </pre>
        {pos === 0 && <p className="terminal-placeholder">{text.placeholder}</p>}
      </div>
    </GameFrame>
  );
};

export default HackerTyper;
