import { DataTypes, Model, UUIDV4 } from "sequelize";
import { db } from "../db";
import { UUID } from "crypto";

export enum Sex {
  male="male",
  female="female",
  it="it",
}
export enum userType{
  user="user",
  trainer="trainer",
  nutritionist="nutritionist",
  admin="admin"
}

export interface UserAttributes {
  idUsuario?: UUID;
  userName:string,
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  Birthdate: Date;
  nationality?: string;
  sex: Sex;
  type:userType
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}

export const User = db.define<UserModel>("User", {
  idUsuario: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  userName:{ 
    type:DataTypes.STRING,
    allowNull:false
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
  type:{
    type:DataTypes.ENUM("user","trainer","nutritionist","admin")
  }
});
