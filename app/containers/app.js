
import React from 'react';
import { connect } from 'react-redux';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import { Paper } from 'components/Paper';
import { toggle } from 'actions/toggle-actions';

@connect(s => s)
export class App extends React.Component {

    state = {
        count: 0
    }
    
    componentDidMount() {
        setInterval($=> {
            this.props.dispatch(toggle());
            this.setState({count: this.state.count + 1});
        }, 2500);
    }

    render() {

        var items = ['uno', 'due', 'tre', 'quattro'];
        var p = this.state.count % items.length;

        var card1 = items[p];
        var card2 = p < items.length ? items[p] : items[0];


        return (
            <Grid>
                <Row>
                    <PageHeader>FooApp</PageHeader>
                </Row>

                <div style={{position:'relative'}}>

                    <Paper 
                        isVisible={this.props.toggle.visible} 
                        children={card1} />

                    <Paper 
                        isVisible={!this.props.toggle.visible} 
                        children={card2} />

                </div>

            </Grid>
        );
    }
}
