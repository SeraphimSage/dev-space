import React from "react";
// import { connect } from "react-redux";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
import { createUser } from "../../redux/createUser";

class CreateUserForm extends React.Component {
	state = {
		username: "",
		displayName: "",
		password: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		// const { loading, error } = this.props;}
		// 	return (
		// 		<div className="user" key={user.id}>
		// 			<div>Username: {user.name}</div>
		// 			<div>Display Name: {user.displayName}</div>
		// 			<div>Password: {user.password}</div>
		// 		</div>
		// 	);
		// })
		return (
			<React.Fragment>
				<h2 id="create-head">Create An Account</h2>
				<form id="login-form" onSubmit={this.handleSubmit}>
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
				{/* {loading && <Spinner name="circle" color="blue" />}
				{error && <p style={{ color: "red" }}>{error.message}</p>} */}
			</React.Fragment>
		);
	}
}

export default CreateUserForm;

// connect(
//     state => ({
//       result: state.auth.login.result,
//       loading: state.auth.login.loading,
//       error: state.auth.login.error
//     }),
//     { login }
//   )(CreateUserForm);
