import React from "react";
import ReactDOMServer from "react-dom/server";
import SuckerRouter from "../app/router";
import {Router, createMemoryHistory} from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import renderPage from "./render-page";
import Iso from "iso";
import { Provider } from "react-redux";
import { configureStore } from "../app/store";

export default function renderApp(ctx, title, data) {
	const iso = new Iso();
	const store = configureStore();
	iso.add("<div id=\"myApp\">" + ReactDOMServer.renderToString(
		<Provider store={ store }>
			<SuckerRouter history={syncHistoryWithStore(createMemoryHistory(ctx.originalUrl), store, {
				selectLocationState: state => state.get("routing")
			}) } />
		</Provider>
	) + "</div>", data);


	return renderPage(
		title,
		iso.render()
	);
}
