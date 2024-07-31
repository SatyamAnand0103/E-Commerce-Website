import "./style.css";
import { Routes, Route } from "react-router-dom";

// pages
import SignIn from "./Pages/SignIn";
import Mens from "./Pages/Mens";
import Women from "./Pages/Women";
import Home_Decor from "./Pages/Home_Decor";
import Accessories from "./Pages/Accessories";

// components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Mens" element={<Mens />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/home decor" element={<Home_Decor />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </div>
  );
}

export default App;
