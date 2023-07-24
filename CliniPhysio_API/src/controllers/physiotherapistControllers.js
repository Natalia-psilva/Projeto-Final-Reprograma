const physioModel = require("../models/physiotherapistModel");

const findAllPhysios = async (req, res) => {
    try {
        const allPhysios = await
            physioModel.find()
        res.status(200).json(allPhysios)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const findPhysioByName = async (req, res) => {
    try {
        const { name } = req.query
        const findName = await physioModel.find({ name: name})
        if(!findName) {
            return res.status(404).json({
                message: "Physiotherapist not found, please chek the name and try again!"
            })
        }
        res.status(200).json(findName)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewPhysio = async (req, res) => {
    try {
        const {
            name,
            telephone,
            email,
            crefito,
            cpf,
            specialty,
            patients } =
            req.body
        const newPhysio = new physioModel({
            name,
            telephone,
            email,
            crefito,
            cpf,
            specialty,
            patients,
        });
        const saveNewPhysio = await newPhysio.save();
        res.status(201).json({ message: "New Physiotherapist successfully added", saveNewPhysio })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updatePhysioById = async (req, res) => {
    try {
        const {
            name,
            telephone,
            email,
            crefito,
            cpf,
            specialty,
            patients } = req.body;
        const updatePhysio = await physioModel.findByIdAndUpdate(req.params.id, {
            name,
            telephone,
            email,
            crefito,
            cpf,
            specialty,
            patients,
        })
        res.status(200).json({ message: "Physiotherapist successfully updated", updatePhysio });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Physiotherapist not updated" });
    }
}
const deletePhysioById = async (req, res) => {
    try {
        const { id } = req.params
        deletePhysio = await physioModel.findByIdAndDelete(id)
        let message = `The Physiotherapist ${id} was deleted`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
module.exports = {
    findAllPhysios,
    findPhysioByName,
    addNewPhysio,
    updatePhysioById,
    deletePhysioById
}