const mongoose = require("mongoose");


const marketingSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})
const Marketing = mongoose.model("Marketing", marketingSchema);
module.exports = Marketing
