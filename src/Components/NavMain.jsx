import React from "react";
import "./NavMain.css";
// import "font-awesome/css/font-awesome.min.css";
import burger from "../images/Burger_King.svg.png";
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
        <div className="right-logo" />
        <i class="fas fa-hamburger" />
        <i class="fas fa-map-pin" />
        <i className="far fa-user" />
        <i class="fas fa-sign-in-alt" />
      </div>

      <div />
    </div>
    // <div className="pos-f-t">
    //   <div ref={myRef} className="collapse" id="navbarToggleExternalContent">
    //     <div className="bg-dark p-4">
    //       <h5 className="text-white h4">Collapsed content</h5>
    //       <span className="text-muted">Toggleable via the navbar brand.</span>
    //     </div>
    //   </div>
    //   <nav className="navbar navbar-dark bg-dark">
    //     <button
    //       onClick={toggleCollapse}
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarToggleExternalContent"
    //       aria-controls="navbarToggleExternalContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //   </nav>
    // </div>
  );
}
export default NavMain;
