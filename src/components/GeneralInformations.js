import React, { useState, useEffect } from 'react';
import styles from '../styles/general.module.css';
export default function General(props) {
  const initialValues = {
    firstName: props.data.firstName || '',
    lastName: props.data.lastName || '',
    email: props.data.email || '',
    number: props.data.number || '',
    about: props.data.about || '',
  };
  const [values, setValues] = useState(initialValues);
  const setGeneral = props.setGeneral;
  useEffect(() => {
    setGeneral(values);
  }, [values, setGeneral]);

  const handleChange = e => {
    let id = e.target.id;
    let value;
    if (id === 'number') {
      value = e.target.value.replace(/\D/, '');
    } else {
      value = e.target.value;
    }
    setValues({ ...values, [id]: value });
  };

  console.log('general change');
  return (
    <div>
      <h2>General Inforamtion</h2>
      <form className={styles.general}>
        <div className={styles.formElement}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" onChange={handleChange} value={values.firstName}></input>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" onChange={handleChange} value={values.lastName}></input>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="email">E-mail</label>
          <input id="email" onChange={handleChange} value={values.email}></input>
        </div>
        <div className={styles.formElement}>
          <label htmlFor="number">Phone number</label>
          <input id="number" onChange={handleChange} value={values.number}></input>
        </div>
        <div className={[styles.formElement, styles.textAreaDiv].join(' ')}>
          <label htmlFor="about">About</label>
          <textarea id="about" onChange={handleChange} value={values.about}></textarea>
        </div>
      </form>
    </div>
  );
}
