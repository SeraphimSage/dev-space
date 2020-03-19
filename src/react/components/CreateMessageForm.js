import React from "react";
import { connect } from "react-redux";
import "./Message.css";
import { createMessage, getMessages} from "../../redux";
import { userIsAuthenticated } from "../HOCs";


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
            <input 
              id="ui input"
              label="Post a messsage!"
              type="text"
              name="text"
              placeholder="What's on your mind today?"
              onChange={this.handleChange}
            />
            <button id="ui button" onClick={this.handleCreateMessage}>
              Post your message
            </button>
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
        result: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error
    }),
    { createMessage, getMessages }
    )(userIsAuthenticated(CreateMessageForm));