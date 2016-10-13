import React from "react";
import ReactDOMServer from "react-dom/server";
import SuckerRouter from "../app/router";
import {Router, createMemoryHistory} from "react-router";
import renderPage from "./render-page";
import { Provider } from "react-redux";
import { configureStore } from "../app/store";

export default function renderApp(ctx, data) {

	iso.add("<div id=\"myApp\">" + ReactDOMServer.renderToString(
		<Provider store={ configureStore() }>
			<SuckerRouter history={createMemoryHistory(ctx.originalUrl)} />
		</Provider>
	) + "</div>", data);


	return renderPage();
}
