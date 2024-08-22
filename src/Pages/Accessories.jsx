import React, { useEffect, useState } from "react";
import axios from "axios";
import { AccessoriesDB } from "./DB";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const Accessories = () => {
  const [ringsData, setRingsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Accessories";
  }, []);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    axios
      .get("http://localhost:13000/rings/api")
      .then((response) => {
        setRingsData(response.data.RingsDB);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const ScrollBarAccess = (args) => {
    if (args === "Rings") {
      window.scrollTo(0, 600);
    }
  };

  const AccessoriesToShopping = (i) => {
    let items = "Rings";
    let database = ringsData;

    setTimeout(() => {
      navigate("/shopping", { state: { i, items, database } });
    }, 400);
  };

  const listItems_8 = AccessoriesDB.map((eachItem, index) => {
    return (
      <div key={index}>
        <img
          src={eachItem.imgPath}
          className="pictures_access"
          alt={eachItem.text}
        ></img>
      </div>
    );
  });

  const listItems_9 = ringsData.map((eachItem, index) => {
    return (
      <div key={index} className="boxKItem">
        <img
          src={eachItem.imgPath}
          className="picturesRings"
          onClick={() => AccessoriesToShopping(index)}
          alt={eachItem.text}
        />
        <div className="text_Rings">
          {eachItem.text}
          <p>{eachItem.price}</p>
        </div>
      </div>
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
          Enhance your beauty with our jewelry that is spectacular and
          affordable. Browse our catalog to find what you prefer.
        </h5>
        <div className="imageContainAccess">{listItems_8}</div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p className="highterBox"> Rings </p>
      <div className="containerRings">{listItems_9}</div>
      <Footer />
    </>
  );
};

export default Accessories;
