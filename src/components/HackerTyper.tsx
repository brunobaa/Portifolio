import { useState } from 'react';
import './HackerTyper.css';

const codeSnippets = [
  "function hackTheSystem() {",
  "  let password = '12345';",
  "  let accessGranted = false;",
  "  if (password === '12345') accessGranted = true;",
  "  console.log('Access Granted:', accessGranted);",
  "}",
  "hackTheSystem();",
];

const HackerTyper = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleKeyPress = () => {
    if (currentIndex < codeSnippets.join('\n').length) {
      const fullCode = codeSnippets.join('\n');
      setDisplayedCode(fullCode.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div
      className="hacker-typer-wrapper"
      tabIndex={0}
      onKeyDown={handleKeyPress}
    >
      <div className="hacker-typer-header">TERMINAL HACKER SIMULATION</div>
      <div className="hacker-typer-container">
        <pre className="hacker-typer-code">{displayedCode}</pre>
      </div>
    </div>
  );
};

export default HackerTyper;
