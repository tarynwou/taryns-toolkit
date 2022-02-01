import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function About() {
  return (
    <div>
      <h1>Hi, I'm Taryn</h1>
      <p>I'm a second-year business and computer science student at the University of British Columbia.</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <About />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

