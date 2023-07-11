import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { Plan } from "./Plan";

export interface VideoAttributes {
  idVideo?: number;
  url: string;
  publico: boolean;
  description: string;
}

interface VideoModel extends Model<VideoAttributes>, VideoAttributes {}

export const Video = db.define<VideoModel>("Video", {
  idVideo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publico: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { timestamps: false});

Plan.hasMany(Video, { foreignKey: "idPlan"});
Video.belongsTo(Plan, { foreignKey: "idPlan"});