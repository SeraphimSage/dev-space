import React from "react";
import { connect } from "react-redux";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
import { createUser } from "../../redux/users";
import GoogleLogin from "react-google-login";
import { login } from "../../redux/auth";

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
    this.props.createUser(this.state).then(() =>
      this.props.login({
        username: this.state.username,
        password: this.state.password
      })
    );
    document.getElementById("create-user-form").reset();
  };
  render() {
    const responseGoogle = response => {
      console.log(response);
      const googleLoginData = {
        username: response.profileObj.givenName,
        displayName: response.profileObj.givenName,
        password: response.profileObj.googleId.slice(6)
      };
      this.props.createUser(googleLoginData).then(() =>
        this.props.login({
          username: googleLoginData.username,
          password: googleLoginData.password
        })
      );
    };
    return (
      <React.Fragment>
        <h2 id="create-head">Create An Account</h2>
        <div id="big-box">
          <form id="create-user-form" onSubmit={this.handleSubmit}>
            <label className="input-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              name="username"
              minLength="4"
              required
              onChange={this.handleChange}
            />
            <label className="input-label" htmlFor="displayName">
              Display Name
            </label>
            <input
              type="text"
              name="displayName"
              minLength="4"
              required
              onChange={this.handleChange}
            />
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              minLength="4"
              onChange={this.handleChange}
            />

            <button size="large" className="input-button" type="submit">
              Submit
            </button>
            <button size="large">
              <NavLink id="navlink-create" to="/">
                Return to home
              </NavLink>
            </button>
            <GoogleLogin
              clientId="621780130975-9tfkj368qsdc5hbgbsiqsnrrd86lpsli.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </form>
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
  { createUser, login }
)(CreateUserForm);
