import React from 'react';
import proptypes from 'prop-types';
import './QuizQuestion.css';

export default function QuizQuestion({question, onClickHandler}) {
  return (
    <div>
      <div className='quiz-question-text'>
        <a>{question.question}</a>
      </div>
      <div className='quiz-question-options'>
        <button onClick={onClickHandler}>{question.correct_answer}</button>
        {question.incorrect_answers.map((option, index) => (
          <div className='quiz-question-options' key={index}>
            <button onClick={onClickHandler}>{option}</button>
          </div>
        ))}
      </div>
      <div style={{marginTop: '3%'}}>
        <hr/>
      </div>  
    </div>
  );
}

QuizQuestion.propTypes = {
  question: proptypes.object,
  onClickHandler: proptypes.func,
};