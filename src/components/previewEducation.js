export default function PreviewEducation(props) {
  let { school, startDate, endDate, city } = props.data;
  return (
    <div>
      <div>{` ${startDate} - ${endDate} `}</div>
      <div>{`${school},  ${city}`}</div>
      <hr></hr>
    </div>
  );
}
