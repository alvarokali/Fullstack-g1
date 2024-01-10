const pool = require("../config/db_pgsql");
const queriesUser = require("../queries/queriesUser");

async function createUser(user) {
  try {
    const result = await pool.query(queriesUser.createUser, [user.email, user.password, user.username]);
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

async function getUserByEmail(email) {
  try {
    const result = await pool.query(queriesUser.getUserByEmail, [email]);
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



async function updateUser(id, email, admin) {
  try {
    const result = await pool.query(
      queriesUser.updateUser,
      [email, admin, id]
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

module.exports = { 
  createUser, 
  getAllUsers, 
  getUserById, 
  getUserByEmail, 
  updateUser, 
  deleteUser
};
