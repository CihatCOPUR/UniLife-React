import "./cityDetailCard.css";
import { Link } from 'react-router-dom';

const CityDetailCard = () => {
  return (
    <center className="cityDetailCard">
      {" "}
      <Link to={`/citydetails/${id}`} className="city-name-container">
        <h3 className="city-card-name">{name}</h3>
      </Link>
    </center>
  );
};

export default CityDetailCard;
