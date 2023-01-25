import * as React from 'react';
import './App.css';
import {useState} from 'react';
import StartJourneyButton from './StartJourneyButton';
import MarvelHeader from './MarvelHeader';

function App() {
  const [gotStarted, setGotStarted] = useState(false);

  if (!gotStarted) {
    return (<div className="App">
          <StartJourneyButton gotStarted={gotStarted} setGotStarted={setGotStarted}/>
        </div>)
  } 
      return (<div className="App">
          <MarvelHeader/>
      </div> )
  
}

export default App;
