import React, { useState } from 'react';
import './App.css'; 
const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      try {
        const sanitized = display.replace(/÷/g, '/');
        setDisplay(eval(sanitized).toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === 'Simeon') {
      setDisplay('Ken-zhin Simeon');
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    '7', '8', '9', '+',
    '4', '5', '6', '-',
    '1', '2', '3', '*',
    '0', '÷', '=', 'C',
  ];

  return (
    <div className="calculator-container">
      <h2>Calculator of Ken-zhin Simeon - IT3A</h2>
      <input type="text" className="display" value={display} readOnly />
      <div className="button-grid">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
      <button className="surname-button" onClick={() => handleClick('Simeon')}>
        Simeon
      </button>
    </div>
  );
};

export default Calculator;