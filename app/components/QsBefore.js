import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export class QsBefore extends React.Component {

    static propTypes = {
        onStart: React.PropTypes.func
    }

    static defaultProps = {
        onStart: null
    }

    render() {
        return (
            <div>
                <h3>Welcome Mario!</h3>
                <Button bsStyle="primary" onClick={this.props.onStart}>Start</Button>
            </div>
        );
    }
}
