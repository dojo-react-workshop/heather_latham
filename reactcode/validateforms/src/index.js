import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

const Wrapper = () => {
    return (
      <div className="wrapper">
          <h1>form validation</h1>
          <App />
      </div>
    );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));


