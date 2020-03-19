import React from "react";
import "../react/components/Menu.css";
import "../react/components/update.css";
import { Menu, MessageFeed, GetUserList } from "./components";
import { userIsAuthenticated } from "./HOCs";

class MessageBoard extends React.Component {
	render() {
		return (
			<>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				<div id="row">
					<div className="column" id="placeHolder"></div>
					<div className="column" id="mainBody">
						<MessageFeed />
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

export default userIsAuthenticated(MessageBoard);
