import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Message.css";
import TextField from "@material-ui/core/TextField";
import { createMessage, getMessages, deleteMessage } from "../../redux/messages";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateMessageForm from "./CreateMessageForm";

class MessageFeed extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }
  componentDidUpdate(previousProps) {
    if (this.props.username !== previousProps.username) {
        this.props.getMessages();
    }
  }



  render() {
    let messageCompArray = [];
    if (this.props.result) {
      let messages = this.props.result.messages;
      messageCompArray = messages.map(message => (
          <div key={ message.id } id="ms-div">
               <IconButton id="delete" aria-label="delete" onClick={this.handleDeleteMessage}>
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
        <CreateMessageForm></CreateMessageForm>
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
    username: state.auth.login.result.username,
    result: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error
  };
};
const mapDispatchToProps = { createMessage, getMessages, deleteMessage };
export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
