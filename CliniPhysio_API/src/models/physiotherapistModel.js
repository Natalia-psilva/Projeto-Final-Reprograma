const mongoose = require("mongoose");

const physiotherapistSchema = mongoose.Schema(
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
        telephone: {
            type: Number,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        crefito: {
            type: String,
            required: true,
            unique: true,
        },
        cpf: {
            type: Number,
            required: true,
            unique: true,
        },
        specialty: {
            type: String,
            required: true,
        },
        patients: {
            type: [String],
            required: true,
        }
    }
)

const Model = mongoose.model("Physiotherapist", physiotherapistSchema);
module.exports = Model