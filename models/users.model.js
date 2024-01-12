const pool = require("../config/db_pgsql");
const queriesUser = require("../queries/queriesUser");

async function createUser(email, password) {
  try {
    const result = await pool.query(queriesUser.createUser, [email, password]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function getUserById(id) {
  try {
    const result = await pool.query(queriesUser.getUserById, [id]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getAllUsers() {
    try {
      const result = await pool.query(queriesUser.getAllUsers);
      return result.rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }



async function updateUser(id, email, password) {
  try {
    const result = await pool.query(
      queriesUser.updateUser,
      [email, password, id]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const result = await pool.query(queriesUser.deleteUser, [id]);
    return result.rowCount > 0;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {createUser, getAllUsers, getUserById, updateUser, deleteUser};
