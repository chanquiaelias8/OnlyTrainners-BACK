"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.userType = exports.Sex = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
var Sex;
(function (Sex) {
    Sex["male"] = "male";
    Sex["female"] = "female";
    Sex["it"] = "it";
})(Sex || (exports.Sex = Sex = {}));
var userType;
(function (userType) {
    userType["user"] = "user";
    userType["trainer"] = "trainer";
    userType["admin"] = "admin";
})(userType || (exports.userType = userType = {}));
exports.User = db_1.db.define("User", {
    idUsuario: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
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
    type: {
        type: sequelize_1.DataTypes.ENUM("user", "trainer", "admin")
    }
});
