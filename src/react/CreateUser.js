import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu} from "./components";
import {CreateUserForm} from "./components";


class CreateUser extends React.Component {
  render() {
    return (
      <>
        <Menu/>
        <CreateUserForm/>
      </>  
    )};
}

export default CreateUser;