import { Sequelize } from "sequelize";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from "./config";
import fs from 'fs';
import path from 'path';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres'
});

const basename = path.basename(__filename);
const modelDefiners: any[] = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, '/models', file));
    modelDefiners.push(model.default);
  });

modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

let entries = Object.entries<any>(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
const models = Object.fromEntries(capsEntries) as any;

const { User } = models;

export {
  User,
  sequelize as db
};