import React, { useEffect, useState } from 'react';
import SingleEducation from './singleEducation';
import uniqid from 'uniqid';
export default function Education(props) {
  const initialEducation = props.data || [];
  const [education, setEducation] = useState(initialEducation);
  const handleClick = () => {
    let newEducation = {
      id: uniqid(),
    };
    setEducation([...education, newEducation]);
  };
  const handleDelete = id => {
    let filteredEducation = education.filter(edu => edu.id !== id);
    setEducation(filteredEducation);
  };
  const handleInput = obj => {
    let f = education.map(edu => {
      if (edu.id === obj.id) {
        return { ...edu, ...obj };
      } else {
        return edu;
      }
    });
    setEducation(f);
  };
  useEffect(() => {
    props.setEducation(education);
  }, [education]);
  return (
    <div>
      <h2>Education</h2>
      {education.map(x => (
        <SingleEducation
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
