/**
 * Main store function
 */
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { Map } from "immutable";
import thunk from 'redux-thunk';


export function configureStore(initialState = new Map()) {

	const store = createStore(
		rootReducer, 
		initialState, 
		applyMiddleware(thunk)
	);

	return store;
}

