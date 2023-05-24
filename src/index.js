import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Quiz from './components/Quiz';
import { QuizProvider } from './contexts/quiz';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
