import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import KwitterLogo from "./KwitterLogo.png";

class Menu extends React.Component {
	handleLogout = event => {
		event.preventDefault();
		this.props.logout();
	};

	render() {
		return (
			<div id="menu">
				<img id="logo" src={KwitterLogo} alt="the kwitter logo" />
				{this.props.isAuthenticated && (
					<div id="menu-links">
						<NavLink to="/messagefeed">Message Feed</NavLink>
						<NavLink to="/profile/${username}">Profile</NavLink>
						<NavLink to="/" onClick={this.handleLogout}>
							Logout
						</NavLink>
					</div>
				)}
			</div>
		);
	}
}

export default connect(
	state => ({
		result: state.auth.logout.result,
		loading: state.auth.logout.loading,
		error: state.auth.logout.error
	}),
	{ logout }
)(Menu);
