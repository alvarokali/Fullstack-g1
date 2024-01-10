const users = require("../models/users.model");
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {

  const { user, pwd, email } = req.body;
  if (!user || !pwd || !email) return res.status(400).json({ "message": "Username, email and password are required"})
  try {
    //encrypt the pwd
    const hashedPwd = await bcrypt.hash(pwd, 10)
    //store new user
    const newUser = { username: user, email: email, password: hashedPwd }
    console.log(newUser)
    const response = await users.createUser(newUser);
    res.status(201).json({
      message: `User created: ${response.username}, email: ${response.email}`,
    });

  } catch (err) {
    res.status(500).json({ "message": err.message })
  }
  // try {
  //   const newUser = req.body;
  //   const response = await users.createUser(newUser);
  //   res.status(201).json({
  //     message: `User created: ${newUser.email}, ID: ${response.id_user}`,
  //   });
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
};

const getUserById = async (req, res) => {
  try {
    let allUsers = await users.getUserById(req.params.id);

    res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    let allUsers = await users.getAllUsers();
    res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userUpdate = req.body;
    const response = await users.updateUser(userUpdate, id);
    res
      .status(200)
      .json({ user: response, message: `${id} has been updated` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await users.deleteUser(id);
    if (response > 0) {
      res.status(200).json({
        message: `${id} has been deleted`,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {getUserById, getAllUsers, createUser, updateUser, deleteUser};
