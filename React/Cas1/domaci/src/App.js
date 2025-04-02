import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const currentHour = new Date().getHours()
  let divStyle = {
    backgroundColor: currentHour >=20 || currentHour <= 7 ? '#10375C' : '#EB8317',
    padding: '20px',
    marginTop: '20px',
    color: 'white',
  }

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Learn React
              </a>
              <div style={divStyle}>
                  Ovo je neki div
              </div>
          </header>
      </div>
  );
}

export default App;

