import React from "react";
import { Icon } from "semantic-ui-react";
import "./Message.css";
import { connect } from "react-redux";
import { deleteMessage, getMessages } from "../../redux/messages";

class TrashCanIcon extends React.Component {
  handleDeleteMessage = (e, messageId) => {
    e.preventDefault();
    this.props.deleteMessage(messageId);
  }
  render() {
    return (
        <div className={ this.props.messageId } id="trashdiv">
  <Icon inverted color="red" size="large" name="ban" onClick={(e) => this.handleDeleteMessage(e, this.props.messageId)}/>
  </div>
    )
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
  