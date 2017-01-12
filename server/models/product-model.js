import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Product = new Schema({
  productName: {type: String, index: true},
  productImage: {type: String, index: true},
  productId: {type: String, index: true},
  sku: {type: String, index: true},
  productDescription: {type: String, index: true},
  price: {type: Number, index: true},
  quantity: {type: Number, index: true},
  rating: Number,
  sold: Number,
  inStock: Boolean,
  availableSizes: [String],
  availableColors: [String],
  tags: [String],
  comments: [{
  	user: {type: Schema.ObjectId, ref: "User", index: true},
  	comment: {type: String, index: true} 
  }]
});

  // productOwner: {type: Schema.ObjectId, ref: "User", index: true},

export default mongoose.model("Product", Product);
