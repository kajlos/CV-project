import React from 'react';
import styles from '../styles/main.module.css';
import General from './GeneralInformations';
import Education from './education';
import Experience from './experience';
export default class Creator extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <General />
        <Education />
        <Experience />
      </div>
    );
  }
}
