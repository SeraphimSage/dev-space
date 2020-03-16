import React from "react";
import { Menu, UpdateUserForm } from "./components";
import "./components/update.css";


class UpdateUserPage extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2 id="update">Update Username or Password</h2>
        <UpdateUserForm/>
        </>
    );
  }
}


export default UpdateUserPage;