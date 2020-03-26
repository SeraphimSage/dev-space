import React from "react";
import { connect } from "react-redux";
import { setUserPicture } from "../../redux";
import "./SetUserPicture.css";

class SetUserPicture extends React.Component {
  handleSetUserPicture = e => {
    console.log("upload started");
    e.preventDefault();
    const formData = e.target;
    this.props.setUserPicture(formData);
  };

  render() {
    return (
      <form onSubmit={this.handleSetUserPicture}>
        <input
          type="file"
          id="avatar"
          name="picture"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <button type="submit">Upload picture</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.login.result.username,
    result: state.users.setUserPicture.result,
    loading: state.users.setUserPicture.loading,
    error: state.users.setUserPicture.error
  };
};
const mapDispatchToProps = { setUserPicture };
export default connect(mapStateToProps, mapDispatchToProps)(SetUserPicture);
