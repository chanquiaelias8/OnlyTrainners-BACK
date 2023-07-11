"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const User_1 = require("./User");
exports.Rating = db_1.db.define("Rating", {
    rating: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
User_1.User.hasMany(exports.Rating, { foreignKey: "idUser" });
exports.Rating.belongsTo(User_1.User, { foreignKey: "idUser" });
