import styles from '../styles/preview.module.css';
import PreviewEdu from './previewEducation';
import PreviewExp from './previewExp';
export default function Preview(props) {
  let { firstName, lastName, email, number, about } = props.data.general;
  let education = props.data.education;
  let experience = props.data.experience;
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
