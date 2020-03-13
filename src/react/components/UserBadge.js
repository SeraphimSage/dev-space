import React from "react"
import { connect } from "react-redux";
import { getUser } from "../../redux/users";
import "../components/badge.css";

class UserBadge extends React.Component {
    componentDidMount() {
        this.props.getUser();
      }
      render() {
        return (
            <React.Fragment>
                <div id="badge-div">
                    <h2>Profile Badge</h2>
                    <h3>Welcome {this.props.username}</h3>
                    <h4>Info</h4>
                    <ul><li>Username: {this.props.result.username}</li> 
                        <li>Display Name: {this.props.result.displayName}</li>
                        <li>About: {this.props.result.about}</li>
                        <li>Created On: {this.props.result.createdAt}</li>                    
                    </ul>
                </div>
                </React.Fragment>
    )
    }
    }

    const mapStateToProps = state => {
        if (state.users.getUser.result) {
            return {
          username: state.users.getUser.result.user.username,
          result: state.users.getUser.result.user,
          loading: state.messages.getMessages.loading,
          error: state.messages.getMessages.error
        };
    };
        return {
            username: "loading...",
            result: "loading...",
            loading: "loading...",
            error: "loading..."
        }
}
      const mapDispatchToProps = { getUser };
      export default connect(mapStateToProps, mapDispatchToProps)(UserBadge);
      