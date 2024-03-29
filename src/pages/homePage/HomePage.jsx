import { useState, useEffect } from "react";
import "../homePage/homePage.css";
import Header from "../../components/header/Header";
import banner from "../../assets/ımg/overlay.png";
import axios from "axios";
import Card from "../../components/card/Card";

const HomePage = () => {
  const [cities, setCities] = useState([]);

  // all cities endpoint https://unilife-server.herokuapp.com/cities
  useEffect(() => {
    axios
      .get("https://unilife-server.herokuapp.com/cities?limit=50")
      .then(function (res) {
        const data = res.data.response;
        // console.log(data);
        setCities(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default HomePage;
