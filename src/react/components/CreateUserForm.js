import React from "react";
import { connect } from "react-redux";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
import { createUser } from "../../redux/users";


class CreateUserForm extends React.Component {
	state = {
		username: "",
		displayName: "",
		password: ""
    };

	handleChange = e => {
        e.preventDefault();
        this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
        e.preventDefault();
        this.props.createUser(this.state)
        document.getElementById("create-user-form").reset()
    };
	render() {
		return (
			<React.Fragment>
				<h2 id="create-head">Create An Account</h2>
				<div id="big-box">
				<form id="create-user-form" onSubmit = {this.handleSubmit}>
					<label className="input-label" htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						// autoFocus
						// required
						onChange={this.handleChange}
					/>
					<label className="input-label" htmlFor="displayName">Display Name</label>
					<input
						type="text"
						name="displayName"
						// autoFocus
						// required
						onChange={this.handleChange}
					/>
					<label className="input-label" htmlFor="password">Password</label>
					<input 
						type="password"
						name="password"
						// required
						onChange={this.handleChange}
					/>
						<button className="input-button" type="submit">Submit</button>
				</form>
				</div>
				<div id="navlink-box">
				<NavLink id="navlink-create" to="/">Return to home</NavLink>
				</div>
			</React.Fragment>
		);
	}
}

export default connect(
    state => ({
      result: state.users.createUser.result,
      loading: state.users.createUser.loading,
      error: state.users.createUser.error
    }),
    { createUser }
  )(CreateUserForm);
