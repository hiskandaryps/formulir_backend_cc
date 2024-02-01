// routes.js
const express = require("express");
const router = express.Router();
const { getFormulir, getFormulirById, postFormulir, updateFormulirById, deleteFormulirById } = require("./handler");

// Define routes
router.get("/formulir", getFormulir);
router.get("/formulir/:student_id", getFormulirById);
router.post("/formulir", postFormulir); 
router.put("/formulir/:student_id", updateFormulirById); 
router.delete("/formulir/:student_id", deleteFormulirById);

module.exports = router;
