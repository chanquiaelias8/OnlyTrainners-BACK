"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Sex = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
var Sex;
(function (Sex) {
    Sex["male"] = "male";
    Sex["female"] = "female";
    Sex["it"] = "it";
})(Sex || (exports.Sex = Sex = {}));
exports.User = db_1.db.define("User", {
    idUsuario: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Birthdate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    sex: {
        type: sequelize_1.DataTypes.ENUM("male", "female", "it"),
        allowNull: false,
    },
});
