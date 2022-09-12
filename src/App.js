import React, { Component } from 'react';
import Creator from './components/creator';
import Preview from './components/preview';
class App extends Component {
  constructor() {
    super();
    this.state = {
      preview: false,
      data: {},
    };
  }
  handleClick = () => {
    this.setState({
      preview: !this.state.preview,
    });
  };
  setData = data => {
    this.setState({
      data: data,
    });
  };
  render() {
    return (
      <div className="app">
        <h1>CV Creator</h1>
        <button type="button" onClick={this.handleClick}>
          Preview
        </button>
        {this.state.preview ? (
          <Preview data={this.state.data} />
        ) : (
          <Creator setData={this.setData} />
        )}
      </div>
    );
  }
}

export default App;
