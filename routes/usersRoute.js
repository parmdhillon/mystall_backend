import express from 'express';
import { authLogin, registerUser } from '../controllers/usersController.js';

const router = express.Router();

router.route('/login').post(authLogin);
router.route('/register').post(registerUser);

export default router;
