const joi = require("joi")

const createCostSchema = joi.object({
    costCenterCode: joi.number().required(),
    budget: joi.number().required(),
    name: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 2 characters long'
    }),
    description: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Description is required',
        'string.min': 'Description must be at least 2 characters long'
    })
})

module.exports = {
    createCostSchema
}