/* eslint-disable react/prop-types */
// Faq.js
import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file for styling

const Faq = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="header">
        <h3>{question}</h3>
        <button className="toggle-btn" onClick={toggleAnswer}>
          {isOpen ? <span>&times;</span> : <span>&#43;</span>}
        </button>
      </div>
      {isOpen && <p className="answer">{answer}</p>}
    </div>
  );
};

export default Faq;






