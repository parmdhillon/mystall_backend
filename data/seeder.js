import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connDB from '../config/db.js';

import categoriesData from './json/categories.json';
import productsData from './json/products.json';
import Categories from '../models/categoriesModel.js';
import Products from '../models/productsModel.js';

dotenv.config();

connDB();

(async () => {
  try {
    //await Categories.deleteMany();
    await Products.deleteMany();
    //await Categories.insertMany(categoriesData);
    await Products.insertMany(productsData);
    console.log('Data Added');
  } catch (error) {
    console.log('Error Adding Data:', error);
  }
})();
