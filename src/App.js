import React from "react";
import Home from "./Pages/Home";
import NavMain from "./Components/NavMain";
import Payment from "./Pages/Payment";
import PageAuth from "./Pages/Auth";
import { Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Menu from "./Pages/MenuPage";
import "./style/App.css";
import "./style/MenuPage.css";

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
          <Route path={["/signin", "/signup"]} component={PageAuth} />
        </Switch>
      </div>
    </>
  );
}

export default App;
