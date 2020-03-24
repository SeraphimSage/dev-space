import React from "react";
import { Menu, ConditionalUpdate, GetUserList } from "./components";
import { userIsAuthenticated } from "./HOCs";
import "./components/update.css";
import { UserBadge } from "./components";

class Profile extends React.Component {

	render() {
		return (
			<>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				<div id="row">
					<div className="column" id="placeHolder"></div>
					<div className="column" id="mainBody">
						<h2 id="profile">Profile</h2>
						<UserBadge />
						<ConditionalUpdate />
						
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
