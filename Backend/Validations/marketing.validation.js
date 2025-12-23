const joi = require("joi")

const createCostSchema = joi.object({
    campaignName: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Campaign name is required',
        'string.min': 'Campaign name must be at least 2 characters long'
    }),
    campaignDescription: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Campaign description is required',
        'string.min': 'Campaign description must be at least 2 characters long'
    }),
    campaignType: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Campaign type is required',
        'string.min': 'Campaign type must be at least 2 characters long'
    }),
    campaignStatus: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Campaign status is required',
        'string.min': 'Campaign status must be at least 2 characters long'
    }),
    campaignStartDate: joi.date().required().messages({
        'any.required': 'Campaign start date is required'
    }),
    campaignEndDate: joi.date().min(Joi.ref('campaignStartDate')).required().messages({
        'date.min': 'Campaign end date must be after campaign start date',
        'any.required': 'Campaign end date is required'
    })
})

module.exports = {
    createCostSchema
}