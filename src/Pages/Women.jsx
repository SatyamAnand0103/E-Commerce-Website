import React from "react";
import { kurtisDB, lehengasDB, sareesDB, womenDB } from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-scroll";

const Women = () => {
  const ScrollBarWomen = (args) => {
    if (args === "Kurtis") {
      window.scrollTo(0, 1000);
    } else if (args === "Sarees") {
      window.scrollTo(0, 1400);
    } else if (args === "Lehengas") {
      window.scrollTo(0, 1800);
    } else if (args === "Bridal") {
      window.scrollTo(0, 2000);
    }
  };

  const listItems_2 = womenDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxWItem">
          <img src={eachItem.imgPath} className="pictures_w"></img>
          <div className="text">{eachItem.text}</div>
        </div>
      </>
    );
  });

  const listItemsKurtis = kurtisDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img src={eachItem.imgPath} className="pictures_k"></img>
          <div className="textOfClothes">
            <p>{eachItem.text}</p>
            <p>{eachItem.price}</p>
          </div>
        </div>
      </>
    );
  });

  // for Sarees

  const listItemsSarees = sareesDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img src={eachItem.imgPath} className="pictures_k"></img>
          <div className="textOfClothes">
            <p>{eachItem.text}</p>
            <p>{eachItem.price}</p>
          </div>
        </div>
      </>
    );
  });

  //for Lehengas

  const listItemsLehengas = lehengasDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img src={eachItem.imgPath} className="pictures_k"></img>
          <span className="textOfClothes">
            <p>{eachItem.text}</p>
            <p>{eachItem.price}</p>
          </span>
        </div>
      </>
    );
  });
  return (
    <div>
      <Navbar scroll={ScrollBarWomen} />

      <div className="caraouselContainer">
        <div className="carousel animate">

          <div className="carousel-item">
            <img src={require("../images/W_1.avif")}></img>
          </div>

          <div className="carousel-item">
            <img src={require("../images/W_3.avif")}></img>
          </div>

          <div className="carousel-item">
            <img src={require("../images/W_2.avif")}></img>
          </div>

          <div className="carousel-item">
            <img src={require("../images/W_3.avif")}></img>

          </div>

        </div>
      </div>

      <div className="containerWomen">
        {listItems_2}
        {/* <div className="title2"> Earthy Palette For Summer</div> */}
      </div>

      {/* For kurtis */}
      <p className="highterBox"> Designer Kurtis </p>
      <div className="containerKurtis">{listItemsKurtis}</div>

      {/* for sarees */}
      <p className="highterBox"> Designer Sarees </p>
      <div className="containerSarees">{listItemsSarees}</div>

      {/* for lehengas */}
      <p className="highterBox"> Designer Lehengas</p>
      <div className="containerLehengas">{listItemsLehengas}</div>

      <Footer />
    </div>
  );
};
export default Women;
