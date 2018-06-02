import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import accomReducer from '../reducers/accomReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            accommodations: accomReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}



