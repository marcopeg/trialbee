import React from 'react';
import Button from 'react-bootstrap/lib/Button';

export class QsAfter extends React.Component {

    static propTypes = {
        onReset: React.PropTypes.func
    }

    static defaultProps = {
        onReset: null
    }

    render() {
        return (
            <div>
                <h3>Yeah! You did ti!</h3>
                <Button bsStyle="primary" onClick={this.props.onReset}>Reset</Button>
            </div>
        );
    }
}
