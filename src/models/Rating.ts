import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { User } from "./User";

export interface RatingAttributes {
  rating: number;
}

interface RatingModel extends Model<RatingAttributes>, RatingAttributes {}

export const Rating = db.define<RatingModel>("Rating", {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.hasMany(Rating, {  foreignKey: "idUser"});
Rating.belongsTo(User, { foreignKey: "idUser"});