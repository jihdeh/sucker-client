import mount from "koa-mount";
import koa from "koa";
import cacheControl from "koa-cache-control";

export default function Api() {
  const api = koa();
  api.use(function *terminator() {
    return; // Do not continue past the API request handlers into the frontend request handlers
  });

  return api;
}
