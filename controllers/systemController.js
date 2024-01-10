const System = require("../models/systemModel");

const createSystem = async (req, res) => {
  const { name } = req.body;
  try {
    const newSystem = await System.createSystem(name);
    res.status(201).json(newSystem);
  } catch (error) {
    res.status(500).json({ error: "Error creating the system" });
  }
};

const getAllSystem = async (req, res) => {
  try {
    const systems = await System.getSystemAll();
    res.status(200).json(systems);
  } catch (error) {
    res.status(500).json({ error: "Error getting all systems" });
  }
};

const getSystemById = async (req, res) => {
  const { id } = req.params;
  try {
    const system = await System.getSystemById(id);
    res.status(200).json(system);
  } catch (error) {
    res.status(500).json({ error: "Error getting the system" });
  }
};

const updateSystem = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedSystem = await System.updateSystem(id, name);
    res.status(200).json(updatedSystem);
  } catch (error) {
    res.status(500).json({ error: "Error updating the system" });
  }
};

const deleteSystem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await System.deleteSystem(id);
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "System not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting the system" });
  }
};

module.exports = {
  createSystem,
  getAllSystem,
  getSystemById,
  updateSystem,
  deleteSystem,
};
