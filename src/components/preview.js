import React from 'react';

export default class Preview extends React.Component {
  render() {
    let { firstName, lastName, email, number, about } = this.props.data.general;
    return (
      <div className="container">
        <div>{firstName}</div>
        <div></div>
      </div>
    );
  }
}
