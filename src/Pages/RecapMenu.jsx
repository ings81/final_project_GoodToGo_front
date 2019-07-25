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
    );
  }
}
