const patientControllers = require("../controllers/patientsControllers");
const express = require("express");
const router = express.Router();

router.get("/all", patientControllers.findAllPatients)
router.get("/name", patientControllers.findPatientByName)
router.post('/add', patientControllers.addNewPatient)
router.patch('/update/:id', patientControllers.updatePatientesById)
router.delete('/:id', patientControllers.deletePatientById)

module.exports = router