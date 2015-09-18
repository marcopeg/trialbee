
import React from 'react';
import { connect } from 'react-redux';

import { startQs, resetQs, nextQs } from 'services/qs-services';
import { saveAnswers } from 'services/history-services';
import { validateAnswer } from 'services/validator-service';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { Paper } from 'components/Paper';
import { QsBefore } from 'components/QsBefore';
import { QsAfter } from 'components/QsAfter';
import { QsDuring } from 'components/QsDuring';

function scrumbleState(state) {
  return {...state.qs, answers: state.answers, history: state.history};
}

@connect(scrumbleState)
export class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.isLastCard = (nextProps.activeQs === -1);
    }
    componentWillMount() {
        this.isLastCard = false;
    }

    render() {
        var { dispatch, activeQs, qs, answers, history } = this.props;

        var view;
        var stepIndex = activeQs + 1;
        var visible   = stepIndex % 2;
        var isNextable = false;

        try {
          isNextable = answers[qs[activeQs].id].isValid;
        } catch (e) {}

        if (activeQs === -1) {
            view = (
              <QsBefore
                canStart={Object.keys(history).length === 0}
                onStart={$=> dispatch(startQs())}
               />
            );
        } else if (activeQs < qs.length) {
            view = (
              <QsDuring {...qs[activeQs]}
                isNextable={isNextable}
                onValue={val => dispatch(validateAnswer(val, qs[activeQs]))}
                onNext={$=> dispatch(nextQs())} />
            );
        } else {
            view = (
              <QsAfter
                onReset={$=> dispatch(resetQs())}
                onSave={$=> dispatch(saveAnswers())}
                answers={answers}
                questions={qs}/>
            );
        }

        if(this.isLastCard && (this.props.qs.length % 2 !== 0)){
            visible = !visible;
        }

        return (
            <Grid>
                <Row>
                    <PageHeader>FooApp</PageHeader>
                </Row>

                <div style={{position: 'relative'}}>
                    <Paper isVisible={visible} children={view} />
                    <Paper isVisible={!visible} children={view} />
                </div>

            </Grid>
        );
    }
}
