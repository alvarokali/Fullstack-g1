const Month = require("../models/monthModel");

const createMonth = async (req, res) => {
  try {
    const {
      /*  */
    } = req.body;

    const newMonth = await Month.createMonth(/* */);
    res.status(201).json(newMonth);
  } catch (error) {
    res.status(500).json({ error: "Error creating the month" });
  }
};

const getAllMonths = async (req, res) => {
  try {
    const monthList = await Month.getAllMonths();
    res.status(200).json(monthList);
  } catch (error) {
    res.status(500).json({ error: "Error getting all months" });
  }
};

const getMonthById = async (req, res) => {
  const { id } = req.params;
  try {
    const month = await Month.getMonthById(id);
    res.status(200).json(month);
  } catch (error) {
    res.status(500).json({ error: "Error getting the month" });
  }
};

const updateMonth = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      /*  */
    } = req.body;

    const updatedMonth = await Month.updateMonth(id /* */);
    res.status(200).json(updatedMonth);
  } catch (error) {
    res.status(500).json({ error: "Error updating the month" });
  }
};

const deleteMonth = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Month.deleteMonth(id);
    if (result) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Month not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting the month" });
  }
};

module.exports = {
  createMonth,
  getAllMonths,
  getMonthById,
  updateMonth,
  deleteMonth,
};
