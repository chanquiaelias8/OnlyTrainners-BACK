import { DataTypes, Model } from "sequelize";
import { db } from "../db";

export enum Sex {
  male="male",
  female="female",
  it="it",
}

export interface UserAttributes {
  idUsuario?: number;
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  Birthdate: Date;
  nationality?: string;
  sex: Sex;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}

export const User = db.define<UserModel>("User", {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nationality: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sex: {
    type: DataTypes.ENUM("male", "female", "it"),
    allowNull: false,
  },
});