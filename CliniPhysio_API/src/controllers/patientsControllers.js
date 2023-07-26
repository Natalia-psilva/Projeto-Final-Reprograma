const patientsModel = require("../models/patientsModel");
const physioModel = require("../models/physiotherapistModel");

const findAllPatients = async (req, res) => {
    try {
        const allPatients = await
            patientsModel.find().populate("physiotherapist");
        res.status(200).json(allPatients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const findPatientByName = async (req, res) => {
    try {
        const { name } = req.query
        const findName = await patientsModel.find({ name: name});
        if(!findName) {
            return res.status(404).json({
                message: "Patient not Found, please chek the name and try again!"
            });
        }
        res.status(200).json(findName);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
const addNewPatient = async (req, res) => {
    try {
        const {
            physiotherapistId,
            name,
            yearsOld,
            gender,
            telephone,
            email,
            clinicalDiagnosis,
            medicalHistory,
            medicines,
            allergies,
            physiotherapyDiagnosis,
            physiotherapist } = req.body
        if (!physiotherapistId) {
            return res.status(400).json({ message: "Required: Enter the Physiotherapist id" });
        }
        const findPhysio = await physioModel.findById(physiotherapistId);
        if (!findPhysio) {
            return res.status(404).json({
                message: "Physiotherapist Not Found"
            });
        }
        const newPatient = new patientsModel({
            physiotherapist:
                physiotherapistId,
            name,
            yearsOld,
            gender,
            telephone,
            email,
            clinicalDiagnosis,
            medicalHistory,
            medicines,
            allergies,
            physiotherapyDiagnosis
        })
        const saveNewPatient = await newPatient.save()
        res.status(201).json({
            message: "New patient added successfully"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        });
    }
}

const updatePatientesById = async (req, res) => {
    try {
        const { id } = req.params
        const {
            physiotherapistId,
            name,
            yearsOld,
            gender,
            telephone,
            email,
            clinicalDiagnosis,
            medicalHistory,
            medicines,
            allergies,
            physiotherapyDiagnosis } = req.body
            const findPatient = await patientsModel.findById(id)
            if (findPatient == null) {
                res.status(404).json({
                    message: "Patient not found"
                });
            }
            if (physiotherapistId) {
                const findPhysio = await physioModel.findById(physiotherapistId)
                if (findPhysio == null) {
                    return res.status(404).json({
                        message: "Physioterapist not found"
                    });
                }
            }
            findPatient.name = name || findPatient.name;
            findPatient.yearsOld = yearsOld || findPatient.yearsOld;
            findPatient.gender= gender || findPatient.gender;
            findPatient.telephone = telephone || findPatient.telephone;
            findPatient.email = email || findPatient.email;
            findPatient.clinicalDiagnosis = clinicalDiagnosis|| findPatient.clinicalDiagnosis;
            findPatient.medicalHistory = medicalHistory || findPatient.medicalHistory;
            findPatient.medicines = medicines || findPatient.medicines;
            findPatient.allergies = allergies || findPatient.allergies;
            findPatient.physiotherapist = physiotherapistId || findPatient.physiotherapist;
    
            const savePatient = await findPatient.save();
            res.status(200).json({ message: "Patient successfully updated", savePatient });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    const deletePatientById = async (req, res) => {
        try {
            const { id } = req.params
            deletePatient = await patientsModel.findByIdAndDelete(id)
            let message = `The Patient ${id} was deleted`
            res.status(200).json({ message });
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: error.message });
        }
    }
module.exports = {
    findAllPatients,
    findPatientByName,
    addNewPatient,
    updatePatientesById,
    deletePatientById
}