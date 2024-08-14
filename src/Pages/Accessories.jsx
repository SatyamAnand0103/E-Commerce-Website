import React from "react";
import { AccessoriesDB, RingsDB } from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Accessories = () => {
  const navigate = useNavigate();
  const ScrollBarAccess = (args) => {
    if (args === "Rings") {
      window.scrollTo(0, 600);
    }
  };
  let items, database;
  let AccessoriesToShopping = (i) => {
    // alert(i + " " + "Accessories rings");

    if (i >= 0 && i <= 10) {
      items = "Rings";
      database = RingsDB;
    }

    setTimeout(() => {
      navigate("/shopping", { state: { i, items, database } });

    }, 400);
    // navigate("/shopping", { state: { i, items, database } });
  };

  const listItems_8 = AccessoriesDB.map((eachItem, index) => {
    return (
      <>
        <div key={index}>
          <img src={eachItem.imgPath} className="pictures_access"></img>
        </div>
      </>
    );
  });

  const listItems_9 = RingsDB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxKItem">
          <img
            src={eachItem.imgPath}
            className="picturesRings"
            onClick={() => AccessoriesToShopping(index)}
          ></img>
          <div className="text_Rings">
            {eachItem.text}
            <p>{eachItem.price}</p>
          </div>
          {/* <div className="contents"> {eachItem.stars}</div> */}
        </div>
      </>
    );
  });
  return (
    <>
      <Navbar scrollForAccessPage={ScrollBarAccess} />

      <div className="accessContainer">
        <p className="leftBoxAccess"></p>
        <h4></h4>
        <h1>Beauty</h1>
        <h4>───── That Impresses ─────</h4>

        <h5>
          Enhance your beauty with our jewey that is spectacular and affordable
          . Browse our catalog to find what you prefer.
        </h5>
        <div className="imageContainAccess">{listItems_8}</div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p className="highterBox"> Rings </p>
      <div className="containerRings">{listItems_9}</div>

      <Footer />
    </>
  );
};
export default Accessories;
