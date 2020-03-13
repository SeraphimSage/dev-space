import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { getUserList } from "../../redux/users";
import { Feed } from "semantic-ui-react";

class GetUserList extends React.Component {
	componentDidMount() {
		this.props.getUserList();
	}

	render() {
		if (this.props.result === null) {
			return <Spinner name="circle" color="orange" />;
		}
		const user = this.props.result.users;
		return user.map(user => {
			return (
				<Feed size="large" key={user.username}>
					<Feed.Event>
						<Feed.Content>
							<Feed.Summary>
								<Link to={`/profile/${user.username}`}>
									<h3 className="newestUsers">@{user.username}</h3>
								</Link>
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			);
		});
	}
}

const mapStateToProps = state => {
	return {
		result: state.users.getUserList.result,
		loading: state.users.getUserList.loading,
		error: state.users.getUserList.error
	};
};
const mapDispatchToProps = { getUserList };
export default connect(mapStateToProps, mapDispatchToProps)(GetUserList);
