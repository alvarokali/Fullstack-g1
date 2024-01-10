const express = require("express");
const router = express.Router();
const MonthController = require("../controllers/monthController");

router.post("/month", MonthController.createMonth);
router.get("/month", MonthController.getAllMonths);
router.get("/month/:id", MonthController.getMonthById);
router.put("/month/:id", MonthController.updateMonth);
router.delete("/month/:id", MonthController.deleteMonth);

module.exports = router;
