"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.User = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
exports.sequelize = new sequelize_1.Sequelize(config_1.DB_NAME, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: 'postgres'
});
exports.db = exports.sequelize;
const basename = path_1.default.basename(__filename);
const modelDefiners = [];
fs_1.default.readdirSync(path_1.default.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
    const model = require(path_1.default.join(__dirname, '/models', file));
    modelDefiners.push(model.default);
});
modelDefiners.forEach((modelDefiner) => modelDefiner(exports.sequelize));
let entries = Object.entries(exports.sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
const models = Object.fromEntries(capsEntries);
const { User } = models;
exports.User = User;
