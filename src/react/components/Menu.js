import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { connect } from "react-redux";
import { logout } from "../../redux";
import KwitterLogo from "./KwitterLogo.png";
import GetUserForm from "./GetUserForm";

class Menu extends React.Component {
	handleLogout = event => {
		event.preventDefault();
		this.props.logout();
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		return (
			<div id="menu">
				<img id="logo" src={KwitterLogo} alt="the kwitter logo" />
				{this.props.isAuthenticated && (
					<div id="menu-links">
						<GetUserForm />
						<Link to="/" onClick={this.handleItemClick}> Your Profile</Link>
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
