import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { womenDB } from "./DB";

const Women = () => {
  const [kurtisData, setKurtisData] = useState([]);
  const [sareesData, setSareesData] = useState([]);
  const [lehengasData, setLehengasData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Womens";
  }, []);

  useEffect(() => {
    // Fetch Kurtis data
    axios
      .get("http://localhost:1000/kurtis/api")
      .then((response) => {
        console.log("Kurtis API Full Response:", response.data);
        if (response.data && Array.isArray(response.data.kurtisDB)) {
          setKurtisData(response.data.kurtisDB);
        } else {
          console.error("Kurtis API did not return an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching Kurtis data:", error));

    // Fetch Sarees data
    axios
      .get("http://localhost:8000/sarees/api")
      .then((response) => {
        console.log("Sarees API Full Response:", response.data);
        if (response.data && Array.isArray(response.data.sareesDB)) {
          setSareesData(response.data.sareesDB);
        } else {
          console.error("Sarees API did not return an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching Sarees data:", error));

    // Fetch Lehengas data
    axios
      .get("http://localhost:9000/lehengas/api")
      .then((response) => {
        console.log("Lehengas API Full Response:", response.data);
        if (response.data && Array.isArray(response.data.lehengasDB)) {
          setLehengasData(response.data.lehengasDB);
        } else {
          console.error("Lehengas API did not return an array:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching Lehengas data:", error));
  }, []);
  const ScrollWomen = (args) => {
    if (args === "Kurtis") {
      document.documentElement.scrollTo(0, 1100);
    } else if (args === "Sarees") {
      document.documentElement.scrollTo(0, 1500);
    } else if (args === "Lehengas") {
      document.documentElement.scrollTo(0, 2000);
    }
  };

  const WomensToShopping = (i) => {
    let items;
    let database;

    if (i === 0) {
      database = sareesData;
      items = "Sarees";
    } else if (i === 1) {
      database = kurtisData;
      items = "Kurtis";
    } else if (i === 2) {
      database = lehengasData;
      items = "Lehengas";
    }

    navigate("/shopping", { state: { i, items, database } });
  };

  const KurtisToShopping = (i) => {
    navigate("/shopping", {
      state: { i, items: "Kurtis", database: kurtisData },
    });
  };

  const SareesToShopping = (i) => {
    navigate("/shopping", {
      state: { i, items: "Sarees", database: sareesData },
    });
  };

  const LehengasToShopping = (i) => {
    navigate("/shopping", {
      state: { i, items: "Lehengas", database: lehengasData },
    });
  };

  const listItems_2 = womenDB.map((eachItem, index) => (
    <div key={index} className="boxWItem">
      <img
        src={eachItem.imgPath}
        className="pictures_w"
        onClick={() => WomensToShopping(index)}
        alt={eachItem.text}
      />
      <div className="text">{eachItem.text}</div>
    </div>
  ));

  const listItemsKurtis = kurtisData.map((eachItem, index) => (
    <div key={index} className="boxKItem">
      <img
        src={eachItem.imgPath}
        className="pictures_k"
        onClick={() => KurtisToShopping(index)}
        alt={eachItem.text}
      />
      <div className="textOfClothes">
        <p>{eachItem.text}</p>
        <p>{eachItem.price}</p>
      </div>
    </div>
  ));

  const listItemsSarees = sareesData.map((eachItem, index) => (
    <div key={index} className="boxKItem">
      <img
        src={eachItem.imgPath}
        className="pictures_k"
        onClick={() => SareesToShopping(index)}
        alt={eachItem.text}
      />
      <div className="textOfClothes">
        <p>{eachItem.text}</p>
        <p>{eachItem.price}</p>
      </div>
    </div>
  ));

  const listItemsLehengas = lehengasData.map((eachItem, index) => (
    <div key={index} className="boxKItem">
      <img
        src={eachItem.imgPath}
        className="pictures_k"
        onClick={() => LehengasToShopping(index)}
        alt={eachItem.text}
      />
      <span className="textOfClothes">
        <p>{eachItem.text}</p>
        <p>{eachItem.price}</p>
      </span>
    </div>
  ));

  return (
    <div>
      <Navbar scrollBarForWomenPage={ScrollWomen} />

      <div className="caraouselContainer">
        <div className="carousel animate">
          <div className="carousel-item">
            <img src="/images/W_1.avif" alt="carousel 1" />
          </div>
          <div className="carousel-item">
            <img src="/images/W_3.avif" alt="carousel 2" />
          </div>
          <div className="carousel-item">
            <img src="/images/W_2.avif" alt="carousel 3" />
          </div>
          <div className="carousel-item">
            <img src="/images/W_3.avif" alt="carousel 4" />
          </div>
        </div>
      </div>

      <div className="containerWomen">{listItems_2}</div>

      <p className="highterBox"> Designer Kurtis </p>
      <div className="containerKurtis">{listItemsKurtis}</div>

      <p className="highterBox"> Designer Sarees </p>
      <div className="containerSarees">{listItemsSarees}</div>

      <p className="highterBox"> Designer Lehengas</p>
      <div className="containerLehengas">{listItemsLehengas}</div>

      <Footer />
    </div>
  );
};

export default Women;
