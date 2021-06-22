"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const bp = require('body-parser');
const app = express_1.default();
const PORT = process.env.PORT || 4000;
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use(routes_1.default);
const uri = `${process.env.MONGO_URI}`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default
    .connect("mongodb+srv://tribit_proxy_user:uM3JLpGJr58GeVf@cluster0.j6oly.mongodb.net/Shop_Ck", options)
    .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
    .catch(error => {
    throw error;
});
