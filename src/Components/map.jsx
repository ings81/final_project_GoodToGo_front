import React from "react";

function map() {
  const burgerKingNemours = {
    lat: 48.263823,
    lng: 2.721785
  };
  const startMap = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: burgerKingNemours
  });
  return <div />;
}

export default map;
