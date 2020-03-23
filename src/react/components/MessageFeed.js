import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Message.css";
import { createMessage, getMessages, deleteMessage } from "../../redux/messages";
import CreateMessageForm from "./CreateMessageForm";
import TrashCanIcon from "./TrashCanIcon";
import AddLike from "./AddLike"



class MessageFeed extends React.Component {
  componentDidMount() {
    this.props.getMessages();
  }

  render() {
    const username = this.props.loggedInUsername;
    let messageCompArray = [];
    if (this.props.result) {
      let messages = this.props.result.messages;
      messageCompArray = messages.map(message => (
        <div key={ message.id } id="ms-div">
            {message.username === username && (
              <TrashCanIcon messageId={message.id}/>
            )}
            <p id="ms-text">{`"`}{ message.text }{`"`}</p>
            <p id="username">{`~`}{message.username}</p>
            <p id="ms-time">Posted on {message.createdAt.slice(0,19).split("T").join(" ")}{` GMT `}</p>
            <AddLike messageId={message.id}/>
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
    loggedInUsername: state.auth.login.result.username,
    result: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error
  };
};
const mapDispatchToProps = { createMessage, getMessages, deleteMessage };
export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);
