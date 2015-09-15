
import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import OptionsList from 'components/options-list';

import { choose } from 'actions/options';

class BoardView extends React.Component {
    render() {
        var { currentStep, totalSteps, options, dispatch } = this.props;

        options = shuffle(options);
        var opt1 = options[0];
        var opt2 = options[1];

        return (
            <Row>
                <h4>Step {currentStep} / {totalSteps}</h4>
                <Button block onClick={$=> dispatch(choose(opt1.id, opt2.id))}>{opt1.text}</Button>
                <Button block onClick={$=> dispatch(choose(opt2.id, opt1.id))}>{opt2.text}</Button>
            </Row>
        );
    }
}

export default connect(s => {
    return {
        ...s.game,
        options: s.options
    };
})(BoardView);


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}