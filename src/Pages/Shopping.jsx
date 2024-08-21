import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { useLocation } from "react-router-dom";

const Shopping = () => {
  const [basketVisible, setBasketVisible] = useState("none");
  const [basketItems, setBasketItems] = useState([]);
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

  const refBasket = useRef();
  const refPay = useRef();
  const location = useLocation();
  const { i, items, database } = location.state || {};

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("basketItems")) || [];
    setBasketItems(savedItems);
  }, []);

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

  const displayPaymentPage = () => {
    console.log("its working !");
    refPay.current.style.border = "2px solid";
    refPay.current.style.height = "36em";
    refPay.current.style.width = "84em";
    refPay.current.style.transition = "1s";
    refPay.current.style.backgroundColor = "white";
    refPay.current.style.marginTop = "-2em";
  };

  const AddToBasket = (i) => {
    const selectedItem = database[i];
    const updatedBasket = [...basketItems, selectedItem];
    setBasketItems(updatedBasket);
    localStorage.setItem("basketItems", JSON.stringify(updatedBasket));
    setBasketVisible("block");
  };

  const removeItemFromBasket = (index) => {
    const updatedBasket = basketItems.filter(
      (_, itemIndex) => itemIndex !== index
    );
    setBasketItems(updatedBasket);
    localStorage.setItem("basketItems", JSON.stringify(updatedBasket));
  };

  const saveBasket = () => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    alert("Basket saved!");
  };

  const CloseTheBasket = () => {
    setBasketVisible("none");
  };

  const MyDiv = {
    position: "relative",
    height: "18em",
    width: "18em",
    top: "12em",
    margin: "auto",
    left: "-10em",
  };

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
        <div style={MyDiv}>
          <img src={database[i].imgPath} id="MyDiv" alt="Product" />
          <h2 id="typeOfClothe"> {items}</h2>
        </div>

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
        <label htmlFor="Size" className="Size">
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

        <div className="Payment" ref={refPay}>
          {/* Form for payment */}
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
          style={{ display: basketVisible }}
          ref={refBasket}
        >
          <img
            src={"images/close.png"}
            onClick={CloseTheBasket}
            style={{
              height: "30px",
              width: "30px",
              position: "absolute",
              right: "1px",
              margin: "17px",
            }}
            alt="Close"
          />
          <div>
            {basketItems.map((item, index) => (
              <div key={index} style={{ margin: "20px", display: "flex" }}>
                <img
                  src={item.imgPath}
                  style={{ height: "8em", marginRight: "20px" }}
                  alt="Product"
                />
                <div style={{ position: "relative", top: "-10px" }}>
                  <p>{item.text}</p>
                  <p>{item.price}</p>
                  <p>{item.stars}</p>
                  <button
                    onClick={() => removeItemFromBasket(index)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginRight: "10px",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={saveBasket}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopping;
