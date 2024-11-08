import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SingIn";
import Des from "./Components/Des";
function App() {
  function Cart() {
    return (
      <div>
        <h2>CHUA CODE CART</h2>
      </div>
    );
  }

  return (
    <Router>
      <div div className="TONG">
        <nav className="nav">
          <div className="nav_logo"></div>
          <div className="nav_links">
            <Link to="/" className="nav_link">
              Home
            </Link>
            <Link to="/service" className="nav_link">
              Service
            </Link>
            <Link to="/contact" className="nav_link">
              Contact
            </Link>
            <Link to="/support" className="nav_link">
              Support
            </Link>
            <Link to="/Cart" className="nav_cart">
              Cart
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/des/:id" element={<Des />} />
          <Route path="/SignIn" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
