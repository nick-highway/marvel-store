import logo from './logo/Marvel_Logo.svg.png';
import React, {Component} from "react";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {gotStarted: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            gotStarted: !prevState.gotStarted
        }));
    }

    render() {
        return (
            <div className="App">
                {!this.state.gotStarted &&
                    <button
                        onClick={this.handleClick}
                        className="glow-on-hover"
                        type="button">START JOURNEY!</button>
                }
                {this.state.gotStarted &&
                    <header className="App-header">
                        <div className="App-logo-header">
                            <img src={logo} alt="logo"/>
                            <p>
                                Marvel Comics Store.
                            </p>
                        </div>
                    </header>
                }
            </div>
        );
    }
}

export default App;
