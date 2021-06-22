"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailController_1 = require("../controllers/emailController");
const formController_1 = require("../controllers/formController");
const router = express_1.Router();
router.post("/submitForm", formController_1.submitForm);
router.post("/registrationEmail", emailController_1.registrationEmail);
exports.default = router;
