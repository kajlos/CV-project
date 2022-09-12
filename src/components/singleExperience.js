import React from 'react';
import style from '../styles/single.module.css';
export default class SingleExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      company: '',
      startDate: '',
      endDate: '',
      position: '',
    };
  }
  handleInput = e => {
    let value = e.target.value;
    let id = e.target.id;
    if (id === 'startDate' || id === 'endDate') {
      value = e.target.value.replace(/\D/, '');
    } else {
      value = e.target.value;
    }
    this.setState(
      {
        [id]: value,
      },
      () => this.props.handleInput(this.state)
    );
  };
  render() {
    return (
      <div className={style.singleDiv}>
        <form className={style.form}>
          <div className={style.formElement}>
            <label htmlFor="company">Company Name</label>
            <input id="company" onInput={this.handleInput} value={this.state.company}></input>
          </div>
          <div className={style.formElement}>
            <label htmlFor="startDate">Start date</label>
            <input
              id="startDate"
              onInput={this.handleInput}
              value={this.state.startDate}
              placeholder="year"
            ></input>
          </div>
          <div className={style.formElement}>
            <label htmlFor="position">Position</label>
            <input id="position" onInput={this.handleInput} value={this.state.position}></input>
          </div>
          <div className={style.formElement}>
            <label htmlFor="endDate">End date</label>
            <input
              id="endDate"
              onInput={this.handleInput}
              value={this.state.endDate}
              placeholder="year"
            ></input>
          </div>
        </form>
        <button
          className={style.deleteButton}
          onClick={() => this.props.handleDelete(this.state.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
