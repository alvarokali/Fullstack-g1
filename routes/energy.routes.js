const express = require("express");
const router = express.Router();
const EnergyController = require("../controllers/energyController");

router.post("/energy", EnergyController.createEnergy);
router.get("/energy", EnergyController.getAllEnergy);
router.get("/energy/:id", EnergyController.getEnergyById);
router.put("/energy/:id", EnergyController.updateEnergy);
router.delete("/energy/:id", EnergyController.deleteEnergy);

module.exports = router;
