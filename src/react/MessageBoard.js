import React from "react";
import { Menu, MessageFeed } from "./components";

class MessageBoard extends React.Component {
	render() {
		return (
			<>
				<Menu />
				<MessageFeed />
			</>
		);
	}
}

export default MessageBoard;