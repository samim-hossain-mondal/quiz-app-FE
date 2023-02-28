import React from 'react';
import {useNavigate} from 'react-router-dom';
import './WelcomePage.css';

export default function WelcomePage() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/quiz');
  };

  return (
    <div className='quiz-app'>
      <div className='quiz-app-name'>
        <a>Quizzical</a>
      </div>
      <div className='quiz-app-desc'>
        <a>Some description if needed</a>
      </div>
      <div className='quiz-app-btn'>
        <button onClick={clickHandler}>Start quiz</button>
      </div>
    </div>
  );
}