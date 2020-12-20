import mongoose from 'mongoose';

const categoriesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img: String,
});

const Categories = mongoose.model('Categories', categoriesSchema);

export default Categories;
