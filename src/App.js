import React, { Component } from 'react';
import Creator from './components/creator';
import Preview from './components/preview';
import Footer from './components/footer';
class App extends Component {
  constructor() {
    super();
    this.state = {
      preview: false,
      data: { general: {}, education: [], experience: [] },
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
          {this.state.preview ? 'Creator' : 'Preview'}
        </button>
        {this.state.preview ? (
          <Preview data={this.state.data} />
        ) : (
          <Creator setData={this.setData} data={this.state.data} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
