import React from 'react';

export class TodoItem extends React.Component {

    static propTypes = {
        value: React.PropTypes.string,
        action: React.PropTypes.func
    };

    static defaultProps = {
        value: 'this is a todo item',
        action: () => alert('you should implement this')
    };

    render() {
        return (
            <li onClick={e => this.props.action(e)}>
                {this.props.value}
            </li>
        );
    }
}
