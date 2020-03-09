import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";
import { connect } from "react-redux";
import "./Message.css";

class MessageFeed extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id="home-link">
                <NavLink to="/">
                    Return To Home!
                </NavLink>
                </div>
                </React.Fragment>

        );
        }
    }

export default MessageFeed;