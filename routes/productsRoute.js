import express from 'express';
import {
  getAllProducts,
  getProduct,
  searchProducts,
} from '../controllers/productsController.js';

const router = express.Router();
router.post('/search', searchProducts);
router.get('/:catname/:id', getProduct);
router.get('/:id', getAllProducts);

export default router;
