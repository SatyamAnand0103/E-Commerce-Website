import React from "react";
import { useRef, useState } from "react";

function SignIn() {
  const [currentText, SetCurrentText] = useState("Create Your Account");
  const refEmail = { useRef };
  const refSignUp = { useRef };
  const refSignIn = useRef();

  let LoginButton = () => {
    SetCurrentText("Login Your Account");
    refEmail.current.style.display = "none";
    refSignIn.current.style.display = "block";
    refSignUp.current.style.display = "none";
  };

  const mystyle = {
    display: "none",
  };

  return (
    <div className="App">
      <div className="left-section">
        <div className="content">
          <h1>Get all your buying problems solved today</h1>
          <p>
            Join IndiaPages and get connected to different suppliers across the
            globe
          </p>
          <div className="cart">
            <img
              src={require("../images/shoppingCart.jpeg")}
              alt="Shopping Cart"
            />
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>
            {/* Create new account */}
            {currentText}
          </h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="Email Address" ref={refEmail} />

            {/* Login Button  -------------------------------------------------*/}

            <button type="submit" ref={refSignUp}>
              Sign Up
            </button>
            <button type="submit" ref={refSignIn} style={mystyle}>
              Sign In
            </button>

            {/* ---------------------------------------------------------------*/}
          </form>
          <p>
            By registering, you agree to the{" "}
            <a href="#terms">Terms and Conditions</a>
          </p>
          <p>
            Already registered?{" "}
            <span id="loginText" onClick={LoginButton}>
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
