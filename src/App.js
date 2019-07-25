// import React from "react";
import React, { Component } from "react";
import Home from "./Pages/Home";
import NavMain from "./Components/NavMain";
import Payment from "./Pages/Payment";
import PageAuth from "./Pages/Auth";
import { Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Menu from "./Pages/MenuPage";
import Recap from "./Pages/RecapMenu";
import ProtectedRoute from "./auth/ProtectedRoute";
import "./style/App.css";
import "./style/MenuPage.css";
// import Signin from "./Components/SignIn";
// import Dashboard from "./dashboard/Dashboard";

library.add(faUser, faAngleRight, faUserCircle, faSignOutAlt);

// function App() {

//   return (
//     <>
//       <NavMain />
//       <div className="App">
//         <Switch>
//           {/* <Redirect exact from="/" to="/home" /> */}
//           <Route path="/menu" component={Menu} />
//           <Route exact path="/" component={Home} />

//           <Route path={["/signin", "/signup"]} component={PageAuth} />
//           {/* <Route path="/payment" component={Payment} /> */}
//           <ProtectedRoute path="/payment" component={Payment} />
//           <ProtectedRoute path="/dashboard" component={Dashboard} />
//         </Switch>
//       </div>
//     </>
//   );
// }

// export default App;

export class App extends Component {
  state = {
    currentMenus: []
  };

  handleCurrentMenu = menu => {
    this.setState({ currentMenus: [...this.state.currentMenus, menu] });
  };

  render() {
    return (
      <>
        <NavMain />
        <div className="App">
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={Home} />
            <Route
              path="/menu"
              render={props => (
                <Menu
                  {...props}
                  currentMenus={this.state.currentMenus}
                  handleCurrentMenu={this.handleCurrentMenu}
                />
              )}
            />
            <Route path={["/signin", "/signup"]} component={PageAuth} />
            <Route path="/recap" component={Recap} />
            {/* <Route path="/payment" component={Payment} /> */}
            {/* <ProtectedRoute path="/payment" component={Payment} /> */}
            <ProtectedRoute path="/payment" component={Payment} />
            )} />
            {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
