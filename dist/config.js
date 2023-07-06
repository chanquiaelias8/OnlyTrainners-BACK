"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_HOST = exports.DB_PASSWORD = exports.DB_NAME = exports.DB_USER = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.DB_USER = String(process.env.DB_USER);
exports.DB_NAME = String(process.env.DB_NAME);
exports.DB_PASSWORD = String(process.env.DB_PASSWORD);
exports.DB_HOST = String(process.env.DB_HOST);
