
import React from 'react';
import { connect } from 'react-redux';

import { startQs } from 'services/qs-services';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { QsBefore } from 'components/QsBefore';

@connect(s => s)
export class App extends React.Component {
    render() {
        var { dispatch } = this.props;
        return (
            <Grid>
                <Row>
                    <PageHeader>FooApp</PageHeader>
                </Row>
                <QsBefore onStart={$=> dispatch(startQs())} />
            </Grid>
        );
    }
}
