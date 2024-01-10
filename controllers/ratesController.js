const Rates = require("../models/ratesModel");

const createRate = async (req, res) => {
  try {
    const {
      /* valores para crear la tasa */
    } = req.body;

    const newRate = await Rates.createRate(/* valores necesarios */);
    res.status(201).json(newRate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating the rate" });
  }
};

const getAllRates = async (req, res) => {
  try {
    const rates = await Rates.getAllRates();
    res.status(200).json(rates);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting all rates" });
  }
};

const getRateById = async (req, res) => {
  const { id } = req.params;
  try {
    const rate = await Rates.getRateById(id);
    res.status(200).json(rate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting the rate" });
  }
};

const updateRate = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      /* valores para actualizar la tasa */
    } = req.body;

    const updatedRate = await Rates.updateRate(id /* valores */);
    res.status(200).json(updatedRate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating the rate" });
  }
};

const deleteRate = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Rates.deleteRate(id);
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Rate not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting the rate" });
  }
};

module.exports = {
  createRate,
  getAllRates,
  getRateById,
  updateRate,
  deleteRate,
};
