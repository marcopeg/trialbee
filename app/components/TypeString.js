import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export class TypeString extends React.Component {

    // static propTypes = {
    //     onNext: React.PropTypes.func
    // }

    static defaultProps = {
        title: 'title',
        onValue: null
    }

    render() {
        var { title, onNext, onValue } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <Input onChange={e => onValue(e.target.value)} type="text" placeholder="type string" />
            </div>
        );
    }
}
