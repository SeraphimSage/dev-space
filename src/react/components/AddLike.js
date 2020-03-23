import React from 'react';
// import { userIsAuthenticated } from '../HOCs';
import { Button, Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addLike, getMessages } from '../../redux'

class AddLike extends React.Component {

    handleAddLike = (e, messageId) => {
        console.log("treytrey")
        e.preventDefault();
        this.props.addLike(messageId);
    }

	render() {
		return (
			<Button key={message.id} as='div' labelPosition='right'>
                <Button icon onClick={this.handleAddLike}>
                    <Icon name='heart' />
                        Like
                </Button>
                <Label as='a' basic pointing='left'>
                    {}
                </Label>
            </Button>
        );
	}
}

const mapStateToProps = state => {
	return {
		result: state.likes.addLike.result,
		loading: state.likes.addLike.loading,
		error: state.likes.addLike.error
	};
};
const mapDispatchToProps = { addLike, getMessages };

export default connect(mapStateToProps, mapDispatchToProps)(AddLike);