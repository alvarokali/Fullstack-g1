const pool = require("../config/db_pgsql");
const queriesEnergy = require("../queries/queriesEnergy");

async function createEnergy(/**/) {
  try {
    const result = await pool.query(queriesEnergy.createEnergy, [
      /* */
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function getAllEnergy() {
  try {
    const result = await pool.query(queriesEnergy.getAllEnergy);
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function getEnergyById(id) {
  try {
    const result = await pool.query(queriesEnergy.getEnergyById, [id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function updateEnergy(id /* */) {
  try {
    const result = await pool.query(queriesEnergy.updateEnergy, [, /* */ id]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
}

async function deleteEnergy(id) {
  try {
    await pool.query(queriesEnergy.deleteEnergy, [id]);
    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createEnergy,
  getAllEnergy,
  getEnergyById,
  updateEnergy,
  deleteEnergy,
};
