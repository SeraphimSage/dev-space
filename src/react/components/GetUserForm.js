import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { getUser } from "../../redux/users";
import "./CreateUserForm.css";
import "./LoginForm.css";

class GetUserForm extends React.Component {
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.getUser(this.state);
		console.log(this.state.user);
		document.getElementById("lookup-user-form").reset();
	};

	render() {
		const { loading, error } = this.props;
		return (
			<React.Fragment>
				<form id="lookup-user-form" onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username: </label>
					<input
						type="text"
						name="username"
						minLength="4"
						onChange={this.handleChange}
					/>
				</form>
				{loading && <Spinner name="circle" color="blue" />}
				{error && (
					<p id="getUserFormSearch" style={{ color: "orange" }}>
						{error.message}
					</p>
				)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		result: state.users.getUser.result,
		loading: state.users.getUser.loading,
		error: state.users.getUser.error
	};
};
const mapDispatchToProps = { getUser };

export default connect(mapStateToProps, mapDispatchToProps)(GetUserForm);
