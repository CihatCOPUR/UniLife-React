import "./card.css";

const Card = ({ cities }) => {
  console.log(cities);

  return (
    <div className="cardDiv">
      {cities.map((city, index) => (
        <div className="cardItem" key={index}>
          <img src={city.image_url} alt="" width={"300px"} height={"200px"} />
          <center className="textContainer">
            <h3>{city.name}</h3>
            <h5>{city.property_count} properties</h5>
          </center>
        </div>
      ))}
    </div>
  );
};

export default Card;
