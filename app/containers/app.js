
import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';

import { reducers } from 'reducers';

import AppView from './app-view';

const appReducer = combineReducers(reducers);

const finalCreateStore = compose(
    applyMiddleware(reduxThunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const store = finalCreateStore(appReducer);

export default class App extends React.Component {
    render() {

        var debug;
        if (true) {
            debug = (
                <DebugPanel left top right>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            );
        }

        return (
            <div>
                <Provider store={store}>
                    <AppView />
                </Provider>
                {debug}
            </div>
        );
    }
}
