import React from "react";
import { AccessoriesDB, RingsDB } from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Accessories = () => {
  const ScrollBarAccess = (args) => {
    if (args === "Rings") {
      window.scrollTo(0, 600);
    }
  };

  const listItems_8 = AccessoriesDB.map((eachItem) => {
    return (
      <>
        <img src={eachItem.imgPath} className="pictures_access"></img>
      </>
    );
  });

  const listItems_9 = RingsDB.map((eachItem, index) => {
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
  return (
    <>
      <Navbar scroll={ScrollBarAccess} />

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
