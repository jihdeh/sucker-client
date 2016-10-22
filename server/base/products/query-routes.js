import Joi from "joi";
import Product from "../../models/product-model";


function* getOne(next) {
	console.log(this.params.id);
	// const product = yield Product.find
	this.body = "Gotten one";
}

function* getAll(next) {
	const products = yield Product.find({}).lean().exec();
	console.log(products);
	this.body = products;
} 

export default {getOne}
