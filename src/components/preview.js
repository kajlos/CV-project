import React from 'react';
import styles from '../styles/preview.module.css';
import PreviewEdu from './previewEducation';
import PreviewExp from './previewExp';
export default class Preview extends React.Component {
  render() {
    let { firstName, lastName, email, number, about } = this.props.data.general;
    let education = this.props.data.education;
    let experience = this.props.data.experience;
    console.log(education);
    return (
      <div className="container">
        <div>
          <hr></hr>
          <h1>
            {firstName}
            {lastName}
          </h1>
          <div className={styles.general}>
            <div>E-mail</div>
            <div>{email}</div>
            <div>Number</div>
            <div>{number}</div>
          </div>
          <hr></hr>
          <div>{about}</div>
          <hr></hr>
        </div>
        <div>
          <h2>Education</h2>
          {education.map(x => (
            <PreviewEdu data={x} key={x.id} />
          ))}
        </div>
        <div>
          <h2>Experience</h2>
          {experience.map(x => (
            <PreviewExp data={x} key={x.id} />
          ))}
        </div>
      </div>
    );
  }
}
