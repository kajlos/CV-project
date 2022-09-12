import React from 'react';
import SingleEducation from './singleEducation';
import uniqid from 'uniqid';
export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: [
        {
          id: uniqid(),
        },
      ],
      education: [],
    };
  }
  handleClick = () => {
    let newComponent = {
      id: uniqid(),
    };
    this.setState({
      component: [...this.state.component, newComponent],
    });
  };
  handleDelete = id => {
    let filteredComponent = this.state.component.filter(com => com.id !== id);
    let filteredEducation = this.state.education.filter(edu => edu.id !== id);
    this.setState(
      {
        component: filteredComponent,
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
        {this.state.component.map(x => (
          <SingleEducation
            handleInput={this.handleInput}
            handleDelete={this.handleDelete}
            id={x.id}
            key={x.id}
          />
        ))}
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
