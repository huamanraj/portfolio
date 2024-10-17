import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TerminalPortfolio = () => {
  const [terminalLineData, setTerminalLineData] = useState([]);
  const [command, setCommand] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null); // Reference for scrolling to the bottom

  // Focus the input field when the page is clicked
  useEffect(() => {
    const handleFocus = () => inputRef.current && inputRef.current.focus();
    window.addEventListener('click', handleFocus);

    return () => {
      window.removeEventListener('click', handleFocus);
    };
  }, []);

  // Initial terminal lines
  useEffect(() => {
    setTerminalLineData([
      { type: 'output', value: "Welcome to Aman Raj's Portfolio Terminal!" },
      { type: 'output', value: "Type 'help' to see available commands." },
    ]);
  }, []);

  // Scroll to the bottom whenever new content is added
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLineData]);

  const commands = {
    about: () => "I'm a BTech 3rd year student pursuing full-stack development with skills in JavaScript, React, Node.js, and more.",
    projects: () => `1. GitHub README Generator - AI-powered tool to create personalized GitHub readmes.
2. Personal Portfolio - XFCE desktop theme inspired responsive portfolio site.
3. E-commerce Website - Full-stack application with integrated payment gateway.`,
    contact: () => `Email: amanraj12.ar@gmail.com
GitHub: https://github.com/huamanraj
LinkedIn: https://linkedin.com/in/huamanraj`,
    skills: () => `Proficient in:
- JavaScript (React, Node.js)
- Python
- SQL
- Web development (HTML, CSS)
- XFCE Desktop Environment`,
    resume: () => "Resume available at: https://aman-raj.xyz/resume",
    github: () => "GitHub: https://github.com/huamanraj",
    linkedin: () => "LinkedIn: https://linkedin.com/in/huamanraj",
    clear: () => "",
    exit: () => {
      navigate('/');
      return "Exiting terminal... Redirecting to home page.";
    },
    help: () => `
      Available commands:
      about 
      projects 
      contact 
      skills 
      resume
      github 
      linkedin 
      clear 
      exit 
      help 
    `,
  };

  // Keyboard shortcuts mapping
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.ctrlKey && e.key === 'c') {
        const output = commands.exit();
        setTerminalLineData((prev) => [
          ...prev,
          { type: 'input', value: `portfolio $ exit` },
          { type: 'output', value: output },
        ]);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = command.trim().toLowerCase();
      const output = commands[trimmedInput]
        ? commands[trimmedInput]()
        : `Command not found: ${trimmedInput}. Type 'help' for available commands.`;

      setTerminalLineData((prev) => [
        ...prev,
        { type: 'input', value: `portfolio $ ${command}` },
        { type: 'output', value: output },
      ]);

      if (trimmedInput === 'clear') {
        setTimeout(() => setTerminalLineData([]), 0);
      }

      setCommand('');
    }
  };

  return (
    <div style={styles.wrapper} onClick={() => inputRef.current && inputRef.current.focus()}>
      <div style={styles.terminal}>
        <div style={styles.content}>
          {terminalLineData.map((line, index) => (
            <div key={index} style={line.type === 'input' ? styles.input : styles.output}>
              {line.value}
            </div>
          ))}
          <div ref={terminalEndRef} /> {/* Scroll target */}
        </div>
        <div style={styles.inputLine}>
          <span>portfolio $ </span>
          <input
            style={styles.inputBox}
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={handleInput}
            autoFocus
            ref={inputRef}
          />
          <span style={styles.cursor}>|</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    color: '#f0f0f0',
  },
  terminal: {
    width: '80%',
    height: '80%',
    backgroundColor: '#000',
    color: '#0f0',
    fontFamily: '"Courier New", Courier, monospace',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '5px',
    boxShadow: '0 0 20px rgba(0, 255, 0, 0.2)',
    overflowY: 'auto', // Allow vertical scrolling
    overflowX: 'hidden', // No horizontal scrolling (for mobile)
  },
  content: {
    flex: 1,
    whiteSpace: 'pre-wrap', // This enables word wrapping.
    wordWrap: 'break-word', // Ensures no word exceeds the width and causes horizontal scrolling.
  },
  inputLine: {
    display: 'flex',
    alignItems: 'center',
    color: '#0f0',
    paddingTop: '10px',
  },
  inputBox: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#0f0',
    flex: 1,
    fontSize: '16px',
    fontFamily: '"Courier New", Courier, monospace',
    outline: 'none',
  },
  input: {
    color: '#0f0',
  },
  output: {
    color: '#f0f0f0',
  },
  cursor: {
    color: '#0f0',
    marginLeft: '2px',
    animation: 'blink 1s step-end infinite',
  },
  '@keyframes blink': {
    '50%': {
      opacity: 0,
    },
  },
};

export default TerminalPortfolio;
