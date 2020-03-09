import React from "react"
import { connect } from "react-redux";
import { updateUser } from "../../redux/users"
import "./CreateUserForm.css";

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
            this.setState({updated:!this.state.updated});
            document.getElementById("update-form").reset();
            window.alert("Your information has been updated.");
            };
        
          handleChange = e => {
            const updateInfo = {...this.state.updateInfo}
            updateInfo[e.target.name] = e.target.value 
            this.setState({updateInfo: updateInfo})
          };


          render() {
            const { loading, error } = this.props;
            return (
              <React.Fragment>
                <div id="big-box">
                <form id="update-form">
                  <label className="input-label" htmlFor="password">Password</label>
                  <input
                    type="text"
                    name="password"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                  <label className="input-label" htmlFor="password">About</label>
                  <input
                    type="text"
                    name="about"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                    <label className="input-label" htmlFor="displayName">Display Name</label>
                  <input
                    type="text"
                    name="displayName"
                    autoFocus
                    required
                    onChange={this.handleChange}
                  />
                    <button onClick={this.handleUpdateUser} className="input-button" type="submit" disabled={loading}>
                      Update Info
                    </button>
                    {error && <p id="error">{error.message}test</p>}
                </form>
                </div>
              </React.Fragment>
            );
          };
        }

export default connect(
    (state) => {},
    { updateUser }
  )(UpdateUserForm);