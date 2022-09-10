import React from 'react';
import SingleExperience from './singleExperience';
import uniqid from 'uniqid';
export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: [],
      experiences: [],
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
    let filteredExperiences = this.state.experiences.filter(exp => exp.id !== id);
    this.setState({
      component: filteredComponent,
      experiences: filteredExperiences,
    });
  };
  handleInput = obj => {
    let filteredExperiences = this.state.experiences.filter(exp => exp.id !== obj.id);
    this.setState({
      experiences: [...filteredExperiences, obj],
    });
  };
  render() {
    return (
      <div>
        <h2>Experience</h2>
        {this.state.component.map(x => (
          <SingleExperience
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
