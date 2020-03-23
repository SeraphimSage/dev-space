import React from 'react';
// import { userIsAuthenticated } from '../HOCs';
import { Button, Icon, Label } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addLike } from '../../redux'

class AddLike extends React.Component {
	render() {
		return (
			<Button as='div' labelPosition='right'>
                <Button icon>
                    <Icon name='heart' />
                        Like
                </Button>
                <Label as='a' basic pointing='left'>
                    2,048
                </Label>
            </Button>
        );
	}
}

export default connect(
    null,
    { addLike }
  )(AddLike);

