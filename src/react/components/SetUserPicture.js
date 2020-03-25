import React from "react";
import { connect } from "react-redux";
import { setUserPicture } from "../../redux";
import "./SetUserPicture.css";
import { Form } from "semantic-ui-react";

class SetUserPicture extends React.Component {
  // state = {
  //   upload: false
  // };
  handleSetUserPicture = e => {
    console.log("upload started");
    e.preventDefault();
    const formData = e.target;
    this.props.setUserPicture(formData);
    // const uploadFinish = this.props.setUserPicture.state.upload;
    // this.setState((uploadFinish = true));
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.uploadFinish !== this.props.uploadFinish) {
  //     console.log("Upload Complete");
  //   }
  // }

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <form onSubmit={this.handleSetUserPicture}>
            <input
              type="file"
              id="avatar"
              name="picture"
              accept=".png, .jpg, .jpeg, .gif"
              size="200000"
            />
            <br />
            <input type="submit" value="Upload picture" />
          </form>
        </Form.Group>
      </Form>
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
