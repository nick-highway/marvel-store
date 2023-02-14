import React, {useState} from 'react';
import './App.css';
import StartJourneyButton from './StartJourneyButton';
import MarvelHeader from './MarvelHeader';

function App() {
  const [gotStarted, setGotStarted] = useState(false);

  return (<div className="App">
      {
          gotStarted
              ? <StartJourneyButton gotStarted={gotStarted} setGotStarted={setGotStarted}/>
              : <MarvelHeader/>
      }
        </div>)

}

export default App;
