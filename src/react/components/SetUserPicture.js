import React from "react"
import { connect} from "react-redux"
import {} from "../../redux"
// import {userIsAuthenticated} from "../HOCs"

class SetUserPicture extends React.Component {
    handleSetUserPicture = e => {
        console.log("upload started")
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.setUserPicture(formData)
    };

    render(){
        return (
            this.props.username.s === this.props.loggedInUsername && (
                <form onSubmit={this.handleSetUserPicture}>
                    <input type="file" name="picture"/>
                    <input type="submit" value="Upload Picture"/>
                </form>)
        );
        };
    };


// const mapStateToProps = state => {
//     return {
//         loggedInUsername: state.auth.login.result.username
//     }
// }
// const mapDispatchToProps = {SetUserPicture}
export default connect(state => ({
    result: state.users.setUserPicture.result,
    loading: state.users.setUserPicture.loading,
    error: state.users.setUserPicture.error

}), {} (SetUserPicture))