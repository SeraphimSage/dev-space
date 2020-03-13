import React from "react";
import "../react/components/Menu.css";
import { Menu, MessageFeed, GetUserList } from "./components";
import { userIsAuthenticated } from "./HOCs";

class MessageBoard extends React.Component {
	render() {
		return (
			<>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				<MessageFeed />
				<GetUserList />
			</>
		);
	}
}

export default userIsAuthenticated(MessageBoard);
