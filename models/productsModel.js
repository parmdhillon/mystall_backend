import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: String,
  description: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Categories',
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  qtyType: {
    type: String,
    default: 'ea',
  },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
