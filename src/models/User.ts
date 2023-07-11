import { DataTypes, Model, UUIDV4 } from "sequelize";
import { db } from "../db";
import { UUID } from "crypto";



export interface UserAttributes {
  idUsuario?: UUID;
  userName:string,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  Birthdate: Date;
  nationality?: string;
  sex: string;
  typeUser:string
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
  firstName: {
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
    type: DataTypes.STRING,
    allowNull: true,
  },
  typeUser:{
    type: DataTypes.STRING,
    allowNull: true,
  }
}, { timestamps: false});
