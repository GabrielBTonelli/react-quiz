import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Quiz from './components/Quiz';

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>,
  document.getElementById("root")
);
