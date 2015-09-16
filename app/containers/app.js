
import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import reduxThunk from 'redux-thunk';

import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';
import DiffMonitor from 'redux-devtools-diff-monitor';



// create store

import { reducers } from 'reducers';

const appReducer = combineReducers(reducers);

const finalCreateStore = compose(
    applyMiddleware(reduxThunk),
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
    createStore
);

const store = finalCreateStore(appReducer);





// finally startup UI

import { TodoList } from './todo-list';

export default class App extends React.Component {
    render() {

        var debug;
        if (true) {
            debug = (
                <DebugPanel  top bottom right>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
            );
        }

        return (
            <div>
                <Provider store={store}>
                    <TodoList />
                </Provider>
                {debug}
            </div>
        );
    }
}
