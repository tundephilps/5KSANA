import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Shop from "./Pages/Shop";
import CardPage from "./Pages/CardPage";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Auction from "./Pages/Auction";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
    });
  });
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Shop" element={<Shop />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/About" element={<About />} />
          <Route path="/CardPage" element={<CardPage />} />

          <Route path="/Auction" element={<Auction />} />
          <Route path="/Cart" element={<Cart />} />

          <Route path="/Payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
