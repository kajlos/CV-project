export default function PreviewExp(props) {
  let { company, startDate, endDate, position } = props.data;
  return (
    <div>
      <div>{`${startDate} - ${endDate} `}</div>
      <div>{`${company},  ${position}`}</div>
      <hr></hr>
    </div>
  );
}
