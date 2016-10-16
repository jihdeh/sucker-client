"use strict";

import staticCache from "koa-static-cache";
import serve from "koa-static";
import path from "path";
import koa from "koa";
import koaRouter from "koa-router";
import renderApp from "./render-app";

export default function Frontend() {
  const server = koa();
  const router = koaRouter();

  router.get("/", function*() {
      this.body = renderApp(this, "homepage", {});
  });

  return server
    .use(serve(path.join(__dirname, "../dist")))
    .use(router.routes())
    // .use(staticCache({ maxage: 60 * 1000 })) // Cache all pages for 1 minute
}
