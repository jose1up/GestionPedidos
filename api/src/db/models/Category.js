import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Product } from "./Product";

export const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

///Relacion

Category.hasMany(Product, { foreignKey: "Category_id", sourceKey: "id" });
Product.belongsTo(Category, { foreignKey: "Category_id", targetKey: "id" });
