import { config } from "dotenv";

config();

export const DB_USER = String(process.env.DB_USER);
export const DB_NAME = String(process.env.DB_NAME);
export const DB_PASSWORD = String(process.env.DB_PASSWORD);
export const DB_HOST = String(process.env.DB_HOST);