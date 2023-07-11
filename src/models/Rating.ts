import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { User } from "./User";
import { UUID } from "crypto";
export interface RatingAttributes {
  idRating:UUID
  rating: number;
}

interface RatingModel extends Model<RatingAttributes>, RatingAttributes {}

export const Rating = db.define<RatingModel>("Rating", {
  idRating: {
    type: DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    primaryKey: true,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.hasMany(Rating, {  foreignKey: "idUser"});
Rating.belongsTo(User, { foreignKey: "idUser"});