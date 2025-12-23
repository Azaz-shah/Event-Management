const joi = require("joi")

const createContactSchema = joi.object({
    fullname: joi.string().min(3).max(255).required().messages({
        'string.empty': 'Fullname is required',
        'string.min': 'Fullname must be at least 3 characters long'
    }),
    lastname: joi.string().min(3).max(255).required().messages({
        'string.empty': 'Last name is required',
        'string.min': 'Last name must be at least 3 characters long'
    }),
    email: joi.string().email().required().messages({
        'string.empty': 'Email is required',
        'string.email': 'Email must be a valid email address'
    }),
    jobTitle: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Job title is required',
        'string.min': 'Job title must be at least 2 characters long'
    }),
    company: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Company is required',
        'string.min': 'Company must be at least 2 characters long'
    })
})

module.exports = {
    createContactSchema
}