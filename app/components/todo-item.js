import React from 'react';

export class TodoItem extends React.Component {
    static propTypes = {
        value: React.PropTypes.string,
        isSelected: React.PropTypes.bool,
        onClick: React.PropTypes.func
    };

    static defaultProps = {
        value: 'this is a todo item',
        isSelected: false,
        onClick: () => {}
    };

    state = {
        isActive: false
    };

    setActive = () => {
        this.setState({
            isActive: true
        });
    };

    setInactive = () => {
        this.setState({
            isActive: false
        });
    };

    onClick = () => {
      this.props.toggleItemSelection(this.props.id, !this.props.isSelected);
    };

    render() {

        var classes = ['list-group-item'];

        if (this.state.isActive || this.props.isSelected) {
            classes.push('active');
        }

        if (this.state.isActive) {
            classes.push('active');
        }

        return (
            <li
                onClick={this.onClick}
                onMouseOver={this.setActive}
                onMouseOut={this.setInactive}
                className={classes.join(' ')}>
                {this.props.value}
            </li>
        );
    }
}
