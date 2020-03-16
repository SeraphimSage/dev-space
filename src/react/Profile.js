import React from "react";
import { Menu, UpdateUserForm } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { DeleteUserProfileBtn } from "./components";
import "./components/update.css";
import { UserBadge } from "./components";

class Profile extends React.Component {
	render() {
		return (
			<>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				<h2 id="profile">Profile</h2>
				<UserBadge />
				<DeleteUserProfileBtn />
				<h2 id="update">Update Username or Password</h2>
				<UpdateUserForm />
			</>
		);
	}
}

export default userIsAuthenticated(Profile);
