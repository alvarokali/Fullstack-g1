const express = require("express");
const router = express.Router();
const ratesController = require("../controllers/TarifaController");

// RUTAS POR TARIFA
router.get("/rates", ratesController.getAll);
router.get("/rates/:id", ratesController.getById);
router.post("/rates", ratesController.create);
router.put("/rates/:id", ratesController.update);
router.delete("/rates/:id", ratesController.delete);

module.exports = router;
