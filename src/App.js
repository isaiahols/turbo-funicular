import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      namePlaceholder: '',
      count: 0
    };
    // Binding this this component
    this.submitName = this.submitName.bind(this);
  }

  submitName() {
    this.setState({
      name: this.state.namePlaceholder,
      namePlaceholder: ''
    });
  }

  render() {
    // Destructuring here to get vars out of state, and using 'let' instead of var
    let { name, namePlaceholder } = this.state;
    return (
      <div className="App">
        <div className="middleBox">
          <div className="centerTitle">
            {name === '' ? (
              <div>
                <input
                  value={namePlaceholder}
                  placeholder="Enter your name"
                  onChange={e =>
                    this.setState({ namePlaceholder: e.target.value })
                  }
                />
                <button onClick={() => this.submitName()}>Enter</button>
              </div>
            ) : (
              <span className="titleName">{name}</span>
            )}
          </div>
          <div style={{ display: 'flex' }}>
            <button
              className="incDecButton"
              onClick={() => this.setState({ count: this.state.count - 1 })}>
              Decrement
            </button>
            <span id="count">{this.state.count}</span>
            <button
              className="incDecButton"
              onClick={() => this.setState({ count: this.state.count + 1 })}>
              Increment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
