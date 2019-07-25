<<<<<<< HEAD
import React from "react";
// import RecapMenu from "../Components/RecapMenu";
import "../style/Recap.css";

export default class RecapMenu {
  // handleDelete = index => {
  //   const selectedMenus = [...this.state.selectedMenus];
  //   selectedMenus.splice(index, 1);
  //   this.setState({ selectedMenus });
  // };
  render() {
    return (
      <div className="recap">
        <div className="recapborder">
          <h1>Récapitulatif Commande</h1>
        </div>
      </div>
      /* <div className="recap">
  <div className ="recapborder">
  <h1>Récapitulatif Commande</h1><hr/>
  <div/> */
=======
import React, { Component } from "react";
import ChoiceMenu from "../Components/ChoiceMenu";
import RecapMenu from "../Components/RecapMenu";
import ChoiceAliment from "../Components/ChoiceAliment";
import axios from "axios";

const apiHandler = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export default class Recap extends Component {
  apiHandler.get("/last-order")
  .then()
      .catch(err => {
        this.props.history.push("/signin");
      });
  }

  render() {
 
    return (
      <div>
        <h1>Récapitulatif de commande</h1>
      </div>
>>>>>>> 5443ba6a4a39dcb4bc4006bc0ecb0e31ace5a069
    );
  }
}
