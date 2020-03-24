import React from 'react';
import { connect } from 'react-redux';
import { toggleLike, getMessages } from '../../redux'
import "./AddLike.css"

class ToggleLike extends React.Component {

	state= {liked: false}

    handleToggleLike = (e, messageId) => {
        e.preventDefault();
		this.props.toggleLike(messageId);
		this.setState({liked: !this.state.liked})
    }

	render() {
		return (
			<div id="heartico" class="ui icon button" key={this.props.messageId} tabindex="0">
                <i class="heart icon" onClick={(e) => this.handleToggleLike(e, this.props.messageId)}/>{this.props.message.likes.length > 0 ? 
                          <div>
                            <i color="primary" /> 
                            <div id="likes">
                              {this.props.message.likes.length}
                            </div>
                          </div> 
                          : <i/>
                        }            </div>
        );
	}
}

const mapStateToProps = state => {
	return {
		result: state.messages.getMessages.result,
		loading: state.messages.getMessages.loading,
		error: state.messages.getMessages.error
	};
};
const mapDispatchToProps = { toggleLike, getMessages };

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLike);