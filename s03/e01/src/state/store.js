import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { listReducer } from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";





const store = createStore(combineReducers({list: listReducer}), composeWithDevTools());

export { store };
