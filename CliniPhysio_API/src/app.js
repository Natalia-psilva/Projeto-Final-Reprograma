require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("./database/dbConnect");

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect();
app.get("/",(req, res) => {res.send({msg:"funcionou"})})

const patientsRoutes = require("./routes/patientsRoutes");
app.use("/patients", patientsRoutes);

const physiotherapistRoutes = require("./routes/physiotherapistRoutes");
app.use("/physios", physiotherapistRoutes);


const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger/swagger_output.json")
app.use("/minha-rota-de-documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile))


module.exports = app

