
import React from 'react';
import { connect } from 'react-redux';

import { startQs, resetQs, nextQs } from 'services/qs-services';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { Paper } from 'components/Paper';
import { QsBefore } from 'components/QsBefore';
import { QsAfter } from 'components/QsAfter';
import { QsDuring } from 'components/QsDuring';

@connect(state => state.qs)
export class App extends React.Component {
    render() {
        var { dispatch, activeQs, qs } = this.props;

        var view, stepIndex;
        var totalSteps = qs.length + 2;
        var visible = true;

        if (activeQs === -1) {
            stepIndex = 0;
            view = <QsBefore onStart={$=> dispatch(startQs())} />;
        } else if (activeQs === qs.length) {
            stepIndex = qs.length + 2;
            view = <QsAfter onReset={$=> dispatch(resetQs())} />;
        } else {
            stepIndex = activeQs + 1;
            view = <QsDuring {...qs[activeQs]} onNext={$=> dispatch(nextQs())} />;
        }

        visible = stepIndex % 2;

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
