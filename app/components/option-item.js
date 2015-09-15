
import React from 'react';

import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default class OptionItem extends React.Component {
    
    static defaultProps = {
        id: null,
        text: '--',
        value: 100,
        showValue: false,
        onDelete: $=> {}
    };

    state = {
        deleteBtnIsVisible: false
    }

    outInterval = null

    activate = () => {
        clearInterval(this.outInterval);
        this.setState({
            deleteBtnIsVisible: true
        });
    }

    deactivate = () => {
        this.outInterval = setTimeout($=> {
            this.setState({
                deleteBtnIsVisible: false
            });
        }, 100)
    }

    delete = () => {
        this.props.onDelete(this.props.id);
    }

    render() {
        var { id, text, value, showValue } = this.props;
        var { deleteBtnIsVisible } = this.state;
        
        var rate;
        if (showValue) {
            rate = <p style={{float:'right'}}><b><small>{value}</small></b></p>;
        }

        var deleteBtn;
        if (deleteBtnIsVisible && !showValue) {
            deleteBtn = (
                <Button
                    bsStyle="danger"
                    style={{float:'right'}}
                    onMouseOver={this.activate}
                    onClick={this.delete}
                    children={<Glyphicon glyph='remove' />} />
            );
        }

        return (
            <ListGroupItem onMouseOver={this.activate} onMouseOut={this.deactivate}>
                {rate}
                {deleteBtn}
                <p>{text}</p>
            </ListGroupItem>
        );
    }
}
