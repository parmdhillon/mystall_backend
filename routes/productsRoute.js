import express from 'express';
import {
  getAllProducts,
  getProduct,
  searchProducts,
  randomProducts,
} from '../controllers/productsController.js';

const router = express.Router();
router.post('/search', searchProducts);
router.get('/random', randomProducts);
router.get('/:catname/:id', getProduct);
router.get('/:id', getAllProducts);

export default router;
