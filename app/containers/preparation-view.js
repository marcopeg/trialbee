
import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import OptionsList from 'components/options-list';
import AddOption from 'components/add-option';

import { addOption, removeOption, updateValue, resetValue } from 'actions/options';
import { startGame } from 'actions/game';

class PreparationView extends React.Component {
    render() {
        var startButton;
        var { options, newOption, dispatch } = this.props;

        if (options.length > 2) {
            startButton = <Button block bsStyle="primary" onClick={$=> dispatch(startGame())}>Play</Button>;
        }

        return (
            <Row>
                <OptionsList 
                    options={options} 
                    onDelete={id => dispatch(removeOption(id))} />
                
                <AddOption {...newOption}
                    onValue={text => dispatch(updateValue(text))}
                    onSubmit={text => {
                        dispatch(addOption(text));
                        dispatch(resetValue());
                    }} />

                {startButton}
            </Row>
        );
    }
}

export default connect(s => s)(PreparationView);
