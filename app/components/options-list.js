
import React from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import OptionItem from 'components/option-item';

export default class OptionsList extends React.Component {
    
    static defaultProps = {
        options: [],
        sorted: false,
        onDelete: $=> {}
    }

    render() {

        var options = this.props.options;

        if (this.props.sorted) {
            options = options.sort((a, b) => a.value - b.value);
            options.reverse();
        }

        options = options.map(option => (
            <OptionItem {...option} 
                key={option.id} 
                showValue={this.props.sorted} 
                onDelete={this.props.onDelete} />
        ));

        return (
            <ListGroup>
                {options}
            </ListGroup>
        );
    }
}
