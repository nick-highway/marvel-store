import * as React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [gotStarted, setGotStarted] = useState(false);

  function handleClick() {
    setGotStarted(!gotStarted);
  }

  return (
      <div className="App">
        {!gotStarted && (
            <button onClick={handleClick} className="glow-on-hover" type="button">
              START JOURNEY!
            </button>
        )}
        {gotStarted && (
            <header className="App-header">
              <div className="App-logo-header">
                <p>Marvel Comics Store.</p>
              </div>
            </header>
        )}
      </div>
  );
}

export default App;
