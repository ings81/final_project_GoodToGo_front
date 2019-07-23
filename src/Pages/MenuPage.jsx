import React, { Component } from "react";
import { getAllMenu, getAllAliments, getUser } from "../apiCalls/apiCalls";
import ChoiceMenu from "../Components/ChoiceMenu";
import ChoiceAliment from "../Components/ChoiceAliment";
import RecapMenu from "../Components/RecapMenu";
import "../style/MenuPage.css";

export default class Menu extends Component {
  state = {
    user: [],
    aliments: [],
    menus: [],
    selectedMenus: [],
    selectedAliments: []
  };
  componentDidMount() {
    Promise.all([getAllAliments(), getAllMenu()])
      .then(res => {
        this.setState({
          aliments: res[0].data,
          menus: res[1].data
        });
      })
      .catch(err => console.log(err));
  }

  getAdultMenus = () => {
    return this.state.menus.filter(menu => menu.category === "adult");
  };
  getKidMenus = () => {
    return this.state.menus.filter(menu => menu.category === "kid");
  };

  handleAdd = menu => {
    // const tmpselectedMenus = [...this.state.selectedMenu];
    // tmpselectedMenus.push(menu);
    // this.setState({selectedMenus: tmpselectedMenus})
    this.setState({ selectedMenus: [...this.state.selectedMenus, menu] });
  };

  handleDelete = index => {
    const selectedMenus = [...this.state.selectedMenus];
    selectedMenus.splice(index, 1);
    this.setState({ selectedMenus });
    //Probleme dans le cas ou dans le tableau il y aurait plusieurs elements avec la meme _id
    // const filtered = this.state.selectedMenus.filter(items => {
    //   return items._id !== menu._id;
    // });
    // this.setState({ selectedMenus: filtered });
  };
  // handleAdd = item => {
  //   this.setState({ selectedAliments: [...this.state.selectedAliments, item] });
  // };
  handleDelete = index => {
    const selectedAliments = [...this.state.selectedAliments];
    selectedAliments.splice(index, 1);
    this.setState({ selectedAliments });
  };

  render() {
    return (
      <div>
        <h1>Menu Page</h1>
        <div className="big-container">
          <div className="renderall">
            {/* <ChoiceMenu title="Individual Picks" items={this.state.aliments} /> */}
            <ChoiceMenu
              title="Menus"
              handleAdd={this.handleAdd}
              menus={this.getAdultMenus()}
            />
            <ChoiceMenu
              title="Kids Menus"
              handleAdd={this.handleAdd}
              handleDelete={this.handleDelete}
              menus={this.getKidMenus()}
            />
            <ChoiceAliment
              title="On the go"
              handleAdd={this.handleAdd}
              handleDelete={this.handleDelete}
              items={this.state.aliments}
            />
          </div>
          <div className="asideRecap">
            <h1>Recap Commande</h1>
            <RecapMenu
              handleDelete={this.handleDelete}
              selectedItems={this.state.selectedMenus}
            />
          </div>
        </div>
      </div>
    );
  }
}
