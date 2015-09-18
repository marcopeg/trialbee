
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

        var view;
        var stepIndex = activeQs + 1;
        var visible   = stepIndex % 2;

        if (activeQs === -1) {
            view = <QsBefore onStart={$=> dispatch(startQs())} />;
        } else if (activeQs < qs.length) {
            view = <QsDuring {...qs[activeQs]} onNext={$=> dispatch(nextQs())} />;
        } else {
            view = <QsAfter onReset={$=> dispatch(resetQs())} />;
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
