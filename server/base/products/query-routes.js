import {Product} from "../../models";


function* getOne(next) {
  this.body = "Gotten one";
}

function* getAll(next) {
  let products = yield Product.find({}).lean().exec();
  this.body = products;
}

export default { getOne, getAll };
