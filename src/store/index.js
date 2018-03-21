import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import reducer from '../reducers'
import history from './history'

const enhancer = applyMiddleware(thunk, routerMiddleware(history));
const connectedReducer = connectRouter(history)(reducer);

const store = createStore(connectedReducer, {}, enhancer);

export default store