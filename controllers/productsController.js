import Product from '../models/productsModel.js';

export const getAllProducts = async (req, res) => {
  const allProducts = await Product.find({ category: req.params.id }).populate(
    'category',
    'name'
  );

  if (allProducts.length) {
    res.json(allProducts);
  } else {
    res.status(404).json({ message: 'Products not found' });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      'category',
      'name'
    );

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};
