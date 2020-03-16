import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../redux/users";
import { Card, Icon, Image, Label } from "semantic-ui-react";
import Spinner from "react-spinkit";
//import UploadUserPicture from "./UploadUserPicture";

class UserBadge extends React.Component {
	componentDidMount() {
		if (this.props._username) {
			this.props.getUser(this.props._username);
		}
	}

	componentDidUpdate(prevProps) {
		if (prevProps._username !== this.props._username) {
			this.props.getUser(this.props._username);
		}
	}
	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="orange" />;
		}
		const user = this.props.result.user;
		return (
			<React.Fragment>
				<Card>
					<Image
						src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
						wrapped
						ui={false}
						maxwidth="20em"
					/>
					<Card.Content>
						<Card.Header>{this.props.username} </Card.Header>
						<Card.Meta>
							<span>
								<Label>
									<Icon name="at" />
									{this.props.username}
								</Label>
							</span>
						</Card.Meta>
						<Card.Meta>
							<span className="date">
								Created: {new Date(this.props.result.createdAt).toDateString()}
							</span>
						</Card.Meta>
						<Card.Description>
							{this.props.about
								? this.props.about
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
	if (state.users.getUser.result) {
		return {
			loggedIn: state.auth.login.result.username,
			username: state.users.getUser.result.user.username,
			pictureLocation: state.users.getUser.result.user.pictureLocation,
			displayName: state.users.getUser.result.user.displayName,
			about: state.users.getUser.result.user.about,
			googleId: state.users.getUser.result.user.googleId,
			createdAt: state.users.getUser.result.user.createdAt,
			updatedAt: state.users.getUser.result.user.updatedAt,
			result: state.users.getUser.result.user,
			loading: state.messages.getMessages.loading,
			error: state.messages.getMessages.error
		};
	}
	return {
		username: "loading...",
		result: "loading...",
		loading: "loading...",
		error: "loading..."
	};
};
const mapDispatchToProps = { getUser };
export default connect(mapStateToProps, mapDispatchToProps)(UserBadge);
