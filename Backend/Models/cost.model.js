const mongoose = require("mongoose");


const costSchema = new mongoose.Schema({
    costCenterCode: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})
const Cost = mongoose.model("Cost", costSchema);
module.exports = Cost
