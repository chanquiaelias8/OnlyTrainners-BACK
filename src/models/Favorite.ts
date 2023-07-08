import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { Plan } from "./Plan";
import { User } from "./User";

export interface FavoriteAttributes {
  id: number;
  idUsuario: string;
  idplan: number;
}

interface FavoriteModel extends Model<FavoriteAttributes>, FavoriteAttributes {}

export const Favorite = db.define<FavoriteModel>("Favorite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idUsuario: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  idplan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.belongsToMany(Plan, { through: Favorite, foreignKey: "idUsuario" });
Plan.belongsToMany(User, { through: Favorite, foreignKey: "idplan" });