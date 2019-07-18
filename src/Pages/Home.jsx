import React, { Component } from "react";
import Map from "../Components/Map";

export default class Home extends Component {
  handleClick = message => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Map handleClick={this.handleClick} />
      </div>
    );
  }
}
