import React from "react"
import { login } from "../../redux/auth";
import { connect } from "react-redux";
import { deleteUser } from "../../redux/users"

class DeleteUserProfileBtn extends React.Component {

    handleDelete = (e) => {
        
        if(window.confirm("Are you sure you would like to delete your account?") === true){
        this.props.deleteUser(this.state)
        }
    }
    render(){
        return (
            <button onClick={this.handleDelete}>Delete Your Profile!</button>
        )
    }
}

export default connect(
    (state) => {},
    { deleteUser }
  )(DeleteUserProfileBtn);
