import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Home_DecorationDB } from "./DB";

const Home_Decor = () => {
  const navigate = useNavigate();

  const [clocks, setClocks] = useState([]);
  const [curtains, setCurtains] = useState([]);
  const [wallDecor, setWallDecor] = useState([]);

  useEffect(() => {
    // Fetch clocks data
    axios
      .get("http://localhost:10000/clocks/api")
      .then((response) => setClocks(response.data.ClocksDB))
      .catch((error) => console.error("Error fetching clocks data:", error));

    // Fetch curtains data
    axios
      .get("http://localhost:11001/curtains/api")
      .then((response) => setCurtains(response.data.CurtainsDB))
      .catch((error) => console.error("Error fetching curtains data:", error));

    // Fetch wall decor data
    axios
      .get("http://localhost:14000/wallDecor/api")
      .then((response) => setWallDecor(response.data.WallDecoratorsDB))
      .catch((error) =>
        console.error("Error fetching wall decor data:", error)
      );
  }, []);

  const ScrollBarHome = (args) => {
    if (args === "Clocks") {
      window.scrollTo(0, 600);
    } else if (args === "Curtains") {
      window.scrollTo(0, 860);
    } else if (args === "Wall_Decorators") {
      window.scrollTo(0, 1300);
    }
  };

  let items, database;

  // Navigation handlers
  const navigateToShopping = (i, type) => {
    if (type === "Clocks") {
      items = "Clocks";
      database = clocks;
    } else if (type === "Curtains") {
      items = "Curtains";
      database = curtains;
    } else if (type === "Wall Decor") {
      items = "Wall Decor";
      database = wallDecor;
    }
    navigate("/shopping", { state: { i, database, items } });
  };

  // Static home decoration items
  const listItems_4 = Home_DecorationDB.map((eachItem, index) => (
    <img
      key={index}
      src={eachItem.imgPath}
      className="pictures_Home"
      alt={`Home Decor ${index}`}
    />
  ));

  // Dynamic items from APIs
  const listItemsForClocks = clocks.map((eachItem, index) => (
    <div key={index} className="boxKItem">
      <img
        src={eachItem.imgPath}
        className="picturesClocks"
        onClick={() => navigateToShopping(index, "Clocks")}
        alt={`Clock ${index}`}
      />
      <p className="priceTag">{eachItem.price}</p>
    </div>
  ));

  const listItemsForCurtains = curtains.map((eachItem, index) => (
    <div key={index}>
      <img
        src={eachItem.imgPath}
        className="picturesHome"
        onClick={() => navigateToShopping(index, "Curtains")}
        alt={`Curtain ${index}`}
      />
      <div className="textForcurtains">
        <p>{eachItem.text}</p>
        <p>{eachItem.price}</p>
      </div>
    </div>
  ));

  const listItemsForWallDecor = wallDecor.map((eachItem, index) => (
    <div key={index}>
      <img
        src={eachItem.imgPath}
        className="picturesHome"
        onClick={() => navigateToShopping(index, "Wall Decor")}
        alt={`Wall Decor ${index}`}
      />
      <div className="textForcurtains">
        <p>{eachItem.text}</p>
        <p>{eachItem.price}</p>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar scrollForHomePage={ScrollBarHome} />

      <div className="homeContainer">
        <p className="leftBox"></p>
        <h4>Interior</h4>
        <h1>Design</h1>
        <h5>
          The stylish interior makes us want to spend more time in it. We
          present interesting sets to create an apartment. We choose the right
          colors according to our own taste.
        </h5>
        <div className="imageContain">{listItems_4}</div>
      </div>

      <div className="containerComponent">
        <p className="highterBox"> Clocks </p>
        <div className="containerForHome">{listItemsForClocks}</div>

        <p className="highterBox"> Curtains </p>
        <div className="containerForHome">{listItemsForCurtains}</div>

        <p className="highterBox"> Wall Decorators </p>
        <div className="containerForHome">{listItemsForWallDecor}</div>
      </div>

      <Footer />
    </>
  );
};

export default Home_Decor;
