require("babel-polyfill");

import React from "react";
import ReactDOM from "react-dom";
import SuckerRouter from "./router";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { fromJS } from "immutable";
import Iso from "iso";
import {browserHistory} from "react-router";

Iso.bootstrap((state, meta, node) => {
	const store = configureStore(fromJS(state));
	console.log(state, meta, node, "clientjs");
	ReactDOM.render(
		<Provider store={store}>
			<SuckerRouter history={ browserHistory }/>
		</Provider>, node);
});
