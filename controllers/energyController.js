const Energy = require("../models/energyModel");

const createEnergy = async (req, res) => {
  try {
    const {
      /*  */
    } = req.body;

    const newEnergy = await Energy.createEnergy(/*  */);
    res.status(201).json(newEnergy);
  } catch (error) {
    res.status(500).json({ error: "Error creating the energy" });
  }
};

const getAllEnergy = async (req, res) => {
  try {
    const energyList = await Energy.getAllEnergy();
    res.status(200).json(energyList);
  } catch (error) {
    res.status(500).json({ error: "Error getting all energy records" });
  }
};

const getEnergyById = async (req, res) => {
  const { id } = req.params;
  try {
    const energy = await Energy.getEnergyById(id);
    res.status(200).json(energy);
  } catch (error) {
    res.status(500).json({ error: "Error getting the energy record" });
  }
};

const updateEnergy = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      /* */
    } = req.body;

    const updatedEnergy = await Energy.updateEnergy(id /**/);
    res.status(200).json(updatedEnergy);
  } catch (error) {
    res.status(500).json({ error: "Error updating the energy record" });
  }
};

const deleteEnergy = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Energy.deleteEnergy(id);
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Energy record not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting the energy record" });
  }
};

module.exports = {
  createEnergy,
  getAllEnergy,
  getEnergyById,
  updateEnergy,
  deleteEnergy,
};
