const pool = require("../config/db_pgsql");
const queriesMonth = require("../queries/queriesMonth");

async function createMonth(/* */) {
  try {
    const result = await pool.query(queriesMonth.createMonth, [
      /* */
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getAllMonths() {
  try {
    const result = await pool.query(queriesMonth.getAllMonths);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getMonthById(id) {
  try {
    const result = await pool.query(queriesMonth.getMonthById, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateMonth(id /* */) {
  try {
    const result = await pool.query(queriesMonth.updateMonth, [, /* */ id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteMonth(id) {
  try {
    await pool.query(queriesMonth.deleteMonth, [id]);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createMonth,
  getAllMonths,
  getMonthById,
  updateMonth,
  deleteMonth,
};
