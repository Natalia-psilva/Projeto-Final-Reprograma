const physiosControllers = require("../controllers/physiotherapistControllers");
const express = require("express");
const router = express.Router();

router.get("/all", physiosControllers.findAllPhysios)
router.get("/name", physiosControllers.findPhysioByName)
router.post('/add', physiosControllers.addNewPhysio)
router.patch('/update/:id', physiosControllers.updatePhysioById)
router.delete('/:id', physiosControllers.deletePhysioById)

module.exports = router