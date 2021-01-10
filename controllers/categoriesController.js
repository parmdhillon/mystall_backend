import Categories from '../models/categoriesModel.js';

//@desc     Get all Categories
//@route    POST /api/categories/
//@access   PUBLIC
const getCategories = async (req, res) => {
  try {
    const allCategories = await Categories.find({}).sort('pos');
    if (allCategories.length) {
      res.json(allCategories);
    } else {
      res.status(404).json({
        messagge: 'No Categories Found',
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export { getCategories };
