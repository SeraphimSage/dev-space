import React from "react";
import { connect } from "react-redux";
import "./Message.css";
<<<<<<< HEAD
import { createMessage, getMessages} from "../../redux";
=======
import { createMessage } from "../../redux";
>>>>>>> 0c67079c9af4879204f68a7543222abd25266ef2
import { userIsAuthenticated } from "../HOCs";
import { TextArea, Button } from "semantic-ui-react";

class CreateMessageForm extends React.Component {
	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleCreateMessage = e => {
		e.preventDefault();
		this.props.createMessage(this.state);
		document.getElementById("cm-form").reset();
	};

	render() {
		return (
			<React.Fragment>
				<form id="cm-form" type="submit">
					<TextArea
						id="standard-multiline-flexible"
						label="Post a messsage!"
						multiline
						type="text"
						name="text"
						fullWidth
						placeholder="What's on your mind today?"
						onChange={this.handleChange}
					/>
					<Button id="button" onClick={this.handleCreateMessage}>
						Post your message
					</Button>
				</form>
			</React.Fragment>
		);
	}
}

export default connect(
<<<<<<< HEAD
    state => ({
        result: state.messages.createMessage.result,
        loading: state.messages.createMessage.loading,
        error: state.messages.createMessage.error,
        result: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error
    }),
    { createMessage, getMessages }
    )(userIsAuthenticated(CreateMessageForm));
=======
	state => ({
		result: state.messages.createMessage.result,
		loading: state.messages.createMessage.loading,
		error: state.messages.createMessage.error
	}),
	{ createMessage }
)(userIsAuthenticated(CreateMessageForm));
>>>>>>> 0c67079c9af4879204f68a7543222abd25266ef2
