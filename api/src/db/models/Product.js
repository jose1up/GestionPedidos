import { DataTypes } from "sequelize";
import { sequelize } from "../db";

export const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price:{
    type: DataTypes.DECIMAL,
    
  },
  img:{
    type: DataTypes.STRING,
  },
  description:{
    type: DataTypes.TEXT,
  },

});


