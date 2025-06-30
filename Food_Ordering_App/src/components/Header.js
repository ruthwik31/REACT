import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  //let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  console.log("Header rendered");
  useEffect(
    () => {
      console.log("useEffect rendered");
    } //,[btnNameReact]
  );
  return (
    <div className="header">
      <div className="Logo-Container">
        <img className="logo" alt="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>onlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
