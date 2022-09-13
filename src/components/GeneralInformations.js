import React from 'react';
import styles from '../styles/general.module.css';
export default class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.data.firstName || '',
      lastName: this.props.data.lastName || '',
      email: this.props.data.email || '',
      number: this.props.data.number || '',
      about: this.props.data.about || '',
    };
  }
  handleChange = e => {
    let id = e.target.id;
    let value;
    if (id === 'number') {
      value = e.target.value.replace(/\D/, '');
    } else {
      value = e.target.value;
    }

    this.setState(
      {
        [id]: value,
      },
      () => {
        this.props.setGeneral(this.state);
      }
    );
  };
  render() {
    return (
      <div>
        <h2>General Inforamtion</h2>
        <form className={styles.general}>
          <div className={styles.formElement}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" onChange={this.handleChange} value={this.state.firstName}></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" onChange={this.handleChange} value={this.state.lastName}></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="email">E-mail</label>
            <input id="email" onChange={this.handleChange} value={this.state.email}></input>
          </div>
          <div className={styles.formElement}>
            <label htmlFor="number">Phone number</label>
            <input id="number" onChange={this.handleChange} value={this.state.number}></input>
          </div>
          <div className={[styles.formElement, styles.textAreaDiv].join(' ')}>
            <label htmlFor="about">About</label>
            <textarea id="about" onChange={this.handleChange} value={this.state.about}></textarea>
          </div>
        </form>
      </div>
    );
  }
}
