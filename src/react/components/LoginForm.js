import React from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import { login } from "../../redux";
import "./LoginForm.css";
import "./CreateUserForm.css";
import { NavLink } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { Button, Form } from "semantic-ui-react";

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
          <Form id="login-form" onSubmit={this.handleLogin} inverted>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="username"
                minLength="4"
                className="input-label"
                htmlFor="username"
                type="text"
                name="username"
                required
                error
                onChange={this.handleChange}
              />
              <Form.Input
                label="password"
                className="input-label"
                htmlFor="password"
                type="password"
                name="password"
                required
                minLength="4"
                error
                onChange={this.handleChange}
              />
              <Button.Group vertical size="small">
                <Button
                  variant="outlined"
                  type="submit"
                  disabled={loading}
                  content="Login"
                />
                <NavLink to="/createuser">
                  <Button
                    variant="outlined"
                    type="submit"
                    disabled={loading}
                    content="Create New User"
                  />
                </NavLink>

                {loading && <Spinner name="circle" color="blue" />}
                {error && <p id="error">{error.message}</p>}
              </Button.Group>
              <GoogleLogin
                clientId="621780130975-9tfkj368qsdc5hbgbsiqsnrrd86lpsli.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Form.Group>
          </Form>
        </div>
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
