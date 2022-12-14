import React from 'react';
import style from '../styles/single.module.css';
export default class SingleEducation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      school: this.props.data.school || '',
      startDate: this.props.data.startDate || '',
      endDate: this.props.data.endDate || '',
      city: this.props.data.city || '',
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
            <label htmlFor="city">City</label>
            <input id="city" onInput={this.handleInput} value={this.state.city}></input>
          </div>
          <div className={style.formElement}>
            <label htmlFor="startDate">Start date</label>
            <input
              id="startDate"
              placeholder="year"
              onInput={this.handleInput}
              value={this.state.startDate}
            ></input>
          </div>
          <div className={style.formElement}>
            <label htmlFor="school">School</label>
            <input id="school" onInput={this.handleInput} value={this.state.school}></input>
          </div>
          <div className={style.formElement}>
            <label htmlFor="endDate">End date</label>
            <input
              id="endDate"
              placeholder="year"
              onInput={this.handleInput}
              value={this.state.endDate}
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
