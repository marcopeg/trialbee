import React from 'react';
import Input from 'react-bootstrap/lib/Input';

export class TypeString extends React.Component {

    // static propTypes = {
    //     onNext: React.PropTypes.func
    // }

    static defaultProps = {
        title: 'title'
    }

    render() {
        var { title, onNext } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <Input type="text" placeholder="type string" />
            </div>
        );
    }
}
