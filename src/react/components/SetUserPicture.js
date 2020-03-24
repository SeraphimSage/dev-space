import React from "react"
import { connect} from "react-redux"
// import {setUserPicture} from "../../redux"

class SetUserPicture extends React.Component {
    state = {
        setUserPicture =""

    }
    handleSetUserPicture = e => {
        console.log("upload started")
        e.preventDefault();
        const formData = new FormData(e.target);
        this.props.user.username.setUserPicture(formData)
    };

    render(){
        return (
                <form onSubmit={this.handleSetUserPicture}>
                    <input type="file" name="picture"/>
                    <input type="submit" value="Upload Picture"/>
                </form>)
        };
    };


const mapStateToProps = state => {
    return {
        loggedInUsername: state.auth.login.result.username,
        result: state.users.setUserPicture.result,
        loading: state.users.setUserPicture.loading,
        error: state.users.setUserPicture.error
    }
},
 {setUserPicture}
export default connect(mapStateToProps, mapDispatchToProps)(SetUserPicture)
