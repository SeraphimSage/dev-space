import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Message.css";
import TextField from "@material-ui/core/TextField";
import { createMessage, getMessages }  from "../../redux/messages";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core";
import { withAsyncActions } from "../HOCs"



class MessageFeed extends React.Component {
    
    componentDidMount(){
        this.props.getMessages()
    }
    
    handleChange = e => {
        e.preventDefault();
            this.setState({
                [e.target.name]: e.target.value
            });
    }
    
    handleCreateMessage = e => {
        e.preventDefault();
        this.props.createMessage(this.state);
        document.getElementById("cm-form").reset();
    }
    render() {
        let messageArray = []
        if (this.props.result) {
            messageArray = this.props.result.messages
        }
        return (
            
            <React.Fragment>
                <div id="message-box">
                <form id="cm-form" type="submit">
                <TextField id="standard-multiline-flexible" label="Post a messsage!"
                multiline
                type="text"
                name="text"
                fullWidth
                placeholder="What's on your mind today?"
                onChange={this.handleChange} />
                <Button id="button" onClick={this.handleCreateMessage}>Post your message</Button>
                </form>
                <h2 id="feed">Message Feed</h2>
                <div>
                    { messageArray }
                </div>
                <NavLink to="/">
                    <p  id="home-link"> <u>Return To Home</u></p>
                </NavLink>
                </div>
                </React.Fragment>

        );
        }
    }
const mapStateToProps = state => {
    return { result: state.messages.getMessages.result,
        loading: state.messages.getMessages.loading,
        error: state.messages.getMessages.error}
}
const mapDispatchToProps = { createMessage, getMessages }
export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed)