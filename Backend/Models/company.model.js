const mongoose = require("mongoose");


const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    companySector: {
        type: String,
        required: true
    },
    companySegment: {
        type: String,
        required: true
    },
    parentCompany: {
        type: String,
        required: true
    },
    status: {
        enum: ["active", "inactive"],
        default: "active"
    }
}, {
    timestamps: true,
    versionKey: false
})
const Company = mongoose.model("Company", companySchema);
module.exports = Company