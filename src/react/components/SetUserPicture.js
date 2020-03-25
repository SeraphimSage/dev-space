import React from "react";
import { connect } from "react-redux";
import { setUserPicture } from "../../redux";
import "./SetUserPicture.css";
import { Form } from "semantic-ui-react";

class SetUserPicture extends React.Component {
  state = {
    setUserPicture: ""
  };
  handleSetUserPicture = e => {
    console.log("upload started");
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(this);
    this.props.setUserPicture(formData);
  };

  render() {
    return (
      // this.props.username === this.props.username && (
      <Form>
        <Form.Group widths="equal">
          <form onSubmit={this.handleSetUserPicture}>
            <input type="file" name="picture" />
            <br />
            <input type="submit" value="Upload Picture" />
          </form>
        </Form.Group>
      </Form>
      // )
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.login.result.username
  };
};
const mapDispatchToProps = { setUserPicture };
export default connect(mapStateToProps, mapDispatchToProps)(SetUserPicture);
