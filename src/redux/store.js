import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import toastReducer from './reducers/toastReducers';

const reducers = combineReducers({

    toast: toastReducer

});

/*let devTools;

if (process.browser) {
    // client-side-only code
    devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}*/

export default (initialState, options) => {
    return createStore(reducers, applyMiddleware(thunk));
}
//export default createStore(reducers, compose(applyMiddleware(thunk), devTools));