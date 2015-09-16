import React from 'react';

import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

export class TodoForm extends React.Component {
    static defaultProps = {
        currentValue: '',
        onRemove: $=> {}
    };

    state = {
        currentValue: ''
    }

    updateValue = (e) => {
        this.setState({currentValue: e.target.value});
    };

    clearValue = () => {
      this.setState({currentValue: ''});
    };

    onAdd = (e) => {
      this.props.onAdd(this.state.currentValue);
      this.clearValue();
    };

    handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            return this.onAdd(e);
        }
    };

    render() {
        var buttonAdder = (
          <Button bsStyle="primary" onClick={e => this.onAdd(e)}>{"+"}</Button>
        );
        var buttonRemover = (
          <Button bsStyle="danger" onClick={e => this.props.onRemove()}>{"-"}</Button>
        );
        return (
            <div className="well">
                <Input
                  type="text"
                  buttonBefore={buttonRemover}
                  buttonAfter={buttonAdder}
                  value={this.state.currentValue}
                  onChange={e => this.updateValue(e)}
                  onKeyDown={e => this.handleKeyDown(e)}
                />
            </div>
        );
    };
};
