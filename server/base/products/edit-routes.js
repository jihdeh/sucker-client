import {Product as Product} from "../../models";


async function addNewProduct() {
  let product = new Product(this.request.body);
  const response = await product.save();
  this.body = response;
}

export default { addNewProduct };
