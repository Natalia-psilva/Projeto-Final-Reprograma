const mongoose = require("mongoose");

const patientSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        name: {
            type: String,
            required: true,
            unique: true,
        },
        yearsOld: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        telephone: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        clinicalDiagnosis: {
            type: String,
            required: true,
        },
        medicalHistory: {
            type: String,
            required: true,
            unique: true,
        },
        medicines: {
            type: [String],
            required: false,
        },
        allergies: {
            type: [String],
            required: false,
        },
        physiotherapyDiagnosis: {
            type: String,
            required: true,
        },
        physiotherapist: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Physiotherapist",
        },
    }
)

const Model = mongoose.model("Patients", patientSchema);
module.exports = Model