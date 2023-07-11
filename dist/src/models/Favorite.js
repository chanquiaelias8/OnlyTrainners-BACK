"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Plan_1 = require("./Plan");
const User_1 = require("./User");
exports.Favorite = db_1.db.define("Favorite", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idUsuario: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    idplan: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
User_1.User.belongsToMany(Plan_1.Plan, { through: exports.Favorite, foreignKey: "idUsuario" });
Plan_1.Plan.belongsToMany(User_1.User, { through: exports.Favorite, foreignKey: "idplan" });
