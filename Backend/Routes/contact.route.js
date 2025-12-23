const express = require("express");
const { contactController, getContact, getContactById, updateContact, deleteContact } = require("../Controllers/contact.controller");

const router = express.Router();

router.post("/create-contact", contactController)
router.get("/get-contacts", getContact)
router.get("/get-contact/:id", getContactById)
router.put("/update-contact/:id", updateContact)
router.delete("/delete-contact/:id", deleteContact)

module.exports = router