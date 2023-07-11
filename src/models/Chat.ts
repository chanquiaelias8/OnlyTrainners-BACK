import { DataTypes, Model } from "sequelize";
import { db } from "../db";
import { User } from "./User";

export interface ChatAttributes {
  Chat: string;
}

interface ChatModel extends Model<ChatAttributes>, ChatAttributes {}

export const Chat = db.define<ChatModel>("Chat", {
  Chat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  },{timestamps: true });

User.hasMany(Chat, {  foreignKey: "idUser"});
Chat.belongsTo(User, { foreignKey: "idUser"});