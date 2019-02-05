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
            Freshly squeezed AR and VR content production. <br/>
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
