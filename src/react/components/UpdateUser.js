import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/users";
import "./CreateUserForm.css";
import "./LoginForm.css";
import { SetUserPicture } from ".";
import { Form, Button } from "semantic-ui-react";

class UpdateUserForm extends React.Component {
  state = {
    updateInfo: {
      password: "",
      about: "",
      displayName: ""
    },
    updated: false
  };

  handleUpdateUser = e => {
    e.preventDefault();
    this.props.updateUser(this.state.updateInfo);
    this.setState({ updated: !this.state.updated });
  };

  handleChange = e => {
    const updateInfo = { ...this.state.updateInfo };
    updateInfo[e.target.name] = e.target.value;
    this.setState({ updateInfo: updateInfo });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <div id="big-box">
          <Form onSubmit={this.handleUpdateUser}>
            <label className="input-label" htmlFor="password">
              Password
            </label>
            <Form.Input
              type="text"
              name="password"
              autoFocus
              required
              minLength="4"
              onChange={this.handleChange}
            />
            <label className="input-label" htmlFor="password">
              About
            </label>
            <Form.Input
              type="text"
              name="about"
              autoFocus
              required
              minLength="4"
              onChange={this.handleChange}
            />
            <label className="input-label" htmlFor="displayName">
              Display Name
            </label>
            <Form.Input
              type="text"
              name="displayName"
              autoFocus
              required
              minLength="4"
              onChange={this.handleChange}
            />
            <Button id="button" type="submit" disabled={loading}>
              Update Info
            </Button>
          </Form>
          <SetUserPicture username={this.props.username} />
        </div>
        {error && <p id="error">{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default connect(null, { updateUser })(UpdateUserForm);
