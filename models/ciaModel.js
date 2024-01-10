const pool = require("../config/db_pgsql");
const queriesCIA = require("../queries/queriesCia");

async function createCIA(/* valores necesarios */) {
  try {
    const result = await pool.query(queriesCIA.createCIA, [
      /* valores*/
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getAllCIA() {
  try {
    const result = await pool.query(queriesCIA.getAllCIA);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getCIAById(id) {
  try {
    const result = await pool.query(queriesCIA.getCIAById, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateCIA(id /* valores */) {
  try {
    const result = await pool.query(queriesCIA.updateCIA, [, /* valores*/ id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteCIA(id) {
  try {
    const result = await pool.query(queriesCIA.deleteCIA, [id]);
    return result.rowCount > 0;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createCIA,
  getAllCIA,
  getCIAById,
  updateCIA,
  deleteCIA,
};
