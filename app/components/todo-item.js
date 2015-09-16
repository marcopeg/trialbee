import React from 'react';

export class TodoItem extends React.Component {
    state = {
        isActive: false,
        isSelected: false
    };

    static propTypes = {
        value: React.PropTypes.string,
        onClick: React.PropTypes.func
    };

    static defaultProps = {
        value: 'this is a todo item',
        onClick: () => {}
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

    setSelected = () => {
        this.setState({
            isSelected: true
        });
    };

    setUnselected = () => {
        this.setState({
            isSelected: false
        });
    };

    onClick = () => {
      if (this.state.isSelected) {
        this.setUnselected();
      } else {
        this.setSelected();
      }
    };

    render() {

        var classes = ['list-group-item'];

        if (this.state.isActive || this.state.isSelected) {
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
