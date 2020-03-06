import React from "react";
import { LoginForm, Menu } from "./components";
import { userIsNotAuthenticated } from "./HOCs";
import "../react/components/Menu.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2 id="home-login">Please enter login information, or sign up today!</h2>
        <LoginForm />
      
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
