import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
import { createUser } from "../../redux/createUser";

class CreateUserForm extends React.Component {
	state = {
		username: "",
		displayName: "",
		password: ""
	};

	handleCreateUser = e => {
		e.preventDefault();
		this.props.createUser(this.state);
		console.log(this.DefaultRootState);
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { loading, error } = this.props;
		return (
			<React.Fragment>
				<h2 id="create-head">Create An Account</h2>
				<h3 id="instructions">
					To create your account please make sure your Username, Display name,
					and password are over 3 characters in length.
				</h3>
				<form id="createUser-form" onSubmit={this.handleCreateUser}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						autoFocus
						required
						onChange={this.handleChange}
					/>
					<label htmlFor="displayName">Display Name</label>
					<input
						type="text"
						id="displayName"
						autoFocus
						required
						onChange={this.handleChange}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						required
						onChange={this.handleChange}
					/>
					<div id="buttons">
						<button type="submit">Submit</button>
					</div>
				</form>
				<NavLink to="/">Return to home</NavLink>
				<div className="test"></div>
				{loading && <Spinner name="circle" color="blue" />}
				{error && <p style={{ color: "red" }}>{error.message}</p>}
			</React.Fragment>
		);
	}
}

export default connect(
	state => ({
		result: state.users
	}),
	{ createUser }
)(CreateUserForm);
