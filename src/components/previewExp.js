import React from 'react';
export default class PreviewExp extends React.Component {
  render() {
    let { company, startDate, endDate, position } = this.props.data;
    return (
      <div>
        <div>{`${startDate} - ${endDate} `}</div>
        <div>{`${company},  ${position}`}</div>
        <hr></hr>
      </div>
    );
  }
}
