import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import CreateUser from "./CreateUser";
import MessageBoard from "./MessageBoard";
import UpdateUserPage from "../react/UpdateUserPage";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/createuser" component={CreateUser} />
        <Route exact path="/messagefeed" component={MessageBoard} />
        <Route exact path="/updateuser" component={UpdateUserPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
