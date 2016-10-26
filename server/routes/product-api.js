import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";
import queryRoutes from "../base/products/query-routes";
import editRoutes from "../base/products/edit-routes";

const api = koa();
const router = koaRouter();

api.use(bodyParser());

router.get("/", queryRoutes.getAll);
router.get("/:productId", queryRoutes.getOne);

router.post("/", editRoutes.addNewProduct);

api
  .use(router.routes())
  .use(router.allowedMethods());

export default api;
