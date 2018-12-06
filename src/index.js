import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/reducers';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { REGISTER_SLIDE } from './components/Slideshow/Slideshow.actions';

const logger = createLogger({
    diff: true,
    collapsed: (getState, action) => action.type === REGISTER_SLIDE,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
