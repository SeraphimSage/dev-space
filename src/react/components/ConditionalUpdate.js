import React from "react";
import { UpdateUserForm } from "../components";
import { connect } from "react-redux";
import "../components/update.css";

class ConditionalUpdate extends React.Component {
  render() {
    return (
      <>
        {this.props.result.username === this.props.pathname.slice(10) ? (
          <UpdateUserForm />
        ) : (
          <></>
        )}
      </>
    );
  }
}
export default connect(
  state => ({
    result: state.auth.login.result,
    loading: state.auth.login.loading,
    error: state.auth.login.error,
    pathname: state.router.location.pathname
  }),
  {}
)(ConditionalUpdate);
