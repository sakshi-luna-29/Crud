const Product = require("../models/product.model");

//Get all products from table products

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get product by id

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productById = await Product.findById(id);
    res.status(200).json(productById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

////update a product

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(id, req.body);

    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    const update = await Product.findById(id);

    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Creates New Product in Product Table
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found." });
    }
    const updated = await Product.findById(id);

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
};
