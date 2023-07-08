"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../db");
const Plan_1 = require("./Plan");
exports.Video = db_1.db.define("Video", {
    idVideo: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    public: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
Plan_1.Plan.hasMany(exports.Video, { foreignKey: "idplan", as: "videos" });
exports.Video.belongsTo(Plan_1.Plan, { foreignKey: "idplan", as: "plan" });
