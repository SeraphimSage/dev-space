import React from "react";
import { Menu, UserCard, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <div style={{ display: "flex" }}>
          <UserCard />
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <h3>Your messages</h3>
            <MessageList />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
