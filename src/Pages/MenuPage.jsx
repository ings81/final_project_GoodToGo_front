import React, { Component } from "react";
import { getAllMenu, getAllAliments } from "../apiCalls/apiCalls";
import ChoiceMenu from "../Components/ChoiceMenu";
import DisplayPrice from "../Components/DisplayPrice";
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
  getTotalPrice = () => {
    let totalPrice = 0;
    // for (let i = 0; i < this.state.selectedMenus.length; i++) {
    //   totalPrice += this.state.selectedMenus[i].price;
    // }
    // this.state.selectedMenus.forEach(menu => {
    //   totalPrice += menu.price;
    // });
    for (let menu of this.state.selectedMenus) {
      totalPrice += menu.price;
    }
    // return this.state.selectedMenus.reduce(
    //   (acc, menu) => (acc += menu.price)
    //  , 0
    // );

    return totalPrice;
  };

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
  handleDelete = menu => {
    const filtered = this.state.selectedMenus.filter(items => {
      return items._id !== menu._id;
    });
    this.setState({ selectedMenus: filtered });
  };

  render() {
    return (
      <div>
        <h1>Menu Page</h1>
        <DisplayPrice price={this.getTotalPrice()} />
        {/* <ChoiceMenu title="Individual Picks" items={this.state.aliments} /> */}
        <ChoiceMenu
          title="Menus"
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
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
