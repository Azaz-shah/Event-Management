const mongoose = require("mongoose");


const guestSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    company: {
        type: String,
        required: true
    },
    priroty: {
        type: String,
        enum: ["A list", "B list"]
    }
}, {
    timestamps: true,
    versionKey: false
})
const Guest = mongoose.model("Guest", guestSchema);
module.exports = Guest
