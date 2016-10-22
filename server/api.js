import mount from "koa-mount";
import koa from "koa";
import cacheControl from "koa-cache-control";
import {ProductApi} from "./routes";

export default function Api() {
  const api = koa();
  api.use(mount("/v1/products", ProductApi));
  api.use(function *terminator() {
    return; // Do not continue past the API request handlers into the frontend request handlers
  });

  return api;
}
