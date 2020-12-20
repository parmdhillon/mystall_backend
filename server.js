import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connDB from './config/db.js';
import categoriesRoutes from './routes/categoryRoutes.js';
import productsRoutes from './routes/productsRoute.js';

dotenv.config();
const app = express();
connDB();

app.use(morgan('dev'));
app.use(express.json());
//app.use((req, res, next) => setTimeout(next, 10000));

app.get('/', (req, res) => {
  res.send('Express Server is running!');
});

app.use('/api/categories', categoriesRoutes);
app.use('/api/products', productsRoutes);

app.listen(5000, console.log(`Express running @5000`));
