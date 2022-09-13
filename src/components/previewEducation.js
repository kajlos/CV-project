import React from 'react';
export default class PreviewEducation extends React.Component {
  render() {
    let { school, startDate, endDate, city } = this.props.data;
    return (
      <div>
        <div>{` ${startDate} - ${endDate} `}</div>
        <div>{`${school},  ${city}`}</div>
        <hr></hr>
      </div>
    );
  }
}
