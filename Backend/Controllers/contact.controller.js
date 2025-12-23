const express = require("express")
const Contact = require("../Models/contact.model")
const createContactSchema = require("../Validations/contact.validation")
const contactController = async (req, res) => {

    try {

        const { error, value } = createContactSchema.validate(req.body)
        if (error) {
            return res.status(400).json({
                message: "Validation error",
                errors: error.details.map(detail => detail.message)
            })
        }
        const { FirstName, LastName, email, jobTitle, Company } = req.body
        if (!FirstName || !LastName || !email || !jobTitle || !Company) {
            return res.status(400).json({ error: "Please fill all the fields" })
        }
        const contact = await Contact.create({
            FirstName,
            LastName,
            email,
            jobTitle,
            Company
        })

        return res.status(200).json({
            message: "Contact created successfully",
            contact
        })


    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        return res.status(200).json({
            message: "Contact fetched successfully",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id)
        return res.status(200).json({
            message: "Contact fetched successfully",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(200).json({
            message: "Contact updated successfully",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            message: "Contact deleted successfully",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}

module.exports = { contactController, getContact, getContactById, updateContact, deleteContact }


