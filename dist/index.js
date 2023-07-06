"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = __importDefault(require("../models"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
models_1.default.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening port ${port}`);
    });
});
app.listen(3000, () => {
    console.log('Server on port ', 3000);
});
