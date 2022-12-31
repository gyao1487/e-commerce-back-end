const router = require("express").Router();
const { Category, Product, ProductTag } = require("../../models");

//GET ALL CATEGORIES
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET SPECIFIC CATEGORY BY ID
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE NEW CATEGORY
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//UPDATE CATEGORY BY ID
router.put("/:id", async (req, res, next) => {
  try {
    //Checking if category exists
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.json({
        success: false,
        message: "Category id does not exist",
      });
    } else {
      let updateCategory = await Category.findbyIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidator: true,
        }
      );

      res.json({
        success: false,
        message: "Category updated successfully.",
        category: updateCategory,
      });
    }
  } catch (error) {
    next(error);
  }
});

// Category.findByIdAndUpdate(req.params.id, req.body)
// .then(category => res.json({ msg: 'Updated successfully' }))
// .catch(err =>
//  res.status(400).json({ error: 'Unable to update the category' })
// );

//DELETE CATEGORY BY ID
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
