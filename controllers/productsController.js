import mongoose from 'mongoose';
import Product from '../models/productsModel.js';

export const getAllProducts = async (req, res) => {
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;

  const allProducts = await Product.find({ category: req.params.id })
    .skip(skip)
    .limit(limit)
    .populate('category', 'name');

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
      throw new Error();
    }
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const { keyword } = req.body;
    console.log(req.body);
    if (!keyword) {
      throw new Error('No Keyword');
    }
    const products = await Product.find({
      $text: { $search: keyword },
    });

    if (products.length) {
      res.json(products);
    } else {
      res.status(404).json({ message: 'No products found' });
    }
  } catch (error) {
    res.status(404).json({ message: 'No products found' });
  }
};

export const randomProducts = async (req, res) => {
  const allProducts = await Product.aggregate([
    {
      $sample: { size: 6 },
    },
    {
      $lookup: {
        from: 'categories',
        localField: 'category',
        foreignField: '_id',
        as: 'category',
      },
    },
    {$unwind: '$category'},
  ]);

  if (allProducts.length) {
    res.json(allProducts);
  } else {
    res.status(404).json({ message: 'Products not found' });
  }
};
