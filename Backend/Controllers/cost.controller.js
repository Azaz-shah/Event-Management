const mongoose = require('mongoose');

const Cost = require('../Models/cost.model');
const costSchema = require('../Validations/cost.validation');


const createCost = async (req, res) => {
    try {
        const { error, value } = costSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: "Validation error",
                errors: error.details.map(detail => detail.message)
            });
        }

        const { costCenterCode, budget, name, description } = value;

        const cost = await Cost.create({
            costCenterCode,
            budget,
            name,
            description
        })

        return res.status(201).json({
            message: "Cost created successfully",
            cost
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getCost = async (req, res) => {
    try {
        const cost = await Cost.find()
        return res.status(200).json({
            message: "Cost fetched successfully",
            cost
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const updateCost = async (req, res) => {
    try {
        const cost = await Cost.findByIdAndUpdate(req.params.id)
        return res.status(200).json({
            message: "Cost updated successfully",
            cost
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const deleteCost = async (req, res) => {
    try {
        const cost = await Cost.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Cost deleted successfully",
            cost
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

module.exports = {
    createCost,
    getCost,
    updateCost,
    deleteCost
}