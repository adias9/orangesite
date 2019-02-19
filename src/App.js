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
            A freshly squeezed digital media orangization.<br/>
            <b>Focus</b> = AR and VR production.<br/>
            <b>Other</b> = Web and Mobile.<br/>
          </p>
          <a
            className="App-link"
            href="mailto:orangeinquire@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquiries?
          </a>
        </header>
      </div>
    );
  }
}

export default App;
