const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const categoryData = await Category.findAll({
      // to include its associated Products
      include: [
        { model: Product }
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      //to include its associated Products
      include: [
        { model: Product }
      ],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'Category id has not been found!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// create a new category
router.post('/', async (req, res) => {
  // router.post('/:id', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    if (categoryData) {
      res.status(200).json(categoryData);
    } else
      res.status(404).json({ message: 'No category id found!' });
    return;
  }
  catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (categoryData) {
      res.status(200).json(categoryData);
    } else
      res.status(404).json({ message: 'No category id found!' });
    return;
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
