const pool = require("../config/db_pgsql");
const queriesRates = require("../queries/queriesRates");

async function createRate(/* ? */) {
  try {
    const result = await pool.query(queriesRates.createRate, [
      /* ? */
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getAllRates() {
  try {
    const result = await pool.query(queriesRates.getAllRates);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getRateById(id) {
  try {
    const result = await pool.query(queriesRates.getRateById, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateRate(id /*  */) {
  try {
    const result = await pool.query(queriesRates.updateRate, [, /* ? */ id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteRate(id) {
  try {
    const result = await pool.query(queriesRates.deleteRate, [id]);
    return result.rowCount > 0;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRate,
  getAllRates,
  getRateById,
  updateRate,
  deleteRate,
};
