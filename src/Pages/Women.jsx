import React from "react";
import { kurtisDB, lehengasDB, sareesDB, womenDB } from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Women = () => {
  const navigate = useNavigate();

  const ScrollWomen = (args) => {
    if (args === "Kurtis") {
      document.documentElement.scrollTo(0, 1100);
    } else if (args === "Sarees") {
      document.documentElement.scrollTo(0, 1500);
    } else if (args === "Lehengas") {
      document.documentElement.scrollTo(0, 2000);
    }
  };

  let items;
  let database;
  let WomensToShopping = (i) => {
    // alert(i);
    const clothes = [" Sarees", "Kurtis", "Lehengas"];

    if (i === 0) {
      database = sareesDB;
      items = clothes[0];
    } else if (i === 1) {
      items = clothes[1];
      database = kurtisDB;
    } else if (i === 2) {
      items = clothes[2];

      database = lehengasDB;
    }

    navigate("/shopping", { state: { i, items, database } });
  };
  // for kurtis items and database
  let KurtisToShopping = (i) => {
    // alert(i + " Kurtis");

    if (i >= 0 && i <= 12) {
      items = "Kurtis";
      database = kurtisDB;
    }
    navigate("/shopping", { state: { i, items, database } });
  };

  // for saress items and database
  let SareesToShopping = (i) => {
    // alert(i + " Sarees");

    if (i >= 0 && i <= 12) {
      items = "Sarees";
      database = sareesDB;
    }
    navigate("/shopping", { state: { i, items, database } });
  };
  // for lehengas items and database
  let LehengasToShopping = (i) => {
    // alert(i + " Lehengas");

    if (i >= 0 && i <= 12) {
      items = "Lehengas";
      database = lehengasDB;
    }
    navigate("/shopping", { state: { i, items, database } });
  };

  const listItems_2 = womenDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxWItem">
          <img
            src={eachItem.imgPath}
            className="pictures_w"
            onClick={() => WomensToShopping(index)}
          ></img>
          <div className="text">{eachItem.text}</div>
        </div>
      </>
    );
  });

  const listItemsKurtis = kurtisDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img
            src={eachItem.imgPath}
            className="pictures_k"
            onClick={() => KurtisToShopping(index)}
          />
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
          <img
            src={eachItem.imgPath}
            className="pictures_k"
            onClick={() => SareesToShopping(index)}
          ></img>
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
          <img
            src={eachItem.imgPath}
            className="pictures_k"
            onClick={() => LehengasToShopping(index)}
          ></img>
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
      <Navbar scrollBarForWomenPage={ScrollWomen} />

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
