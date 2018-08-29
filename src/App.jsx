import React, { Component } from 'react';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';
import Validation from './component/Validation';
import Char from './component/Char';
import './Style.css';

class App extends Component {
  state = {
    output: "",
    count: 0,
  }
  changeInputHandlre = (event) => {
    this.setState({
      output: event.target.value,
      count: event.target.value.length,
    })
  }

  clearInputHandlre = () => {
    this.setState({
      count: 0,
      output: ""
    })
  }

  render() {
    const { output } = { ...this.state };
    const showCharComponent = output.split('').map(p => <Char classes='inlineBox' value={p} />)
    return (
      <div className="container">
        <UserInput change={this.changeInputHandlre} value={this.state.output} classes = 'inputContainer' />
        <UserOutput value={this.state.count} />
        <Validation count={this.state.count} />
        <ul>
          {showCharComponent}
        </ul>
        <button onClick={this.clearInputHandlre}>Clear</button>
      </div>
    );
  }
};

export default App;
