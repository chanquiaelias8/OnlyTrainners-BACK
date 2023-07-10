import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { User } from "./User";

export enum PlanType {
  diet = "diet",
  training = "training",
}

export interface PlanAttributes {
  idPlan?: number;
  title: string;
  privateDescription: string;
  publicDescription: string;
  price: number;
  type: PlanType;
  tags: Array<string>;
}

interface PlanModel extends Model<PlanAttributes>, PlanAttributes {}

export const Plan = db.define<PlanModel>("Plan", {
  idPlan: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  privateDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("diet", "training"),
    allowNull: false,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
});

User.hasMany(Plan, { foreignKey: "idUser"});
Plan.belongsTo(User, { foreignKey: "idUser"});