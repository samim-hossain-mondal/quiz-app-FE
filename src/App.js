import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/welcome-page/WelcomePage';
import QuizPage from './pages/quiz-page/QuizPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </Router >
  );
}

export default App;
