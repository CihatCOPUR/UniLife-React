import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../homePage/homePage.css";
import Header from "../../components/header/Header";
import banner from "../../assets/ımg/overlay.png";
import axios from "axios"; // Axios kütüphanesini import ediyoruz
import Card from "../../components/cityImageCard/Card";
import compareImg1 from "../../assets/ımg/compare-1.png";
import compareImg2 from "../../assets/ımg/compare-2.png";
import compareImg3 from "../../assets/ımg/compare-3.png";
import compareDiv2 from "../../assets/ımg/compareDiv-2.png";
import hearth from "../../assets/ımg/hearth.png";
import men from "../../assets/ımg/homepage-men.png";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Axios ile istek yapma
    axios
      .get("https://unilife-server.herokuapp.com/cities?limit=50")
      .then(function (response) {
        const data = response.data.response;
        setCities(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <center>
      <Header />
      <div className="banner" style={{ position: "relative" }}>
        <img src={banner} width={"100%"} height={"480px"} alt="" />
      </div>
      <center className="searchBar">
        <select name="" id="" className="dropdownSelect">
          <option value="" disabled selected hidden>
            Search By City
          </option>
          <option value="1">City 1</option>
          <option value="2">City 2</option>
        </select>
        <button className="dropdownButton">Find Homes</button>
      </center>
      <h2 className="bannerH2">Student accommodations in our top cities</h2>
      <Card cities={cities} />
      <Link to={'/cities'}><button className="allCitiesButton">See All Cities</button></Link>
      <div className="compare">
        <h1>Compare all inclusive student homes.</h1>
        <div>
          <img src={compareImg1} alt="compareImg1" />
          <img src={compareImg2} alt="compareImg2" />
          <img src={compareImg3} alt="compareImg3" />
        </div>
      </div>
      <div className="compareDiv2">
        <div style={{ width: "500px" }}>
          <div style={{ display: "flex", marginTop: "50px" }}>
            <img src={compareDiv2} width={"40px"} height={"40px"} alt="" />
            <p>
              <span>Best selection</span> <br /> <br /> Best selection of student
              accommodations. Never been easier to find a home that’s right for
              you.
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <img src={hearth} width={"40px"} height={"40px"} alt="" />
            <p>
              <span>Your favorite</span> <br /> <br /> Shortlist your favourite
              properties and send enquiries in one click.
            </p>
          </div>
          <button>Search & Compare</button>
        </div>
        <div>
          <img src={men} width={"400px"} height={"450px"} alt="" />
        </div>
      </div>
      <Footer />
    </center>
  );
};

export default HomePage;
