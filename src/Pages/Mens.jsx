import React from "react";
import { shirtsDB } from "./DB";
import { jeansDB } from "./DB";
import Typed from "typed.js";
import { useEffect, useState, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Mens = () => {
  const [brand, setBrand] = useState("Shirts");
  const [DB, setDB] = useState(shirtsDB);

  const navigate = useNavigate();

  let changeDressDB = (arg) => {
    if (arg === "Shirts") {
      setDB(shirtsDB);
    } else {
      setDB(jeansDB);
    }
    setBrand(arg);
  };

  let mensToShopping = () => {
    alert("hey its working from mens");
    navigate("/shopping");
  };

  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        " Online Shopping",
        "Building a better you",
        "Fashion Freak",
        "Unlock Your Style",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, []);

  const listItems = DB.map((eachItem, index) => {
    return (
      <>
        <div key={index} className="boxItem">
          <img
            src={eachItem.imgPath}
            className="pictures"
            onClick={mensToShopping}
          ></img>
          <div className="overlay">{eachItem.price}</div>
          <div className="text">{eachItem.text}</div>
          <div className="contents"> {eachItem.stars}</div>
        </div>
      </>
    );
  });

  return (
    <div>
      <Navbar changeDress={changeDressDB} />

      <div className="mens">
        <div className="bgBox">
          <div className="animie">
            <h1 id="typing-container">
              <span ref={el}></span>{" "}
            </h1>

            <h5 className="details">
              Discover new and stylish summer collection, it will make your
              shopping perfect.{" "}
            </h5>
            <img
              src={require("../images/shopping.png")}
              className="fadeImg"
            ></img>
          </div>
        </div>
      </div>

      <div id="blue"></div>
      <div id="blue2"></div>
      <div className="mensBox">{brand}</div>

      <div className="containerMens">{listItems}</div>
      <Footer />
    </div>
  );
};
export default Mens;
