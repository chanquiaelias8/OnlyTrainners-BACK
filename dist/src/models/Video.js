"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
exports.Video = db_1.db.define("Video", {
    idVideo: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idEntrenador: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    descPublica: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descPrivada: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    etiquetas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    video: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false });
// Plan.hasMany(Video, { foreignKey: "idplan", as: "videos" });
// Video.belongsTo(Plan, { foreignKey: "idplan", as: "plan" });
