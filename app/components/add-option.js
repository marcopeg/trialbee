
import React from 'react';
import ReactDOM from 'react-dom';

import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class AddOption extends React.Component {
    
    static defaultProps = {
        value: '',
        onSubmit: $=> {},
        onValue: $=> {}
    };

    value = (e) => {
        this.props.onValue(this.refs.field.getValue());
    }

    action = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.props.value);
        this.refs.field.refs.input.focus();
    }

    componentDidMount = () => {
        this.refs.field.refs.input.focus();
    }

    render() {

        var btn = (
            <Button onClick={this.action}>
                <span>&nbsp;</span>
                <Glyphicon glyph='plus' />
            </Button>
        );

        return (
            <form onSubmit={this.action}>
                <Input 
                    type="text"
                    ref="field"
                    value={this.props.value} 
                    buttonAfter={btn} 
                    onChange={this.value} />
            </form>
        );
    }
}
