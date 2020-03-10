import React from "react";
import { NavLink } from "react-router-dom";
// import { connect } from "react-redux";
import "./Message.css";

class MessageFeed extends React.Component {
    render() {
        return (
            <React.Fragment>

                <NavLink to="/">
                    <p id="home-link"> <u>Return To Home</u></p>
                </NavLink>
                </React.Fragment>

        );
        }
    }

export default MessageFeed;