"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const User_1 = require("./User");
exports.Chat = db_1.db.define("Chat", {
    Chat: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: true });
User_1.User.hasMany(exports.Chat, { foreignKey: "idUser" });
exports.Chat.belongsTo(User_1.User, { foreignKey: "idUser" });
