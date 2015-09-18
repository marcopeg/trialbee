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

        var cnt = <Button disabled={btnDisabled} bsStyle={"primary"} onClick={this.props.onStart}>Start</Button>;
        if (btnDisabled) {
            cnt = (
                <div>
                    <p>the form was already filled!</p>
                    <Button bsStyle="success" onClick={this.props.onStart}>Start Over</Button>
                </div>
            );
        }

        return (
            <div className="text-center">
                <h3 style={{marginBottom:40}}>Welcome Mario!</h3>
                {cnt}
            </div>
        );
    }
}
