import React from "react";
import UpdateUserForm from "./components/UpdateUser";
import Menu from "./components/Menu";
import userIsAuthenticated from "./HOCs/userIsAuthenticated";

class UpdateUserPage extends React.Component {
    render() {
        return (
          <>
            <Menu isAuthenticated={this.props.isAuthenticated} />
            <UpdateUserForm/>
            </>
        );
      }
}

export default userIsAuthenticated(UpdateUserPage);
