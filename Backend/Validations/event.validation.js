const Joi = require('joi');

const createEventSchema = Joi.object({
    title: Joi.string().min(3).max(255).required().messages({
        'string.empty': 'Title is required',
        'string.min': 'Title must be at least 3 characters long'
    }),
    description: Joi.string().min(10).max(1000).required().messages({
        'string.empty': 'Description is required',
        'string.min': 'Description must be at least 10 characters long'
    }),
    location: Joi.string().min(3).max(255).required().messages({
        'string.empty': 'Location is required'
    }),
    startDate: Joi.date().required().messages({
        'any.required': 'Start date is required'
    }),
    endDate: Joi.date().min(Joi.ref('startDate')).required().messages({
        'date.min': 'End date must be after start date',
        'any.required': 'End date is required'
    }),
    startTime: Joi.string().required().messages({
        'any.required': 'Start time is required'
    }),
    endTime: Joi.string().required().messages({
        'any.required': 'End time is required'
    })
});

module.exports = { createEventSchema };