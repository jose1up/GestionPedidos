import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const Person = sequelize.define("Person", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firtname: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  age:{
    type: DataTypes.INTEGER,
  },
  
});