const express = require("express");
const Event = require("../Models/event.model")
const { getChannel } = require("../Services/rabbitMq")
const Guest = require("../Models/guest.model")
const { createEventSchema } = require("../Validations/event.validation")


const createEvent = async (req, res) => {
    try {
        const { error, value } = createEventSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: "Validation error",
                errors: error.details.map(detail => detail.message)
            })
        }

        const { title, description, location, startDate, endDate, startTime, endTime } = value;

        const event = await Event.create(
            {
                title,
                description,
                location,
                startDate,
                endDate,
                startTime,
                endTime
            }
        );
        // Send event details to RabbitMQ
        try {
            const channel = getChannel()
            if (channel) {
                const queue = 'eventQueue'
                channel.sendToQueue(queue, Buffer.from(JSON.stringify(event)));
            }
        } catch (rabbitError) {
            console.log('RabbitMQ error:', rabbitError.message)
        }

        return res.status(201).json({
            message: "Event created successfully",
            event
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getEvent = async (req, res) => {
    try {
        const event = await Event.find()
        return res.status(200).json({
            message: "Event fetched successfully",
            event
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const pendingEvents = async (req, res) => {
    try {
        const events = await Event.find({ status: 'pending' });
        if (!events) {
            return res.status(404).json({
                message: "No pending events found"
            })
        }
        return res.status(200).json({
            message: "Pending events fetched successfully",
            events
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const rejectEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, { status: 'rejected' })
        return res.status(200).json({
            message: "Event rejected successfully",
            event
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

//Guest Event Handlers

const AddGuestToEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        const { fullname, description, email, company, priority } = req.body;

        // Validate priority
        if (!['high', 'standard'].includes(priority)) {
            return res.status(400).json({
                message: "Priority must be either 'high' or 'standard'"
            })
        }

        const guest = await Guest.create({
            fullname,
            description,
            email,
            company,
            priority
        })

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            })
        }

        event.guests.push(guest._id);
        await event.save();

        return res.status(200).json({
            message: `Guest added to ${priority === 'high' ? 'A-list (High Priority)' : 'B-list (Standard)'} successfully`,
            guest,
            list: priority === 'high' ? 'A-list' : 'B-list'
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getHighPriorityGuests = async (req, res) => {
    try {
        const { eventId } = req.params;
        const guests = await Guest.find({ priority: 'high' });

        return res.status(200).json({
            message: "A-list (High Priority) guests fetched successfully",
            count: guests.length,
            guests
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getStandardGuests = async (req, res) => {
    try {
        const { eventId } = req.params;
        const guests = await Guest.find({ priority: 'standard' });

        return res.status(200).json({
            message: "B-list (Standard) guests fetched successfully",
            count: guests.length,
            guests
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const shortListGuests = async (req, res) => {
    try {

    } catch (error) {

    }
}
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id)
        return res.status(200).json({
            message: "Event fetched successfully",
            event
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }

}

const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body)
        return res.status(200).json({
            message: "Event updated successfully",
            event
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })

    }
}

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Event deleted successfully",
            event
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

module.exports = {
    createEvent,
    getEventById,
    getEvent,
    updateEvent,
    deleteEvent,
    pendingEvents,
    rejectEvent,
    AddGuestToEvent,
    getHighPriorityGuests,
    getStandardGuests
}