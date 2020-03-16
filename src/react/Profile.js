import React from "react";
import { Menu, UpdateUserForm } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { DeleteUserProfileBtn } from "./components"
import "./components/update.css";
import { UserBadge } from "./components";
import { NavLink } from "react-router-dom";


class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 id="profile">Profile</h2>
        <UserBadge/>
        <DeleteUserProfileBtn/>
        <NavLink to="/updateuser">
            Update Username or Password
        </NavLink>
        </>
    );
  }
}


export default userIsAuthenticated(Profile);
