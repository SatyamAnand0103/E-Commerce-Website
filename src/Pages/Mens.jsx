import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Typed from "typed.js";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Mens = () => {
  const [shirtsData, setShirtsData] = useState(null);
  const [jeansData, setJeansData] = useState(null);
  const [brand, setBrand] = useState("Shirts");
  const navigate = useNavigate();
  const el = useRef(null);

  useEffect(() => {
    document.title = "Mens";
  }, []);

  // Fetch data from both APIs
  useEffect(() => {
    const shirtsURL = "http://localhost:5000/shirt/api";
    const jeansURL = "http://localhost:4000/jeans/api";

    axios
      .all([axios.get(shirtsURL), axios.get(jeansURL)])
      .then(
        axios.spread((shirtsResponse, jeansResponse) => {
          setShirtsData(shirtsResponse.data.shirtsDB);
          setJeansData(jeansResponse.data.jeansDB);
        })
      )
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const changeDressDB = (arg) => {
    setBrand(arg);
  };

  const mensToShopping = (i) => {
    console.log("Mens Database id: " + i);

    const items = brand;
    let database;
    if (i >= 0 && i < 20) {
      database = brand === "Shirts" ? shirtsData : jeansData;
    }
    navigate("/shopping", { state: { i, items, database } });
  };

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "Online Shopping",
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

      return () => {
        typed.destroy();
      };
    }
  });

  if (!shirtsData || !jeansData) return <div>Loading...</div>; // Loading state until both datasets are fetched

  const listItems =
    (brand === "Shirts" ? shirtsData : jeansData) &&
    (brand === "Shirts" ? shirtsData : jeansData).map((eachItem, index) => (
      <div key={index} className="boxItem">
        <img
          src={eachItem.imgPath}
          className="pictures"
          onClick={() => mensToShopping(index)}
          alt="Outfit"
        />
        <div className="overlay">{eachItem.price}</div>
        <div className="text">{eachItem.text}</div>
        <div className="contents">{eachItem.stars}</div>
      </div>
    ));

  return (
    <div>
      <Navbar changeDress={changeDressDB} />

      <div className="bgBox">
        <div className="animie">
          <h1 id="typing-container">
            <span ref={el}></span>
          </h1>

          <h5 className="details">
            Discover new and stylish summer collection, it will make your
            shopping perfect.
          </h5>
          <img src={"images/shopping.png"} className="fadeImg" alt="Shopping" />
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
