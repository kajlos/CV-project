import React, { useEffect, useState } from 'react';
import style from '../styles/single.module.css';
export default function SingleExperience(props) {
  const initialExperience = {
    id: props.data.id,
    company: props.data.company || '',
    startDate: props.data.startDate || '',
    endDate: props.data.endDate || '',
    position: props.data.position || '',
  };
  const [experience, setExperience] = useState(initialExperience);
  const handleInput = e => {
    let value = e.target.value;
    let id = e.target.id;
    if (id === 'startDate' || id === 'endDate') {
      value = e.target.value.replace(/\D/, '');
    } else {
      value = e.target.value;
    }
    setExperience({ ...experience, [id]: value });
  };
  useEffect(() => {
    props.handleInput(experience);
  }, [experience]);
  console.log('single experience');
  return (
    <div className={style.singleDiv}>
      <form className={style.form}>
        <div className={style.formElement}>
          <label htmlFor="company">Company Name</label>
          <input id="company" onInput={handleInput} value={experience.company}></input>
        </div>
        <div className={style.formElement}>
          <label htmlFor="startDate">Start date</label>
          <input
            id="startDate"
            onInput={handleInput}
            value={experience.startDate}
            placeholder="year"
          ></input>
        </div>
        <div className={style.formElement}>
          <label htmlFor="position">Position</label>
          <input id="position" onInput={handleInput} value={experience.position}></input>
        </div>
        <div className={style.formElement}>
          <label htmlFor="endDate">End date</label>
          <input
            id="endDate"
            onInput={handleInput}
            value={experience.endDate}
            placeholder="year"
          ></input>
        </div>
      </form>
      <button className={style.deleteButton} onClick={() => props.handleDelete(experience.id)}>
        Delete
      </button>
    </div>
  );
}
