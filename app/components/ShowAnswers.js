import React from 'react';

export class ShowAnswers extends React.Component {

    static propTypes = {
    }

    static defaultProps = {
      questions: [],
      answers: {}
    }

    render() {
        return (
            <div>
                {JSON.stringify(this.props.answers)}
                {JSON.stringify(this.props.questions)}
            </div>
        );
    }
}
