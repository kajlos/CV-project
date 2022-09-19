import React, { useEffect, useState } from 'react';
import SingleExperience from './singleExperience';
import uniqid from 'uniqid';
export default function Experience(props) {
  const initialExperiences = props.data || [];
  const [experiences, setExperiences] = useState(initialExperiences);
  const handleClick = () => {
    let newExperiences = {
      id: uniqid(),
    };
    setExperiences([...experiences, newExperiences]);
  };
  const handleDelete = id => {
    let filteredExperiences = experiences.filter(exp => exp.id !== id);

    setExperiences(filteredExperiences);
  };
  const handleInput = obj => {
    let f = experiences.map(exp => {
      if (exp.id === obj.id) {
        return { ...exp, ...obj };
      } else {
        return exp;
      }
    });
    setExperiences(f);
  };
  useEffect(() => {
    props.setExperience(experiences);
  }, [experiences]);
  console.log('experience');
  return (
    <div>
      <h2>Experience</h2>
      {experiences.map(x => (
        <SingleExperience
          handleInput={handleInput}
          handleDelete={handleDelete}
          data={x}
          key={x.id}
        />
      ))}
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
