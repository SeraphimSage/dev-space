import React from "react"
import { connect } from "react-redux";
import { deleteUser } from "../../redux/users"
import "./update.css";

class DeleteUserProfileBtn extends React.Component {

    handleDelete = (e) => {
        
        if(window.confirm("Are you sure you would like to delete your account?") === true){
        this.props.deleteUser(this.state)
        }
    }
    render(){
        return (
            <div id="deleteButtonBox">
            <button id="deleteButton" onClick={this.handleDelete}>Delete Your Profile!</button>
            </div>
        )
    }
}

export default connect(
    (state) => {},
    { deleteUser }
  )(DeleteUserProfileBtn);
