"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const businessCustomerSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    businessEmail: {
        type: String,
        required: true,
    },
    businessPhoneNumber: {
        type: String,
    },
    businessAddress: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
    websiteUrl: {
        type: String,
    },
    categories: {
        type: [String],
        required: true,
    },
    photos: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("business-customer", businessCustomerSchema);
