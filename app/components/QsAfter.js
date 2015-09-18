import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { ShowAnswers } from 'components/ShowAnswers';

export class QsAfter extends React.Component {

    static propTypes = {
        onReset: React.PropTypes.func
    }

    static defaultProps = {
        onReset: null,
        onSave: null,
        answers: {},
        questions: []
    }

    render() {
        return (
            <div>
                <h3>Yeah! You did it!</h3>
                <ShowAnswers answers={this.props.answers} questions={this.props.questions} />
                <Button bsStyle="primary" onClick={this.props.onReset}>Reset</Button>
                <Button bsStyle="success" onClick={this.props.onSave}>Save</Button>
            </div>
        );
    }
}
