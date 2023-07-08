import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { Plan } from "./Plan";

export interface VideoAttributes {
  idVideo?: number;
  url: string;
  position: number;
  public: boolean;
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
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  public: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Plan.hasMany(Video, { foreignKey: "idplan", as: "videos" });
Video.belongsTo(Plan, { foreignKey: "idplan", as: "plan" });