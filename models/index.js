// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.belongsTo(Category, {
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'products_from_category'
})
// Categories have many Products
Category.hasMany(Products, {
  sourceKey:'id', foreignKey:'category_id'
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
