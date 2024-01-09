const pool = require("../config/db_pgsql");
const queriesSystem = require("../queries/queriesSystem");

async function createSystem(name) {
  try {
    const result = await pool.query(queriesSystem.createSystem, [name]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getSystemAll() {
  try {
    const result = await pool.query(queriesSystem.getSystemAll);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getSystemById(id) {
  try {
    const result = await pool.query(queriesSystem.getSystemById, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateSystem(id, name) {
  try {
    const result = await pool.query(queriesSystem.updateSystem, [name, id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteSystem(id) {
  try {
    const result = await pool.query(queriesSystem.deleteSystem, [id]);
    return result.rowCount > 0;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createSystem,
  getSystemAll,
  getSystemById,
  updateSystem,
  deleteSystem,
};
