const Rates = require("../models/ratesModel");

const createRate = async (req, res) => {
  const {
    /*?*/
  } = req.body;
  try {
    const newRate = await Rates.create({
      /* ? */
    });
    res.status(201).json(newRate);
  } catch (error) {
    res.status(500).json({ error: "Error creating the rate" });
  }
};

const getAllRates = async (req, res) => {
  try {
    const rates = await Rates.find({});
    res.status(200).json(rates);
  } catch (error) {
    res.status(500).json({ error: "Error getting all rates" });
  }
};

const getRateById = async (req, res) => {
  const { id } = req.params;
  try {
    const rate = await Rates.findById(id);
    res.status(200).json(rate);
  } catch (error) {
    res.status(500).json({ error: "Error getting the rate" });
  }
};

const updateRate = async (req, res) => {
  const { id } = req.params;
  const {
    /* ?*/
  } = req.body;
  try {
    const updatedRate = await Rates.findAndUpdate(
      id,
      {
        /* ? */
      },
      { new: true }
    );
    res.status(200).json(updatedRate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating the rate" });
  }
};

const deleteRate = async (req, res) => {
  const { id } = req.params;
  try {
    await Rates.findAndDelete(id);
    res.status(204).json();
  } catch (error) {
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
