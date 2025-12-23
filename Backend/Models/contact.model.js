const mongoose = require("mongoose");


const contactSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    Company: {
        type: String,
        required: true
    }
});

const contact = mongoose.model("contact", contactSchema);
module.exports = contact