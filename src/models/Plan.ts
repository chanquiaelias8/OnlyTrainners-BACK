import { DataTypes, Model } from "sequelize";
import { db } from "../db";


export enum PlanType {
  diet = "diet",
  training = "training",
}

export interface PlanAttributes {
  idplan?: number;
  title: string;
  privateDescription: string;
  publicDescription: string;
  price: number;
  type: PlanType;
  tags: Array<string>;
}

interface PlanModel extends Model<PlanAttributes>, PlanAttributes {}

export const Plan = db.define<PlanModel>("Plan", {
  idplan: {
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

