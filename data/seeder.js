import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connDB from '../config/db.js';

import categoriesData from './json/categories.json';
import veggiesData from './json/veggies.json';
import fruitsData from './json/fruits.json';
import Categories from '../models/categoriesModel.js';
import Products from '../models/productsModel.js';

dotenv.config();

connDB();

(async () => {
  try {
    //await Categories.deleteMany();
    await Products.deleteMany();
    //await Categories.insertMany(categoriesData);
    await Products.insertMany(veggiesData);
    await Products.insertMany(fruitsData);
    console.log('Data Added');
  } catch (error) {
    console.log('Error Adding Data:', error);
  }
})();
