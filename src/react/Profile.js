import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { DeleteUserProfileBtn } from "./components"




class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <DeleteUserProfileBtn/>
        <h2>UPDATE USERNAME AND PASSWORD</h2>
        </>
    );
  }
}

export default userIsAuthenticated(Profile);
