import React from 'react';
import SingleExperience from './singleExperience';
import uniqid from 'uniqid';
export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experiences: this.props.data || [],
    };
  }
  handleClick = () => {
    let newExperiences = {
      id: uniqid(),
    };
    this.setState({
      experiences: [...this.state.experiences, newExperiences],
    });
  };
  handleDelete = id => {
    let filteredExperiences = this.state.experiences.filter(exp => exp.id !== id);
    this.setState(
      {
        experiences: filteredExperiences,
      },
      () => {
        this.props.setExperience(this.state.experiences);
      }
    );
  };
  handleInput = obj => {
    let filteredExperiences = this.state.experiences.filter(exp => exp.id !== obj.id);
    this.setState(
      {
        experiences: [...filteredExperiences, obj],
      },
      () => {
        this.props.setExperience(this.state.experiences);
      }
    );
  };
  render() {
    return (
      <div>
        <h2>Experience</h2>
        {this.state.experiences.map(x => (
          <SingleExperience
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
