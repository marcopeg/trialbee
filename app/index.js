
require('bootstrap/dist/css/bootstrap.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';



/**
 * REDUX STORE INITIALIZATION
 */

import { reducers } from 'reducers';
const appReducer = combineReducers(reducers);

const finalCreateStore = compose(
    applyMiddleware(reduxThunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const store = finalCreateStore(appReducer);




/**
 * MAIN VIEW
 */

import { App } from 'containers/app';

class Main extends React.Component {

    state = {
        showDebug: true,
        debugPanel: 0
    }

    componentDidMount = () => {
        document.body.addEventListener('keyup', e => {
            if (e.ctrlKey || e.altKey) {
                switch (e.keyCode) {
                    case 32:
                    case 68:
                        this.setState({showDebug: !this.state.showDebug});
                        break;
                    case 49:
                    case 50:
                    case 51:
                        this.setState({debugPanel: e.keyCode});
                        break;
                }
            }
        });
    }

    render() {

        var provider = (
            <Provider store={store}>
                <App />
            </Provider>
        );

        var debugPanel = LogMonitor;
        var debugOptions = {};
        switch (this.state.debugPanel) {
            case 50: 
                debugPanel = SliderMonitor; 
                debugOptions = {bottom:true, left:true, right:true};
                break;
            default: 
                debugPanel = LogMonitor; 
                debugPanel = LogMonitor; debugOptions = {top:true, bottom:true, right:true};
                break;
        }

        var debug;
        if (this.state.showDebug) {
            debug = (
                <DebugPanel {...debugOptions}>
                    <DevTools store={store} monitor={debugPanel} />
                </DebugPanel>
            );
        }

        return (
            <div>
                {provider}
                {debug}
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('app'));
