import {Product} from "../../models";


function* getOne(next) {
  console.log(this.params.id);
  this.body = "Gotten one";
}

function* getAll(next) {
  let products = yield Product.find({}).lean().exec();
  console.log(products);
  this.body = products;
}

export default { getOne, getAll };
