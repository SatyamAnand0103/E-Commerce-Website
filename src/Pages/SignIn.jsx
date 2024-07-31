import React from "react";

function SignIn() {
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
          <h2>Create new account</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="password" placeholder="Password" />
            <input type="email" placeholder="Email Address" />
            {/* <div className="radio-buttons">
              <label>
                <input type="radio" name="role" value="buyer" defaultChecked />
                Buyer
              </label>
              <label>
                <input type="radio" name="role" value="supplier" />
                Supplier
              </label>
            </div> */}
            <button type="submit">SIGN UP</button>
          </form>
          <p>
            By registering, you agree to the{" "}
            <a href="#terms">Terms and Conditions</a>
          </p>
          <p>
            Already registered? <a href="#login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
