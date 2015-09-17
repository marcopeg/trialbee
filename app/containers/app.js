
import React from 'react';
import { connect } from 'react-redux';

import { startQs, resetQs, nextQs } from 'services/qs-services';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { QsBefore } from 'components/QsBefore';
import { QsAfter } from 'components/QsAfter';
import { QsDuring } from 'components/QsDuring';

@connect(state => state.qs)
export class App extends React.Component {
    render() {
        var { dispatch, activeQs, qs } = this.props;

        var view;

        if (activeQs === -1) {
            view = <QsBefore onStart={$=> dispatch(startQs())} />;
        } else if (activeQs === qs.length) {
            view = <QsAfter onReset={$=> dispatch(resetQs())} />;
        } else {
            view = <QsDuring {...qs[activeQs]} onNext={$=> dispatch(nextQs())} />;
        }

        return (
            <Grid>
                <Row>
                    <PageHeader>FooApp</PageHeader>
                </Row>

                {view}

            </Grid>
        );
    }
}
