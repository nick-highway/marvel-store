import React from 'react';
import './App.css';

interface Props {
    gotStarted: boolean,
    setGotStarted: Function
};

function StartJourneyButton({ gotStarted, setGotStarted }: Props) {
    function handleClick() {
        setGotStarted(!gotStarted);
    }

    return (
        <button onClick={handleClick} className="glow-on-hover" type="button">
            START JOURNEY!
        </button>
    );
}

export default StartJourneyButton;