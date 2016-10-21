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

Iso.bootstrap((state, meta, node) => {
	const store = configureStore(fromJS(state));
	ReactDOM.render(
		<Provider store={store}>
			<SuckerRouter history={syncHistoryWithStore(browserHistory, store, {
				selectLocationState: state => state.get("routing")
			}) } />
		</Provider>, document.getElementById("root"));
});
