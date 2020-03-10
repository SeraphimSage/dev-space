import React from "react";
import { Menu } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { DeleteUserProfileBtn } from "./components";
import "./components/update.css";

class Profile extends React.Component {
	render() {
		return (
			<>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				<h2 id="profile">Profile</h2>
				<h2 id="displayName">Hello, {this.state}</h2>
				<DeleteUserProfileBtn />
				<h2 id="update">Update Username or Password</h2>
			</>
		);
	}
}

export default userIsAuthenticated(Profile);
