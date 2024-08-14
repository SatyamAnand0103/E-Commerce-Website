import React from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const Shopping = () => {
  const [basketVisible, setBasketVisible] = useState("none");
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    address: "",
    city: "",
    region: "",
    zip: "",
    deliveryMethod: "",
    paymentMethod: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Form Submitted Successfully!");
  };
  const refBasket = { useRef };
  const refPay = { useRef };
  const location = useLocation();
  // const [createDiv, setCreateDiv] = useState(false);
  const { i, items, database } = location.state || {};
  // const [outfit, SetOutfit] = useState(null);

  // SetOutfit("Shirt");
  let displayPaymentPage = () => {
    // alert("its working");

    // document.documentElement.scrollTo(0, 600);

    console.log("its working !");
    refPay.current.style.border = "2px solid";
    refPay.current.style.height = "36em";
    refPay.current.style.width = "84em";
    refPay.current.style.transition = "1s";
    refPay.current.style.backgroundColor = "white";
    refPay.current.style.marginTop = "-2em";
  };

  let AddToBasket = (i) => {
    setBasketVisible("block");
    alert("Index is " + i);
    // refBasket.current.style.display = "block";
    refBasket.current.style.trasnition = "0.5s";


  };

  let CloseTheBasket = () => {
    setBasketVisible("none");

    // refBasket.current.style.display = "none";
  };

  const MyDiv = {
    // border: "2px solid black",
    position: " relative",
    height: "18em",
    width: "18em",
    top: "12em",
    margin: "auto",
    left: "-10em",
  };

  // ------------------------------------------------

  return (
    <>
      <Navbar />
      <div
        style={{
          background: "linear-gradient(to right, #ffcccb, white)",
          height: "45.8em",
          border: "2px solid black",
          margin: "0",
          padding: "0",
        }}
      >
        {/* {i && ( */}
        <div style={MyDiv}>
          <img src={database[i].imgPath} id="MyDiv" />

          {/* {i} */}
          <h2 id="typeOfClothe"> {items}</h2>
        </div>
        <div id="myresult" class="img-zoom-result"></div>

        <p className="dbText"> {database[i].text}</p>
        <p className="dbPrice">{database[i].price}</p>
        <p className="dbStars">{database[i].stars}</p>
        <p className="NumbrerOfItems">
          Number Of Items{" "}
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            max="5"
            placeholder="1"
          />
        </p>
        <label for="Size" className="Size">
          {" "}
          Choose Size :
        </label>
        <select name="Size" id="Size">
          <option value="Select">Select</option>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
        <div className="buttons">
          <button onClick={() => AddToBasket(i)}>Add To Basket</button>
          <button onClick={displayPaymentPage}>Buy Now</button>
        </div>
        {/* creating payment page  */}

        <div className="Payment" ref={refPay}>
          {/* form data */}
          {/* --------------------------------------------------
          
          */}
          <div
            style={{
              padding: "20px",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <h1 style={{ color: "#fff" }}>Customer Details</h1>
            <form
              onSubmit={handleSubmit}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="Enter a first name."
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Enter a last name."
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <h3 style={{ marginTop: "20px" }}>Delivery Details</h3>

              <div>
                <label htmlFor="country">Country/Region*</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                    backgroundColor: "#f5f5f5",
                  }}
                />
              </div>

              <div>
                <label htmlFor="address">Address*</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label htmlFor="city">City*</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div>
                <label htmlFor="region">Region*</label>
                <input
                  type="text"
                  id="region"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                    backgroundColor: "#f5f5f5",
                  }}
                />
              </div>

              <div>
                <label htmlFor="zip">Zip / Postal code*</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <h3 style={{ marginTop: "20px" }}>Delivery Method</h3>

              <div>
                <label>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="standard"
                    checked={formData.deliveryMethod === "standard"}
                    onChange={handleChange}
                    required
                  />
                  Standard Delivery
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="express"
                    checked={formData.deliveryMethod === "express"}
                    onChange={handleChange}
                    required
                  />
                  Express Delivery
                </label>
              </div>

              <h3 style={{ marginTop: "20px" }}>Payment Method</h3>

              <div>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={formData.paymentMethod === "creditCard"}
                    onChange={handleChange}
                    required
                  />
                  Credit Card
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === "paypal"}
                    onChange={handleChange}
                    required
                  />
                  PayPal
                </label>
                <br />
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={formData.paymentMethod === "cashOnDelivery"}
                    onChange={handleChange}
                    required
                  />
                  Cash on Delivery
                </label>
              </div>

              <button
                type="submit"
                style={{
                  backgroundColor: "#9b6bcd",
                  color: "#fff",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  marginTop: "20px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className="basket"
          style={{
            display: basketVisible,
            // display: "none",
          }}
          ref={refBasket}
        >
          {" "}
          <img
            src={require("../images/close.png")}
            onClick={CloseTheBasket}
            style={{
              height: "30px",
              width: "30px",
              position: "absolute",
              right: "1px",
              margin: "17px",
            }}
          />
          <div >
            {" "}
            <img
              src={database[i].imgPath}
              style={{
                border: "2px solid black",
                height: "40px",
                width: "60px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
