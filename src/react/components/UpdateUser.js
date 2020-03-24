import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/users";
import { DeleteUserProfileBtn} from "../components"
import "./CreateUserForm.css";
import "./LoginForm.css";

class UpdateUserForm extends React.Component {
	state = {
		updateInfo: {
			password: "",
			about: "",
			displayName: ""
		},
    updated: false,
    username: this.props.match
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

  componentDidUpdate = (prevProps) => {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ username: this.props});
    }
  };
  
  render() {
    const { loading, error } = this.props;
            return (
              <React.Fragment>
                <DeleteUserProfileBtn
										currentUser={JSON.parse(localStorage.login).result.username}
										_username={this.props.match}
									/>
									<h2 id="update">Update Username or Password</h2>
                <div id="big-box">
                <form id="update-form" onSubmit={this.handleUpdateUser}>
                  <label className="input-label" htmlFor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    required
                    minLength="4"
                    onChange={this.handleChange}
                  />
                  <label className="input-label" htmlFor="password">About</label>
                  <input
                    type="text"
                    name="about"
                    required
                    minLength="4"
                    onChange={this.handleChange}
                  />
                    <label className="input-label" htmlFor="displayName">Display Name</label>
                  <input
                    type="text"
                    name="displayName"
                    required
                    minLength="4"
                    onChange={this.handleChange}
                  />
                    <button id="button" type="submit" disabled={loading}>
                      Update Info
                    </button>
                </form>
                </div>
                    {error && <p id="error">{error.message}</p>}
              </React.Fragment>
            );
          };
        }
export default connect(
    null,
    { updateUser }
  )(UpdateUserForm);
