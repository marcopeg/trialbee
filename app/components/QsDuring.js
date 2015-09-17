import React from 'react';
import Button from 'react-bootstrap/lib/Button';

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
        var { title, onNext } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <Button bsStyle="primary" onClick={onNext}>Next</Button>
            </div>
        );
    }
}
