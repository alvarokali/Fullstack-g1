const express = require("express");
const router = express.Router();
const CIAController = require("../controllers/ciaController");

router.post("/cia", CIAController.createCIA);
router.get("/cia", CIAController.getAllCIA);
router.get("/cia/:id", CIAController.getCIAById);
router.put("/cia/:id", CIAController.updateCIA);
router.delete("/cia/:id", CIAController.deleteCIA);

module.exports = router;
