import koa from "koa";
import koaRouter from "koa-router";
import bodyParser from "koa-bodyparser";
import ProductModel from "../models/product-model";
import queryRoutes from "../base/products/query-routes";
// import editRoutes from "../base/products/edit-routes";

const api = koa();
const router = koaRouter();



router.get("/",
	function*() {
		this.body = "Hello"
	}
);

router.get("/:id", queryRoutes.getOne);

api
	.use(router.routes())
	.use(router.allowedMethods());

export default api;

