import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import Input from 'react-bootstrap/lib/Input';

export class QsBefore extends React.Component {

    static propTypes = {
        onStart: React.PropTypes.func,
        canStart: React.PropTypes.bool
    }

    static defaultProps = {
        onStart: null,
        canStart: true
    }

    render() {
        var btnDisabled = this.props.canStart ? false : true;

        return (
            <div>
                <h3>Welcome Mario!</h3>
                <Button disabled={btnDisabled} bsStyle={"primary"} onClick={this.props.onStart}>Start</Button>
            </div>
        );
    }
}
