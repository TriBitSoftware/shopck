"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitForm = void 0;
const businessCustomerModel_1 = __importDefault(require("../models/businessCustomerModel"));
const submitForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        console.log(body);
        const businessCustomer = new businessCustomerModel_1.default({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phoneNumber: body.phoneNumber,
            businessName: body.businessName,
            businessEmail: body.businessEmail,
            businessPhoneNumber: body.businessPhoneNumber,
            businessAddress: body.businessAddress,
            facebook: body.facebook,
            twitter: body.twitter,
            instagram: body.instagram,
            websiteUrl: body.websiteUrl,
            categories: body.categories,
            photos: body.photos,
            description: body.description,
            feedback: body.feedback,
        });
        const submittedBusinessCustomer = yield businessCustomer.save();
        const registeredBusinesses = yield businessCustomerModel_1.default.find();
        res
            .status(201)
            .json({ message: "Form submited", businessCustomer: submittedBusinessCustomer, business: registeredBusinesses });
    }
    catch (error) {
        throw error;
    }
});
exports.submitForm = submitForm;
