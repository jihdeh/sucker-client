import { Product } from "../../models";


function* getOne(next) {
    let product = yield Product.find({ sku: this.params.productSku }).lean().exec();
    if (product.length < 1) {
        this.status = 404;
        this.body = "Product does not exist";
        return;
    }
    this.body = product;
}

function* getAll(next) {
    let products = yield Product.find({}).lean().exec();
    this.body = products;
}

export default { getOne, getAll };
