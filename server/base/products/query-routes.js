import {Product} from "../../models";


function* getOne(next) {
	console.log("oluwan ooooo", this.params.productSku)
	let product = yield Product.find({sku: this.params.productSku}).lean().exec();
	console.log(product);
  this.body = product;
}

function* getAll(next) {
  let products = yield Product.find({}).lean().exec();
  this.body = products;
}

export default { getOne, getAll };
