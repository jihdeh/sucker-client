require("babel-polyfill");

import React from "react";
import ReactDOM from "react-dom";
import SuckerRouter from "./router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import { configureStore } from "./store";
import { fromJS } from "immutable";
import Iso from "iso";
import {browserHistory} from "react-router";

console.log("ehhehehhe");
Iso.bootstrap((state, meta, node) => {
	const store = configureStore(fromJS(state));
	console.log(state, meta, node, "clientjs");
	ReactDOM.render(
		<Provider store={store}>
			<SuckerRouter history={syncHistoryWithStore(createMemoryHistory(ctx.originalUrl), store, {
				selectLocationState: state => state.get("routing")
			}) } />
		</Provider>, node);
});
