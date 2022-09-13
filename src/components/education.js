import React from 'react';
import SingleEducation from './singleEducation';
import uniqid from 'uniqid';
export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      education: this.props.data || [],
    };
  }
  handleClick = () => {
    let newEducation = {
      id: uniqid(),
    };
    this.setState({
      education: [...this.state.education, newEducation],
    });
  };
  handleDelete = id => {
    let filteredEducation = this.state.education.filter(edu => edu.id !== id);
    this.setState(
      {
        education: filteredEducation,
      },
      () => {
        this.props.setEducation(this.state.education);
      }
    );
  };
  handleInput = obj => {
    let filteredEducation = this.state.education.filter(edu => edu.id !== obj.id);
    this.setState(
      {
        education: [...filteredEducation, obj],
      },
      () => {
        this.props.setEducation(this.state.education);
      }
    );
  };
  render() {
    return (
      <div>
        <h2>Education</h2>
        {this.state.education.map(x => (
          <SingleEducation
            handleInput={this.handleInput}
            handleDelete={this.handleDelete}
            data={x}
            key={x.id}
          />
        ))}
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
