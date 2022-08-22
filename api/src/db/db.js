import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";



const { USER, PASSWORD, DB, LOCALHOST } = process.env;

export const sequelize = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${LOCALHOST}:5432/${DB}`
);
