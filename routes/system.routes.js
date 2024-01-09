const express = require("express");
const router = express.Router();
const systemController = require("../controllers/systemController");

// Rutas tipo de sistema (peninsular o canarias)
router.post("/system", systemController.createSystem);
router.get("/system", systemController.getSystemAll);
router.get("/system/:id", systemController.getSystemById);
router.put("/system/:id", systemController.updateSystem);
router.delete("/system/:id", systemController.deleteSystem);

module.exports = router;
