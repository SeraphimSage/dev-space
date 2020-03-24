import React from "react";
import { Menu, UpdateUserForm, GetUserList } from "./components";
import { userIsAuthenticated } from "./HOCs";
import "./components/update.css";
import { UserBadge } from "./components";

class Profile extends React.Component {
	state ={
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
					<div className="column" id="placeHolder"></div>
					<div className="column" id="mainBody">
						<h2 id="profile">Profile</h2>
						<UserBadge _username={this.state.username} />
						{console.log(this.props)}
						{ this.props.location.pathname.slice(10) === this.props.match.params.username
								?	<UpdateUserForm />
								: ""}
						
					</div>
					<div className="column" id="getUserList">
						<h3>Check out our newest users!</h3>
						<GetUserList />
					</div>
				</div>
			</>
		);
	}
}

export default userIsAuthenticated(Profile);
