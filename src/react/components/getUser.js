import React from "react";
import { connect } from "react-redux";

class getUserForm extends React.Component {
	state = {
		username: ""
	};

	handleChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.getUser(this.state);
		document.getElementById("lookup-user-form").reset();
	};

	render() {
		return (
			<React.Fragment>
				<form id="lookup-user-form" onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						// autoFocus
						// required
						onChange={this.handleChange}
					/>
				</form>
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
)(getUserForm);
