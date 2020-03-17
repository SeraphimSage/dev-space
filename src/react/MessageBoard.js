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
					<div className="column">
						<MessageFeed />
					</div>
					<div className="column">
						<GetUserList />
					</div>
				</div>
			</>
		);
	}
}

export default userIsAuthenticated(MessageBoard);
