import React from 'react';
import './App.css';

type Props = {
    gotStarted: boolean,
    setGotStarted: Function
};

function StartJourneyButton(props: Props) {
    function handleClick() {
        props.setGotStarted(!props.gotStarted);
    }

    return (<button onClick={handleClick} className="glow-on-hover" type="button">
        START JOURNEY!
    </button>);
}

export default StartJourneyButton;