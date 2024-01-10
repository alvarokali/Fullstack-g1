const pool = require("../config/db_pgsql");
const queriesProduct = require("../queries/queriesProduct");

async function createProduct(/* valores */) {
  try {
    const result = await pool.query(queriesProduct.createProduct, [
      /* valores*/
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getAllProducts() {
  try {
    const result = await pool.query(queriesProduct.getAllProducts);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getProductById(id) {
  try {
    const result = await pool.query(queriesProduct.getProductById, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateProduct(id /* valores */) {
  try {
    const result = await pool.query(queriesProduct.updateProduct, [
      ,
      /* valores */ id,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteProduct(id) {
  try {
    await pool.query(queriesProduct.deleteProduct, [id]);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
