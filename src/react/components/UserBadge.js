import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/users";
import { Card, Icon, Image, Label } from "semantic-ui-react";
import Spinner from "react-spinkit";
//import UploadUserPicture from "./UploadUserPicture";

class UserBadge extends React.Component {
	componentDidMount() {
		console.log(this.props.pathname);
		if (this.props.pathname) {
			let username = this.props.pathname.slice(10);
			this.props.getUser(username);
			console.log(username);
		}
		console.log("bang");
	}

	componentDidUpdate(prevProps) {
		if (prevProps.pathname !== this.props.pathname) {
			let username = this.props.pathname;
			this.props.getUser(username.slice(10));
			console.log(this.props.result.user.pictureLocation);
		}
	}
	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="orange" />;
		}
		return (
			<React.Fragment>
				<Card>
					<Image
						src={
							this.props.result.user.pictureLocation
								? "https://kwitta-api.herokuapp.com" +
								  this.props.result.user.pictureLocation
								: "http://simpleicon.com/wp-content/uploads/user1.svg"
						}
						wrapped
						ui={false}
						maxwidth="20em"
					/>
					<Card.Content>
						<Card.Header>
							{this.props.result
								? this.props.result.user.displayName
								: "loading..."}{" "}
						</Card.Header>
						<Card.Meta>
							<span>
								<Label>
									<Icon name="at" />
									{this.props.result
										? this.props.result.user.username
										: "loading..."}
								</Label>
							</span>
						</Card.Meta>
						<Card.Meta>
							<span className="date">
								Created:{" "}
								{this.props.result
									? new Date(this.props.result.user.createdAt).toDateString()
									: "loading..."}
							</span>
						</Card.Meta>
						<Card.Description>
							{this.props.result.about
								? this.props.result.user.about
								: "Stay tuned for the about details"}{" "}
						</Card.Description>
					</Card.Content>
					<Card.Content extra></Card.Content>
				</Card>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		loggedIn: state.auth.login.result.username,
		// username: state.users.getUser.result.user.username,
		// pictureLocation: state.users.getUser.result.user.pictureLocation,
		// displayName: state.users.getUser.result.user.displayName,
		// about: state.users.getUser.result.user.about,
		// googleId: state.users.getUser.result.user.googleId,
		// createdAt: state.users.getUser.result.user.createdAt,
		// updatedAt: state.users.getUser.result.user.updatedAt,
		result: state.users.getUser.result,
		loading: state.messages.getMessages.loading,
		error: state.messages.getMessages.error,
		pathname: state.router.location.pathname
	};
};
const mapDispatchToProps = { getUser };
export default connect(mapStateToProps, mapDispatchToProps)(UserBadge);
