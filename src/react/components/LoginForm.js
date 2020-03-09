import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";
import "./CreateUserForm.css";
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
        <div id="big-box">
        <form id="login-form" onSubmit={this.handleLogin}>
          <label minlength="4" className="input-label" htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            minlength="4"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label  className="input-label" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            minlength="4"
            onChange={this.handleChange}
          />
            <button className="input-button" type="submit" disabled={loading}>
              Login
            </button>
        </form>
        </div>
        <div id="navlink-box">
            <NavLink className="input-label" to="/createuser">
              <button className="input-button" type="" disabled={loading}>
                Create New User
              </button>
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
