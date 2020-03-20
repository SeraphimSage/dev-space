import React from "react";
import { Icon } from "semantic-ui-react";
import "./Message.css";
import { connect } from "react-redux";
import { deleteMessage, getMessages } from "../../redux/messages";

class TrashCanIcon extends React.Component {
  
  handleDeleteMessage = (e, messagesId) => {
    console.log("hello")
    e.preventDefault();
    this.props.deleteMessage(messagesId);
  }

  render() {
    return (
      TrashCanIcon = () => (
        <div id="trashdiv">
  <Icon inverted color="red" size="large" name="ban" onClick={(e) => this.handleDeleteMessage(e, this.props.result.message.id)}/>
  </div>
    ))
}
}
const mapStateToProps = state => {
  return {
    result: state.messages.getMessages.result,
    loading: state.messages.getMessages.loading,
    error: state.messages.getMessages.error
  };
};
const mapDispatchToProps = { getMessages, deleteMessage };
export default connect(mapStateToProps, mapDispatchToProps)(TrashCanIcon);
  