import React, { Component } from 'react';
import Creator from './components/creator';
import Preview from './components/preview';
class App extends Component {
  constructor() {
    super();
    this.state = {
      preview: false,
    };
  }
  handleClick = () => {
    this.setState({
      preview: !this.state.preview,
    });
  };
  render() {
    return (
      <div className="app">
        <p>Hello</p>
        <button type="button" onClick={this.handleClick}>
          Preview
        </button>
        {this.state.preview ? <Preview /> : <Creator />}
      </div>
    );
  }
}

export default App;
