import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <button>Delete Your Account</button>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
