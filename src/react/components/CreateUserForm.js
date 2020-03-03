import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

class CreateUserForm extends React.Component {
    state = { username: "", password: "" };

    render() {
        const { loading, error } = this.props;
        return (
        <React.Fragment>
            <h2 id="create-head">Create An Account</h2>
            <form id="login-form" onSubmit={this.handleLogin}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                autoFocus
                required
                onChange={this.handleChange}
            />
            <label htmlFor="displayName">Display Name</label>
            <input
                type="text"
                name="displayName"
                autoFocus
                required
                onChange={this.handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                required
                onChange={this.handleChange}
            />
            <div id="buttons">
                <button type="submit" disabled={loading}>
                Submit
                </button>
            </div>
            </form>
            <NavLink to="/"><a>Return to home</a></NavLink>           
            {loading && <Spinner name="circle" color="blue" />}
            {error && <p style={{ color: "red" }}>{error.message}</p>}
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
  