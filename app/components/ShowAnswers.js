import React from 'react';

import Table from 'react-bootstrap/lib/Table';

export class ShowAnswers extends React.Component {

    static propTypes = {
    }

    static defaultProps = {
      questions: [],
      answers: {}
    }

    render() {
      var answers = this.props.answers;
      var rows = this.props.questions.map(question => {
        return (<tr>
          <td>{question.title}</td>
          <td>{answers[question.id].value}</td>
        </tr>);
      });

        var table = (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        );
        // React.createElement(mapTypes[type], {
        //   title: title,
        //   onValue: onValue
        // });


        return (
            <div>
                {table}
            </div>
        );
    }
}
