"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const User_1 = require("./User");
exports.Plan = db_1.db.define("Plan", {
    idPlan: {
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
    tags: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: true,
    },
});
User_1.User.hasMany(exports.Plan, { foreignKey: "idUser" });
exports.Plan.belongsTo(User_1.User, { foreignKey: "idUser" });
User_1.User.belongsToMany(exports.Plan, { through: 'Favorite' });
exports.Plan.belongsToMany(User_1.User, { through: 'Favorite' });
User_1.User.belongsToMany(exports.Plan, { through: 'Bought' });
exports.Plan.belongsToMany(User_1.User, { through: 'Bought' });
