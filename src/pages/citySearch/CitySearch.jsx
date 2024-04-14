import React from "react";
import "./citySearch.css";
import Header from "../../components/header/Header";
import banner from "../../assets/ımg/overlay.png";
import Footer from "../../components/footer/Footer";
import CityDetailCard from "../../components/cityDetailCard/CityDetailCard";

const CitySearch = () => {

    //const [cities, setCities] = useState([]) 
    const cities=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
  return (
    <center>
      <Header />
      <div className="banner" style={{ position: "relative" }}>
        <img src={banner} width={"100%"} height={"480px"} alt="" />
      </div>
      <div className="cities">
        <h1>Serach by City</h1>
        <div className="buttons">
        {
          cities.map(city => {
            return <CityDetailCard key={city._id} name={city.name} id={city._id} />
          })
        }
        </div>
      </div>
      <Footer/>
    </center>
  );
};

export default CitySearch;
