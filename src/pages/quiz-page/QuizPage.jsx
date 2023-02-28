import React,{useState, useEffect} from 'react';
import './QuizPage.css';
import QuizQuestion from '../../components/quiz-question/QuizQuestion';

export default function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([{}]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=7');
    const data = await response.json();
    setQuestions(data.results);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);
  const data = questions;
  const generateId = () => {
    let id= 1;
    data.map((question) => {
      question.id = id;
      id++;
    });
  };
  generateId();
  const onClickHandler = (e) => {
    e.target.style.backgroundColor = '#D6DBF5';
    const userAnswer = e.target.innerText;
    let id =0;
    data.map((question) => {
      if (question.correct_answer === userAnswer) {
        id = question.id;
      }
      else{
        question.incorrect_answers.map((option) => {
          if (option === userAnswer) {
            id = question.id;
          }
        });
      }
    });
    setUserAnswers([...userAnswers,{ id:id, userAnswer:userAnswer}]);
    console.log(userAnswers);
  };
  const calculateScore = () => {
    userAnswers.sort((a,b) => a.id - b.id);
    let score = 0;
    for(let i = 1; i<userAnswers.length; i++){

      if(userAnswers[i].userAnswer === data[i-1].correct_answer){
        score++;
      }
    }
    return score;
  };
  calculateScore();
  console.log(calculateScore());
  const checkAnswersClickHandler = () => {
    setButtonClicked(true);
    return (
      <div>
        <h1>Score: {calculateScore()}</h1>
      </div>
    );
  };
  return (
    <div className='quiz-body'>
      {data.map((question, index) => (
        <div className='quiz-question' key={index}>
          <QuizQuestion question={question} onClickHandler={onClickHandler}/>
        </div>
      ))}
      <div className='check-answers-btn'>
        <button onClick={checkAnswersClickHandler}>
          {buttonClicked ? (
            <div>
                Score: {calculateScore() }
              <button>Play Again</button>
            </div>
                
          ): 'Check Answers'}
        </button>
      </div>
    </div>
  );
}