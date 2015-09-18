
import React from 'react';
import { connect } from 'react-redux';

import { startQs, resetQs, nextQs } from 'services/qs-services';
import { setAnswer } from 'services/answer-services';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { Paper } from 'components/Paper';
import { QsBefore } from 'components/QsBefore';
import { QsAfter } from 'components/QsAfter';
import { QsDuring } from 'components/QsDuring';

function scrumbleState(state) {
  return {...state.qs, ...state.answers};
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
        var { dispatch, activeQs, qs, isNextable } = this.props;

        var view;
        var stepIndex = activeQs + 1;
        var visible   = stepIndex % 2;

        if (activeQs === -1) {
            view = <QsBefore onStart={$=> dispatch(startQs())} />;
        } else if (activeQs < qs.length) {
            view = (
              <QsDuring {...qs[activeQs]}
                isNextable={isNextable}
                onValue={val => dispatch(setAnswer(val, qs[activeQs]))}
                onNext={$=> dispatch(nextQs())} />
            );
        } else {
            view = <QsAfter onReset={$=> dispatch(resetQs())} />;
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
