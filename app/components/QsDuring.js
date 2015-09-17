import React from 'react';
import Button from 'react-bootstrap/lib/Button';

import { TypeString } from 'components/TypeString';
import { TypeNumeric } from 'components/TypeNumeric';
import { TypeDate } from 'components/TypeDate';

const mapTypes = {
    string: TypeString,
    numeric: TypeNumeric,
    date: TypeDate
};

export class QsDuring extends React.Component {

    static propTypes = {
        onNext: React.PropTypes.func
    }

    static defaultProps = {
        type: 'string',
        title: 'title',
        validator: 'notEmpty',
        onNext: null
    }

    render() {
        var { type, title, onNext } = this.props;

        var input = React.createElement(mapTypes[type], {
            title: title
        });

        return (
            <div>
                {input}
                <Button bsStyle="primary" onClick={onNext}>Next</Button>
            </div>
        );
    }
}
