
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

@connect(s => s)
export class App extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader>FooApp</PageHeader>
                </Row>
                {JSON.stringify(this.props)}
            </Grid>
        );
    }
}
