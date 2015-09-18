import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export class TypeNumeric extends React.Component {

    // static propTypes = {
    //     onNext: React.PropTypes.func
    // }

    static defaultProps = {
        title: 'title'
    }

    render() {
        var { title, onNext, onValue } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <Input onChange={e => onValue(e.target.value)} type="number" placeholder="type numeric" />
            </div>
        );
    }
}
