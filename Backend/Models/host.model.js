const mongoose = require("mongoose");


const hostSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    hostDetailName: {
        type: String,
        required: true
    },
    description: {
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
const Host = mongoose.model("Host", hostSchema);
module.exports = Host