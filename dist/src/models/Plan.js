"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = exports.PlanType = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
var PlanType;
(function (PlanType) {
    PlanType["diet"] = "diet";
    PlanType["training"] = "training";
})(PlanType || (exports.PlanType = PlanType = {}));
exports.Plan = db_1.db.define("Plan", {
    idplan: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    privateDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    publicDescription: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("diet", "training"),
        allowNull: false,
    },
    tags: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    },
});
