import React from "react";
import { Menu, UpdateUserForm, GetUserList } from "./components";
import { userIsAuthenticated } from "./HOCs";
import { DeleteUserProfileBtn } from "./components";
import "./components/update.css";
import { UserBadge } from "./components";

class Profile extends React.Component {
	state = {
		username: this.props.match.params.username
	};

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			this.setState({ username: this.props.match.params.username });
		}
	}
	render() {
		return (
			<>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				<div id="row">
					<div className="column">
						<h2 id="profile">Profile</h2>
						<UserBadge _username={this.state.username} />
						<DeleteUserProfileBtn
							currentUser={JSON.parse(localStorage.login).result.username}
							_username={this.props.match.params.username}
						/>
						<h2 id="update">Update Username or Password</h2>
						<UpdateUserForm />
					</div>
					<div className="column">
						<GetUserList />
					</div>
				</div>
			</>
		);
	}
}

export default userIsAuthenticated(Profile);
