const express = require('express');
const createCostSchema = require('../Validations/marketing.validation');

const Marketing = require('../Models/marketing.model');

const createMarketingCampaign = async (req, res) => {
    try {
        const { error, value } = createCostSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: "Validation error",
                errors: error.details.map(detail => detail.message)
            })
        }
        const { name, startDate, endDate, budget } = req.body;
        if (!name || !startDate || !endDate || !budget) {
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }
        const marketing = await Marketing.create({
            name,
            startDate,
            endDate,
            budget
        })
        return res.status(200).json({
            message: "Marketing campaign created successfully",
            marketing
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getMarketingCampaigns = async (req, res) => {
    try {
        const allMarketingCampaigns = await Marketing.find()
        return res.status(200).json({
            message: "All marketing campaigns fetched successfully",
            allMarketingCampaigns
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getMarketingCampaignById = async (req, res) => {
    try {
        const { id } = req.params;
        const marketingCampaign = await Marketing.findById(id)
        if (!marketingCampaign) {
            return res.status(404).json({
                message: "Marketing campaign not found"
            })
        }
        return res.status(200).json({
            message: "Marketing campaign fetched successfully",
            marketingCampaign
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const deleteMarketingCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const marketingCampaign = await Marketing.findByIdAndDelete(id)
        if (!marketingCampaign) {
            return res.status(404).json({
                message: "Marketing campaign not found"
            })
        }
        return res.status(200).json({
            message: "Marketing campaign deleted successfully",
            marketingCampaign
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const updateMarketingCampaign = async (req, res) => {
    try {
        const { id } = req.params;
        const marketingCampaign = await Marketing.findByIdAndUpdate(id, req.body)
        if (!marketingCampaign) {
            return res.status(404).json({
                message: "Marketing campaign not found"
            })
        }
        return res.status(200).json({
            message: "Marketing campaign updated successfully",
            marketingCampaign
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

module.exports = {
    createMarketingCampaign,
    getMarketingCampaigns,
    getMarketingCampaignById,
    updateMarketingCampaign,
    deleteMarketingCampaign
}