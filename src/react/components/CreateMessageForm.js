import React from "react";
import { connect } from "react-redux";
import "./Message.css";
import { createMessage} from "../../redux";
import { userIsAuthenticated } from "../HOCs";
import { Button, Form, TextArea } from 'semantic-ui-react'


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
						multiline="true"
						type="text"
						name="text"
						fullwidth="true"
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
    state => ({
        result: state.messages.createMessage.result,
        loading: state.messages.createMessage.loading,
        error: state.messages.createMessage.error,
    }),
    { createMessage }
    )(userIsAuthenticated(CreateMessageForm));
