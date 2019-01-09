import { combineReducers, createStore } from 'redux';

import { mainReducer } from './reducers';

const rootReducer = combineReducers({mainReducer});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;