import React from "react";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Message.css";
import TextField from "@material-ui/core/TextField";
import { createMessage} from "../../redux";
import Button from "@material-ui/core/Button";
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
            <TextField
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
    state => ({
        result: state.messages.createMessage.result,
        loading: state.messages.createMessage.loading,
        error: state.messages.createMessage.error
    }),
    { createMessage }
    )(userIsAuthenticated(CreateMessageForm));