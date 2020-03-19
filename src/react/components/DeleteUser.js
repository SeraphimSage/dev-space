import React from "react"
import { connect } from "react-redux";
import { deleteUser } from "../../redux/users"
import "./update.css";
import "./LoginForm.css";

class DeleteUserProfileBtn extends React.Component {

    handleDelete = () => {
        
        if(window.confirm("Are you sure you would like to delete your account?") === true){
        this.props.deleteUser(this.state)
        }
    }
    render(){
        return (
            <div id="deleteButtonBox">
            <button id="button" onClick={this.handleDelete}>Delete Your Profile!</button>
            </div>
        )
    }
}

export default connect(
    null,
    { deleteUser }
  )(DeleteUserProfileBtn);
