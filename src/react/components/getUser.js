import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { getUser } from "../../redux/users";
import "./CreateUserForm.css";
import "./LoginForm.css";

class GetUserForm extends React.Component {
	state = {
		getUserInfo: {
			username: ""
		}
	};

	// handleChange = e => {
	// 	e.preventDefault();

	// 	this.setState({
	// 		[e.target.name]: e.target.value
	// 	});
	// };

	handleChange = e => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.getUser(this.state);
		document.getElementById("lookup-user-form").reset();
		console.log(this.state);
	};

	render() {
		const { loading, error } = this.props;
		return (
			<React.Fragment>
				<form id="lookup-user-form" onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						minLength="4"
						// autoFocus
						// required
						onChange={this.handleChange}
					/>
				</form>
				{loading && <Spinner name="circle" color="blue" />}
				{error && <p style={{ color: "red" }}>{error.message}</p>}
			</React.Fragment>
		);
	}
}

export default connect(
	state => ({
		result: state.users.getUser.result,
		loading: state.users.getUser.loading,
		error: state.users.getUser.error
	}),
	{ getUser }
)(GetUserForm);
