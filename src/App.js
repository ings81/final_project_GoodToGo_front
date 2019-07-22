import React from "react";
import Home from "./Pages/Home";
import NavMain from "./Components/NavMain";
import Payment from "./Pages/Payment";
import { Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Menu from "./Pages/MenuPage";
import "./App.css";

library.add(faUser, faAngleRight, faUserCircle);

function App() {
  return (
    <>
      <NavMain />
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/menu" component={Menu} />
          <Route path="/home" component={Home} />
          <Route path="/payment" component={Payment} />
        </Switch>
      </div>
    </>
  );
}

export default App;
