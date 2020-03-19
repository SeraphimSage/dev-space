import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Button } from "semantic-ui-react";

class LoginForm extends React.Component {
	state = {
		username: "",
		password: ""
	};

	handleLogin = e => {
		e.preventDefault();
		this.props.login(this.state);
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { loading, error } = this.props;
		const responseGoogle = response => {
			console.log(response);
			const googleLoginData = {
				username: response.profileObj.givenName,
				password: response.profileObj.googleId.slice(6)
			};
			this.props.login(googleLoginData);
		};
		return (
			<React.Fragment>
				<div id="big-box">
					<form id="login-form" onSubmit={this.handleLogin}>
						<label minLength="4" className="input-label" htmlFor="username">
							Username
						</label>
						<input
							type="text"
							name="username"
							minLength="4"
							autoFocus
							required
							onChange={this.handleChange}
						/>
						<label className="input-label" htmlFor="password">
							Password
						</label>
						<input
							type="password"
							name="password"
							autoFocus
							required
							minLength="4"
							onChange={this.handleChange}
						/>
						<Button
							variant="outlined"
							id="button"
							type="submit"
							disabled={loading}
						>
							<strong>Login</strong>
						</Button>
						<GoogleLogin
							clientId="621780130975-9tfkj368qsdc5hbgbsiqsnrrd86lpsli.apps.googleusercontent.com"
							buttonText="Login"
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={"single_host_origin"}
						/>
					</form>
				</div>
				<div id="navlink-box">
					<NavLink to="/createuser">
						<Button variant="outlined" id="button" type="" disabled={loading}>
							<strong>Create New User</strong>
						</Button>
					</NavLink>
				</div>
				{loading && <Spinner name="circle" color="blue" />}
				{error && <p id="error">{error.message}</p>}
			</React.Fragment>
		);
	}
}

export default connect(
	state => ({
		result: state.auth.login.result,
		loading: state.auth.login.loading,
		error: state.auth.login.error
	}),
	{ login }
)(LoginForm);
