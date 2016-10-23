import koa from "koa";
import mount from "koa-mount";
import cacheControl from "koa-cache-control";
import apiErrorHandler from "../util/api-error-handler";
import { ProductApi as productApi } from "./routes";


export default function Api() {
  const api = koa();
  api.use(apiErrorHandler);
  api.use(mount("/v1/product", productApi));
  api.use(function* terminator() {
    return;
  });

  return api;
}
