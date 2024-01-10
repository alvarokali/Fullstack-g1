const CIA = require("../models/ciaModel");

const createCIA = async (req, res) => {
  try {
    const {
      /* valores necesarios para crear */
    } = req.body;

    const newCIA = await CIA.createCIA(/* valores */);
    res.status(201).json(newCIA);
  } catch (error) {
    res.status(500).json({ error: "Error creating the CIA" });
  }
};

const getAllCIA = async (req, res) => {
  try {
    const ciaList = await CIA.getAllCIA();
    res.status(200).json(ciaList);
  } catch (error) {
    res.status(500).json({ error: "Error getting all CIA" });
  }
};

const getCIAById = async (req, res) => {
  const { id } = req.params;
  try {
    const cia = await CIA.getCIAById(id);
    res.status(200).json(cia);
  } catch (error) {
    res.status(500).json({ error: "Error getting the CIA" });
  }
};

const updateCIA = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      /*valores*/
    } = req.body;

    const updatedCIA = await CIA.updateCIA(id /* valores */);
    res.status(200).json(updatedCIA);
  } catch (error) {
    res.status(500).json({ error: "Error updating the CIA" });
  }
};

const deleteCIA = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await CIA.deleteCIA(id);
    if (result) {
    } else {
      res.status(404).json({ message: "CIA not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting the CIA" });
  }
};

module.exports = {
  createCIA,
  getAllCIA,
  getCIAById,
  updateCIA,
  deleteCIA,
};
