const express = require("express");
const { createEvent, getEvent, getEventById, updateEvent, deleteEvent } = require("../Controllers/event.controller");

const router = express.Router();

router.post("/create-event", createEvent)
router.get("/get-events", getEvent)
router.get("/get-event/:id", getEventById)
router.put("/update-event/:id", updateEvent)
router.delete("/delete-event/:id", deleteEvent)

module.exports = router