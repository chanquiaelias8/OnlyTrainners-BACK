import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { Plan } from "./Plan";

export interface VideoAttributes {
  idVideo?: number;
  idEntrenador: number
  descPublica: string;
  descPrivada: string;
  precio: number;
  etiquetas: string;
  video: string
}

interface VideoModel extends Model<VideoAttributes>, VideoAttributes {}

export const Video = db.define<VideoModel>("Video", {
  idVideo: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idEntrenador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descPublica: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descPrivada: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  etiquetas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  video: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, { timestamps: false});

// Plan.hasMany(Video, { foreignKey: "idplan", as: "videos" });
// Video.belongsTo(Plan, { foreignKey: "idplan", as: "plan" });