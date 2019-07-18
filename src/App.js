import React from "react";
import Home from "./Pages/Home";
import NavMain from "./Components/NavMain";
// import ChoiceMenu from "./Components/ChoiceMenu";
// import Payment from "./Components/Payment";
// import Price from "./Components/Price";
// import Recap from "./Components/Recap";
// import SearchBar from "./Components/SearchBar";
// import Selection from "./Components/Selection";
// import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Menu from "./Pages/MenuPage";

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
          {/* <Route path="/menupage" component={ChoiceMenu} />
          <Route path="/payment" component={Payment} /> */}
        </Switch>
      </div>
    </>
  );
}

export default App;
