import React, { Component } from 'react';
import './App.css';
import Read from './Read'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }

  render() {
    return (
      <div>

        <div className = "main_div">
          <button className="button" onClick={this.IncrementItem}>Increment</button>
          <button className="button" onClick={this.DecreaseItem}>Decrement</button>
          { this.state.show ? <h2 className = "num">{ this.state.clicks }</h2> : '' }
        </div>
        <Read/>
      </div>


    );
  }
}

export default App;
