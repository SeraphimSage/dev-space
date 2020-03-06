import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";

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
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleLogin}>
          <label class="input-label" htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label class="input-label" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
            <button class="input-label" type="submit" disabled={loading}>
              Login
            </button>
            <NavLink class="input-label" to="/createuser">
              <button class="input-label" type="" disabled={loading}>
                Create New User
              </button>
            </NavLink>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
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
