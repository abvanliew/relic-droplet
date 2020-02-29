import React from 'react';
import './App.css';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class="grid">
            <div class="header">
              <Header />
            </div>
            <div class="error">Error</div>
            <div class="side">left</div>
            <div class="main">Main text goes here</div>
            <div class="side">right</div>
          </div>

      </React.Fragment>
    );
  }
}

export default App;
