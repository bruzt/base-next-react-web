import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import toastReducer from './reducers/toastReducers';

const reducers = combineReducers({

    toast: toastReducer

});

export default (initialState, options) => {
    return createStore(reducers, applyMiddleware(thunk));
}