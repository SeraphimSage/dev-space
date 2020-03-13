import React from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { Card, Icon, Image, Label } from "semantic-ui-react";
// import UploadUserPicture from "./UploadUserPicture";
// import { stat } from "fs";

class ProfileCard extends React.Component {
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
			return <Spinner name="circle" color="orange" />;
		}
		const user = this.props.result.user;
		return (
			<React.Fragment>
				<Card>
					<Image
						src={
							user.pictureLocation
								? "https://kwitta-api.herokuapp.com" + user.pictureLocation
								: "http://simpleicon.com/wp-content/uploads/user1.svg"
						}
						wrapped
						ui={false}
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
								Created: {new Date(this.props.createdAt).toDateString()}
							</span>
						</Card.Meta>
						<Card.Description>
							{this.props.about
								? this.props.about
								: "Stay tuned for the about details"}{" "}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<p>
							<Icon name="user" />
							22 Friends
						</p>
					</Card.Content>
					{/* <UploadUserPicture username={this.props.username} /> */}
				</Card>
			</React.Fragment>
		);
	}
}

const mapStateToProps = state => {
	if (state.users.getUser.result) {
		return {
			loggedIn: state.auth.login.result.username,
			username: state.useers.getUser.result.user.username,
			pictureLocation: state.users.getUser.result.user.pictureLocation,
			displayName: state.users.getUser.result.user.googleId,
			createdAt: state.users.getUser.result.user.createdAt,
			updatedAt: state.users.getUser.result.user.updatedAt
		};
	} else return {};
};
export default connect(mapStateToProps)(ProfileCard);
