import express from 'express';
import { getAllProducts, getProduct } from '../controllers/productsController.js';

const router = express.Router();
router.get('/:catname/:id', getProduct);
router.get('/:id', getAllProducts);


export default router;
