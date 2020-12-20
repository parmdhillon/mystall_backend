import Product from '../models/productsModel.js';

export const getAllProducts = async (req, res) => {
  const allProducts = await Product.find({ category: req.params.id }).populate(
    'category',
    'name'
  );

  if (allProducts.length) {
    res.json(allProducts);
  } else {
    res
      .status(404)
      .json({ status: 'fail', error: { message: 'Products not found' } });
  }
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    'category',
    'name'
  );

  if (product) {
    res.json(product);
  } else {
    res
      .status(404)
      .json({ status: 'fail', error: { message: 'Product not found' } });
  }
};
