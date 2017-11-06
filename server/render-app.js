import React from "react";
import ReactDOMServer from "react-dom/server";
import SuckerRouter from "../app/router";
import {createMemoryHistory} from "history";
import { syncHistoryWithStore } from "react-router-redux";
import renderPage from "./render-page";
import fs from "fs";
import path from "path";
import Iso from "iso";
import { Provider } from "react-redux";
import { configureStore } from "../app/store";

export default function renderApp(ctx, title, data) {
	const iso = new Iso();
	const store = configureStore();
	iso.add("<div id=\"root\">" + ReactDOMServer.renderToString(
		<Provider store={ store }>
			<SuckerRouter location={ctx.req.url} history={syncHistoryWithStore(createMemoryHistory(ctx.originalUrl), store, {
				selectLocationState: state => state.get("routing")
			}) } />
		</Provider>
	) + "</div>", data);

	const assets = JSON.parse(fs.readFileSync(path.join(__dirname, "../dist/js/chunks.json")));

	return renderPage(
		title,
		iso.render(),
		`/${assets.app.js}`
	);
}
