const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  try {
    const {
      /* valores */
    } = req.body;

    const newProduct = await Product.createProduct(/* valores */);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating the product" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const productList = await Product.getAllProducts();
    res.status(200).json(productList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting all products" });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting the product" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      /* valores */
    } = req.body;

    const updatedProduct = await Product.updateProduct(id /* valores */);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: "Error updating the product" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.deleteProduct(id);
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting the product" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
