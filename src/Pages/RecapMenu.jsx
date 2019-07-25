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
    );
  }
}
