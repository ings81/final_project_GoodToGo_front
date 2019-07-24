import React, { Component } from "react";
import Map from "../Components/Map";
import Footer from "../Components/Footer";

export default class Home extends Component {
  handleClick = message => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <img
          src="https://res.cloudinary.com/inga-bacher/image/upload/v1563806669/final_project_GoodToGO/nouveautes_i4rw2s.jpg"
          alt="news"
        />
        <div>
          <Map handleClick={this.handleClick} />
        </div>
        <Footer />
      </div>
    );
  }
}
