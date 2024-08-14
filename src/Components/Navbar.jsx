import { Link } from "react-router-dom";
import { React } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
  const refcart = { useRef };

  const navigate = useNavigate();

  const handleDress = (arg) => {
    props.changeDress(arg);
  };
  const ScrollinWomen = (args) => {
    props.scrollBarForWomenPage(args);
  };

  const ScrollinHome = (args) => {
    props.scrollForHomePage(args);
  };
  const ScrollinAccess = (args) => {
    props.scrollForAccessPage(args);
  };

  let showAddToCartBox = () => {
    navigate("/shopping");
  };

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
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

      <div>
        <button id="chatButton" onClick={toggleChat}>
          💬
        </button>
        {isOpen && (
          <div id="chatWindow">
            <div id="chatHeader">Chat with us!</div>
            <div id="chatBody">
              {messages.map((msg, index) => (
                <div key={index}>{msg}</div>
              ))}
            </div>
            <div id="chatFooter">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Navbar;
