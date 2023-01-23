import { Component } from 'react';
import logo from './logo/Marvel_Logo.svg.png';
import './App.css';

type State = {
  gotStarted: boolean;
};

class App extends Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      gotStarted: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState: State) => ({
      gotStarted: !prevState.gotStarted,
    }));
  }

  render() {
    return (
      <div className='App'>
        {!this.state.gotStarted && (
          <button onClick={this.handleClick} className='glow-on-hover' type='button'>
            START JOURNEY!
          </button>
        )}
        {this.state.gotStarted && (
          <header className='App-header'>
            <div className='App-logo-header'>
              <img src={logo} alt='logo' />
              <p>Marvel Comics Store.</p>
            </div>
          </header>
        )}
      </div>
    );
  }
}

export default App;
