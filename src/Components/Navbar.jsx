import { Link } from "react-router-dom";
import { React } from "react";
import { useRef } from "react";

const Navbar = (props) => {
  const refcart = { useRef };

  const handleDress = (arg) => {
    props.changeDress(arg);
  };
  const ScrollinWomen = (args) => {
    props.scroll(args);
  };

  const ScrollinHome = (args) => {
    props.scroll(args);
  };
  const ScrollinAccess = (args) => {
    props.scroll(args);
  };

  let showCart = false;
  let showAddToCartBox = () => {
    if (showCart === false) {
      refcart.current.style.display = "block";
      showCart = true;
    } else {
      refcart.current.style.display = "none";
      showCart = false;
    }
  };
  return (
    <>
      <div className="backgroundBox">
        {/* Logo */}
        <span class="logo">Arav Ethnics</span>
        <span class="tagline">Embracing the Ethnic</span>
        {/* -------------------- */}

        {/* Semicircles for UI */}
        <div id="red"></div>
        <div id="orange"></div>
        <div id="orange2"></div>
        <div id="green"></div>
        {/* ------------ */}

        <ul>
          <li className="Mens">
            <Link to="/Mens">Mens</Link>
            <div className="tooltiptext">
              <div onClick={() => handleDress("Shirts")}>Shirts</div>
              <div onClick={() => handleDress("Jeans")}>Jeans</div>
            </div>
          </li>

          <li className="Women">
            <Link to="/women">Women</Link>
            <div className="tooltiptext">
              <div onClick={() => ScrollinWomen("Kurtis")}>Kurtis</div>
              <div onClick={() => ScrollinWomen("Sarees")}>Sarees</div>
              <div onClick={() => ScrollinWomen("Lehengas")}>Lehengas</div>
            </div>
          </li>

          <li className="HD">
            <Link to="/home decor"> Home Decor</Link>
            <div className="tooltiptext">
              <div onClick={() => ScrollinHome("Clocks")}>Clocks</div>
              <div onClick={() => ScrollinHome("Curtains")}>Curtains</div>
              <div onClick={() => ScrollinHome("Wall_Decorators")}>
                Wall Decorators
              </div>
            </div>
          </li>
          <li className="AS">
            <Link to="/accessories">Accessories</Link>
            <div className="tooltiptext">
              <div onClick={() => ScrollinAccess("Rings")}>Rings</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="signInOut">
        <Link to="/SignIn" className="login">
          Sign In
        </Link>
      </div>

      {/* <p className="Basket" onClick={showAddToCartBox}> */}
        <img src={require("../images/cart.png")} id="basket" onClick={showAddToCartBox}></img>
      {/* </p> */}
      <div className="AddToBasket" ref={refcart}></div>
    </>
  );
};
export default Navbar;
