import React, { useEffect, useState } from 'react';
import style from '../styles/single.module.css';
export default function SingleEducation(props) {
  const initialEducation = {
    id: props.data.id,
    school: props.data.school || '',
    startDate: props.data.startDate || '',
    endDate: props.data.endDate || '',
    city: props.data.city || '',
  };
  const [education, setEducation] = useState(initialEducation);
  const handleInput = e => {
    let value = e.target.value;
    let id = e.target.id;
    if (id === 'startDate' || id === 'endDate') {
      value = e.target.value.replace(/\D/, '');
    } else {
      value = e.target.value;
    }
    setEducation({ ...education, [id]: value });
  };
  useEffect(() => {
    props.handleInput(education);
  }, [education]);
  console.log('single education');
  return (
    <div className={style.singleDiv}>
      <form className={style.form}>
        <div className={style.formElement}>
          <label htmlFor="city">City</label>
          <input id="city" onInput={handleInput} value={education.city}></input>
        </div>
        <div className={style.formElement}>
          <label htmlFor="startDate">Start date</label>
          <input
            id="startDate"
            placeholder="year"
            onInput={handleInput}
            value={education.startDate}
          ></input>
        </div>
        <div className={style.formElement}>
          <label htmlFor="school">School</label>
          <input id="school" onInput={handleInput} value={education.school}></input>
        </div>
        <div className={style.formElement}>
          <label htmlFor="endDate">End date</label>
          <input
            id="endDate"
            placeholder="year"
            onInput={handleInput}
            value={education.endDate}
          ></input>
        </div>
      </form>
      <button className={style.deleteButton} onClick={() => props.handleDelete(education.id)}>
        Delete
      </button>
    </div>
  );
}
