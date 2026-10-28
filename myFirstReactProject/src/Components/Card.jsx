function Card(props) {
  return (
    <div className="cardContainer">
      <h2>{props.title}</h2>
      <img src={props.image} alt="A chocolate donut Image" />
      <p>{props.para}</p>
    </div>
  );
}


export default Card;