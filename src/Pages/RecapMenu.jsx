import React from "react";
import RecapMenu from "../Components/RecapMenu";

export default class Recap extends Component {

  handleDelete = index => {
    const selectedMenus = [...this.state.selectedMenus];
    selectedMenus.splice(index, 1);
    this.setState({ selectedMenus });
  };

  render();
  return (
    <div>
      <RecapMenu
        handleDelete={this.handleDelete}
        selectedItems={this.state.selectedMenus}
      />
    </div>
  );
};
