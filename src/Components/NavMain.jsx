import React from "react";
import "./NavMain.css";
// import "font-awesome/css/font-awesome.min.css";
import burger from "../images/Burger_King.svg.png";
// eslint-disable-next-line
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { NavLink } from "react-router-dom";

function NavMain() {
  //   const myRef = React.createRef();

  //   function toggleCollapse() {
  //     myRef.current.classList.toggle("collapse");
  //   }

  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-burger" src={burger} alt="gros logo de burger" />
        <div className="left-logo">
          <h1>GOOD TO GO</h1>
          <p>the fastest way to get to the road</p>
        </div>
        <div className="icones">
          <div className="ico">
            <i className="fas fa-hamburger fa-2x" />
            <p>Menu</p>
          </div>
          <div className="ico">
            <i className="fas fa-map-pin fa-2x" />
            <p>Map</p>
          </div>
          <div className="ico">
            <i className="far fa-user fa-2x" />
            <p>Log In</p>
          </div>
          <div className="ico">
            <i className="fas fa-sign-in-alt fa-2x" />
            <p>Sign In</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavMain;
