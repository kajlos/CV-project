import React from 'react';
import styles from '../styles/main.module.css';
import General from './GeneralInformations';
import Education from './education';
import Experience from './experience';
export default class Creator extends React.Component {
  constructor() {
    super();
    this.state = {
      general: {},
      education: {},
      experience: {},
    };
  }
  setGeneral = data => {
    this.setState({
      general: data,
    });
  };
  setEducation = data => {
    this.setState({
      education: data,
    });
  };
  setExperience = data => {
    this.setState({
      experience: data,
    });
  };
  render() {
    return (
      <div className={styles.container}>
        <General setGeneral={this.setGeneral} />
        <Education setEducation={this.setEducation} />
        <Experience setExperience={this.setExperience} />
      </div>
    );
  }
}
