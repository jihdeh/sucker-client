/**
 * Main store function
 */
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Map } from "immutable";

export function configureStore(initialState = new Map()) {

	const store = createStore(rootReducer, initialState);

	return store;
}

