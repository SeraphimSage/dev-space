import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Message.css";
import TextField from "@material-ui/core/TextField";
import { createMessage, getMessages } from "../../redux/messages";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class MessageFeed extends React.Component {
  componentDidMount() {
    this.props.getMessages(0);
  }

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

  handleDeleteMessage = e => {
    if(window.confirm("Are you sure you would like to delete your account?") === true){
        this.props.deleteUser(this.state)
        }
  }


  render() {
    let messageCompArray = [];
    if (this.props.result) {
      let messages = this.props.result.messages;
      messageCompArray = messages.map(message => (
          <div key={ message.id } id="ms-div">
               <IconButton id="delete" aria-label="delete">
        <DeleteIcon />
      </IconButton>
            <p id="ms-text">{`"`}{ message.text }{`"`}</p>
            <p id="username">{`~`}{message.username}</p>
              <p id="ms-time">Posted on {message.createdAt.slice(0,19).split("T").join(" ")}{` GMT `}</p>
          </div>
      ))
    }
    return (
      <React.Fragment>
        <div id="message-box">
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
          <h1 id="feed">Message Feed</h1>
          <div>
            {messageCompArray}
          </div>
          <NavLink to="/">
            <p id="home-link">
              {" "}
              <u>Return To Home</u>
            </p>
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    result: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error
  };
};
const mapDispatchToProps = { createMessage, getMessages };
export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
