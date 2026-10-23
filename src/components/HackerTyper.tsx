import { useEffect, useRef, useState } from 'react';
import GameFrame from './GameFrame';

const script = `#!/bin/bash
# diagnostico.sh — rotina de suporte N2

echo "[*] Verificando conectividade..."
ping -c 4 gateway.local
> 4 pacotes enviados, 4 recebidos, 0% perda

echo "[*] Consultando usuário no AD..."
Get-ADUser bruno.andrade -Properties *
> Enabled: True | LockedOut: False

echo "[*] Varredura de malware..."
scan --deep --quarantine C:\\
> 1 ameaça isolada em quarentena

echo "[*] Checando TPM para Windows 11..."
tpm.msc --status
> TPM 2.0 pronto ✔

echo "[✔] Chamado resolvido. Próximo!"
`;

const CHARS_PER_KEY = 3;

const HackerTyper = () => {
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
    <GameFrame file="diagnostico.sh" hint={done ? 'Tecle para reiniciar' : 'Digite qualquer tecla ou toque'}>
      <div
        ref={screenRef}
        className="terminal-screen"
        tabIndex={0}
        role="textbox"
        aria-label="Terminal interativo: digite para escrever o script"
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
        {pos === 0 && <p className="terminal-placeholder">Clique aqui e comece a digitar…</p>}
      </div>
    </GameFrame>
  );
};

export default HackerTyper;
