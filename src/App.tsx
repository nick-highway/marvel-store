import logo from './logo/Marvel_Logo.svg.png'
import * as React from 'react'
import './App.css'
import {Component} from 'react';

interface IState {
  gotStarted: boolean;
}

class App extends Component<object, IState> {
  constructor(props: object) {
    super(props)

    this.state = {
      gotStarted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState: IState) => ({
      gotStarted: !prevState.gotStarted,
    }))
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
    )
  }
}

export default App
