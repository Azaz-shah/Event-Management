const joi = require("joi")

const createHostSchema = joi.object({
    company: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Company is required',
        'string.min': 'Company must be at least 2 characters long'
    }),
    hostDetailName: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Host detail name is required',
        'string.min': 'Host detail name must be at least 2 characters long'
    }),
    description: joi.string().min(2).max(255).required().messages({
        'string.empty': 'Description is required',
        'string.min': 'Description must be at least 2 characters long'
    })

})

module.exports = {
    createHostSchema
}