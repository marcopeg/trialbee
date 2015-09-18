
import React from 'react';
import { connect } from 'react-redux';

import { startQs, resetQs, nextQs } from 'services/qs-services';
import { validateNextable } from 'services/tmp-services';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { Paper } from 'components/Paper';
import { QsBefore } from 'components/QsBefore';
import { QsAfter } from 'components/QsAfter';
import { QsDuring } from 'components/QsDuring';

function scrumbleState(state) {
  return {...state.qs, ...state.tmp};
}

@connect(scrumbleState)
export class App extends React.Component {

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
                onValue={val => dispatch(validateNextable(val, qs[activeQs]))}
                onNext={$=> dispatch(nextQs())} />
            );
        } else {
            view = <QsAfter onReset={$=> dispatch(resetQs())} />;
        }

        return (
            <div>
                <div className="paper-wrapper" style={{position: 'relative'}}>
                    <Paper isVisible={visible} children={view} />
                    <Paper isVisible={!visible} children={view} />
                </div>

            </div>
        );
    }
}
