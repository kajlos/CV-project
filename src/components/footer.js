import React from 'react';
import styles from '../styles/footer.module.css';
import logo from '../img/GitHub-logo.png';
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <p>Created by kajlos</p>
        <a href="https://github.com/kajlos">
          <img src={logo} alt="logo"></img>
        </a>
      </div>
    );
  }
}
