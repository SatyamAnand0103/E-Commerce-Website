import React from "react";
import {
  Home_DecorationDB,
  ClocksDB,
  CurtainsDB,
  WallDecoratorsDB,
} from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Home_Decor = () => {
  const navigate = useNavigate();

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

  //for clocks items and databse
  let ClocksToShopping = (i) => {
    // alert(i + "" + "Clocks");
    if (i >= 0 && i <= 10) {
      items = "Clocks";
      database = ClocksDB;
    }
    navigate("/shopping", { state: { i, database, items } });
  };
  // for curtains items and database
  let CurtainsToShopping = (i) => {
    // alert(i + "" + "Clocks");
    if (i >= 0 && i <= 10) {
      items = "Curtains";
      database = CurtainsDB;
    }
    navigate("/shopping", { state: { i, database, items } });
  };
  // for wall items ad databse
  let WallToShopping = (i) => {
    // alert(i + "" + "Clocks");
    if (i >= 0 && i <= 10) {
      items = "Wall Decor";
      database = WallDecoratorsDB;
    }
    navigate("/shopping", { state: { i, database, items } });
  };

  const listItems_4 = Home_DecorationDB.map((eachItem) => {
    return (
      <>
        <img src={eachItem.imgPath} className="pictures_Home"></img>
      </>
    );
  });

  // for clocks
  const listItemsForClocks = ClocksDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img
            src={eachItem.imgPath}
            className="picturesClocks"
            onClick={() => ClocksToShopping(index)}
          ></img>
          <p className="priceTag">{eachItem.price}</p>
        </div>
      </>
    );
  });

  //for curtains
  const listItemsForCurtains = CurtainsDB.map((eachItem,index) => {
    return (
      <>
        <div key={index}>
          <img
            src={eachItem.imgPath}
            className="picturesHome"
            onClick={() => CurtainsToShopping(index)}
          ></img>
          <div className="textForcurtains">
            <p>{eachItem.text}</p>
            <p>{eachItem.price}</p>
          </div>
        </div>
      </>
    );
  });

  // for Wall Decorators
  const listItemsForWallDecor = WallDecoratorsDB.map((eachItem,index) => {
    return (
      <>
        <div key={index}>
          <img
            src={eachItem.imgPath}
            className="picturesHome"
            onClick={() => WallToShopping(index)}
          ></img>
          <div className="textForcurtains">
            <p>{eachItem.text}</p>
            <p>{eachItem.price}</p>
          </div>
        </div>
      </>
    );
  });

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
        {/* For kurtis */}
        <p className="highterBox"> Clocks </p>
        <div className="containerForHome">{listItemsForClocks}</div>
        {/* Curtains */}
        <p className="highterBox"> Curtains </p>
        <div className="containerForHome">{listItemsForCurtains}</div>
        {/* Wall Decorations */}
        <p className="highterBox"> Wall Decorators </p>
        <div className="containerForHome">{listItemsForWallDecor}</div>
      </div>

      {/* contact details */}
      <Footer />
    </>
  );
};
export default Home_Decor;
