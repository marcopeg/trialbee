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

    state = {
        isActive: false
    };

    setActive = () => {
        this.setState({
            isActive: true
        });
    }

    setInactive = () => {
        this.setState({
            isActive: false
        });
    }

    render() {

        var classes = ['list-group-item'];

        if (this.state.isActive) {
            classes.push('active');
        }

        return (
            <li 
                onClick={e => this.props.action(e)} 
                onMouseOver={this.setActive}
                onMouseOut={this.setInactive}
                className={classes.join(' ')}>
                {this.props.value}
            </li>
        );
    }
}
