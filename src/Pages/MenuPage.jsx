import React, { Component } from "react";
import { getAllMenu, getAllAliments } from "../apiCalls/apiCalls";
import ChoiceMenu from "../Components/ChoiceMenu";
import RecapMenu from "../Components/RecapMenu";
export default class Menu extends Component {
  state = {
    aliments: [],
    menus: [],
    selectedMenus: []
  };
  componentDidMount() {
    Promise.all([getAllAliments(), getAllMenu()])
      .then(res => {
        this.setState({ aliments: res[0].data, menus: res[1].data });
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

  render() {
    return (
      <div>
        <h1>Menu Page</h1>
        <RecapMenu
          handleDelete={this.handleDelete}
          selectedItems={this.state.selectedMenus}
        />
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
      </div>
    );
  }
}
