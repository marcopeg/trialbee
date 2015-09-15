
import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import OptionsList from 'components/options-list';
import AddOption from 'components/add-option';

import { addOption } from 'actions/options';
import { reset } from 'actions/game';

class ResultView extends React.Component {
    render() {
        var { options, dispatch } = this.props;
        return (
            <Row>
                <OptionsList options={options} sorted />
                <Button block bsStyle="primary" onClick={$=> dispatch(reset())}>Reset Score!</Button>
            </Row>
        );
    }
}

export default connect(s => s)(ResultView);
