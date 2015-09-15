
import React from 'react';
import { connect } from 'react-redux';

import PreparationView from 'containers/preparation-view';
import BoardView from 'containers/board-view';
import ResultView from 'containers/result-view';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class AppView extends React.Component {
    render() {
        var { isPlaying, currentStep, totalSteps } = this.props;
        var isDone = isPlaying && currentStep >= totalSteps;

        var currentView;
        if (isDone) {
            currentView = <ResultView />;
        } else if (!isPlaying) {
            currentView = <PreparationView />;
        } else if (isPlaying) {
            currentView = <BoardView />;
        }

        return (
            <Grid>
                <Row>
                    <PageHeader>Decision Making</PageHeader>
                </Row>
                {currentView}
            </Grid>
        );
    }
}

export default connect(s => {
    return {
        ...s.game
    };
})(AppView);
