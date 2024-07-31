import React from "react";
import {
  Home_DecorationDB,
  ClocksDB,
  CurtainsDB,
  WallDecoratorsDB,
} from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home_Decor = () => {
  const ScrollBarHome = (args) => {
    if (args === "Clocks") {
      window.scrollTo(0, 600);
    } else if (args === "Curtains") {
      window.scrollTo(0, 860);
    } else if (args === "Wall_Decorators") {
      window.scrollTo(0, 1300);
    }
  };

  const listItems_4 = Home_DecorationDB.map((eachItem) => {
    return (
      <>
        <img src={eachItem.imgPath} className="pictures_Home"></img>
      </>
    );
  });

  const listItems_5 = ClocksDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img src={eachItem.imgPath} className="pictures_k"></img>
          {/* <div className="overlay">{eachItem.price}</div> */}
          <div className="text_K">
            {eachItem.text}
            <p>{eachItem.price}</p>
          </div>
          {/* <div className="contents"> {eachItem.stars}</div> */}
        </div>
      </>
    );
  });
  const listItems_6 = CurtainsDB.map((eachItem) => {
    return (
      <>
        <img src={eachItem.imgPath} className="pictures_Home_curtains"></img>
        <p className="price"></p>
      </>
    );
  });
  const listItems_7 = WallDecoratorsDB.map((eachItem) => {
    return (
      <>
        <img src={eachItem.imgPath} className="pictures_Home_curtains"></img>
        <p className="price"></p>
      </>
    );
  });

  return (
    <>
      <Navbar scroll={ScrollBarHome} />

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
        <div className="containerKurtis">{listItems_5}</div>
        {/* Curtains */}
        <p className="highterBox"> Curtains </p>
        <div className="containerKurtis">{listItems_6}</div>
        {/* Wall Decorations */}
        <p className="highterBox"> Wall Decorators </p>
        <div className="containerKurtis">{listItems_7}</div>
      </div>

      {/* contact details */}
      <Footer />
    </>
  );
};
export default Home_Decor;
