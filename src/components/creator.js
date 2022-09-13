import React from 'react';
import General from './GeneralInformations';
import Education from './education';
import Experience from './experience';
import '../styles/creator.module.css';
export default class Creator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general: this.props.data.general || {},
      education: this.props.data.education || [],
      experience: this.props.data.experience || [],
    };
  }
  setGeneral = data => {
    this.setState(
      {
        general: data,
      },
      () => {
        this.props.setData(this.state);
      }
    );
  };
  setEducation = data => {
    this.setState(
      {
        education: data,
      },
      () => {
        this.props.setData(this.state);
      }
    );
  };
  setExperience = data => {
    this.setState(
      {
        experience: data,
      },
      () => {
        this.props.setData(this.state);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <General setGeneral={this.setGeneral} data={this.state.general} />
        <Education setEducation={this.setEducation} data={this.state.education} />
        <Experience setExperience={this.setExperience} data={this.state.experience} />
      </div>
    );
  }
}
