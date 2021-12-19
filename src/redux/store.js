//import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancer)
//const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;