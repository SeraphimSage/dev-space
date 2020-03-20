import React from "react";
import { connect } from "react-redux";
import "./Message.css";
<<<<<<< HEAD
import { createMessage} from "../../redux";
import { userIsAuthenticated } from "../HOCs";
import { Button, Form, TextArea } from 'semantic-ui-react'

=======
import { createMessage, getMessages} from "../../redux";
import { userIsAuthenticated } from "../HOCs";
import { TextArea, Button } from "semantic-ui-react";
>>>>>>> 8559a8d705bde3ddafb16364bc70607293e17a1c

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

<<<<<<< HEAD
    render() {
        return (
            <React.Fragment>
            <Form id="cm-form" type="submit">
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
          </Form>
          </React.Fragment>
        );   
    }
=======
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
>>>>>>> 8559a8d705bde3ddafb16364bc70607293e17a1c
}

export default connect(
    state => ({
        result: state.messages.createMessage.result,
        loading: state.messages.createMessage.loading,
        error: state.messages.createMessage.error,
    }),
    { createMessage, getMessages }
    )(userIsAuthenticated(CreateMessageForm));
