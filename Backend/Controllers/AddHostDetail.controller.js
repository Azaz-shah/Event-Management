const mongoose = require('mongoose');
const Host = require("../Models/host.model");
const { createHostSchema } = require("../Validations/host.validation");

const createHost = async (req, res) => {
    try {
        const { error, value } = createHostSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                message: "Validation error",
                errors: error.details.map(detail => detail.message)
            });
        }

        const { company, hostDetailName, description, status = 'active' } = value;

        const hostDetail = await Host.create({
            company,
            hostDetailName,
            description,
            status
        });
        return res.status(201).json({
            message: "Host detail added successfully",
            hostDetail
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

const getHostDetails = async (req, res) => {
    try {
        const hostDetails = await Host.find();
        return res.status(200).json({
            message: "Host details fetched successfully",
            hostDetails
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}
const updateHostDetail = async (req, res) => {
    try {
        const hostDetail = await Host.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hostDetail) {
            return res.status(404).json({
                message: "Host detail not found"
            });
        }
        return res.status(200).json({
            message: "Host detail updated successfully",
            hostDetail
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

const getHostDetailById = async (req, res) => {
    try {
        const hostDetail = await Host.findById(req.params.id);
        if (!hostDetail) {
            return res.status(404).json({
                message: "Host detail not found"
            });
        }
        return res.status(200).json({
            message: "Host detail fetched successfully",
            hostDetail
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

const toggleHostStatus = async (req, res) => {
    try {
        const hostDetail = await Host.findById(req.params.id);
        if (!hostDetail) {
            return res.status(404).json({
                message: "Host detail not found"
            });
        }

        const newStatus = hostDetail.status === 'active' ? 'inactive' : 'active';
        const updatedHost = await Host.findByIdAndUpdate(
            req.params.id,
            { status: newStatus },
            { new: true }
        );

        return res.status(200).json({
            message: `Host detail ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully`,
            hostDetail: updatedHost
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

const getActiveHosts = async (req, res) => {
    try {
        const activeHosts = await Host.find({ status: 'active' });
        return res.status(200).json({
            message: "Active host details fetched successfully",
            count: activeHosts.length,
            hostDetails: activeHosts
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

const getInactiveHosts = async (req, res) => {
    try {
        const inactiveHosts = await Host.find({ status: 'inactive' });
        return res.status(200).json({
            message: "Inactive host details fetched successfully",
            count: inactiveHosts.length,
            hostDetails: inactiveHosts
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}

const deleteHostDetail = async (req, res) => {
    try {
        const hostDetail = await Host.findByIdAndDelete(req.params.id);
        if (!hostDetail) {
            return res.status(404).json({
                message: "Host detail not found"
            });
        }
        return res.status(200).json({
            message: "Host detail deleted successfully",
            hostDetail
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}



module.exports = {
    createHost,
    getHostDetails,
    updateHostDetail,
    deleteHostDetail,
    getHostDetailById,
    toggleHostStatus,
    getActiveHosts,
    getInactiveHosts
}
