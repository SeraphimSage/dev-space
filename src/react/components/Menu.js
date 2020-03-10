import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import { GetUserForm } from "../components";

class Menu extends React.Component {
	getUser = event => {
		event.preventDefault();
		this.props.getUser();
	};

	handleLogout = event => {
		event.preventDefault();
		this.props.logout();
	};

	render() {
		return (
			<div id="menu">
				<img src="src/KwitterLogo.png" alt="kwitter logo" />
				{this.props.isAuthenticated && (
					<div id="menu-links">
						<GetUserForm />
						<Link to="/messagefeed">Message Feed</Link>
						<Link to="/" onClick={this.handleLogout}>
							Logout
						</Link>
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
