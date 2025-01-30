import { useState, useEffect } from 'react';
import './HackerTyper.css';

const HackerTyper = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const hackerCode = `
    function hackTheSystem() {
      let password = '12345';
      let access = false;
      while (!access) {
        if (password === 'opensesame') {
          access = true;
          console.log('Access Granted!');
        }
      }
    }
  `;

  useEffect(() => {
    const handleKeyPress = () => {
      setText((prev) => prev + hackerCode[index]);
      setIndex((prev) => prev + 1);

      if (index >= hackerCode.length) {
        setIndex(0);
        setText('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [index]);

  return (
    <div className="hacker-typer-container">
      <h2>Quer se sentir um hacker?</h2>
      <div className="hacker-typer-output">
        <pre>{text}</pre>
      </div>
    </div>
  );
};

export default HackerTyper;