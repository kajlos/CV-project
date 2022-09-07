import React from 'react';
export default class Education extends React.Component {
  handleClick = () => {};
  render() {
    return (
      <div>
        <h2>Education</h2>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
