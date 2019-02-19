import React, { Component } from 'react';
import logo from './orange-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <b>Freshly squeezed digital media production.</b><br/>
            • AR and VR • <br/>
            • Web and Mobile • <br/>
          </p>
          <a
            className="App-link"
            href="mailto:orangeinquire@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Need Advice? Have a Project? Want to Collab?
          </a>
        </header>
      </div>
    );
  }
}

export default App;
