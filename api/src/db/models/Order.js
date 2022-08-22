import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Table } from "./Table";

export const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: Date.now,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
  subtotal: {
    type: DataTypes.DECIMAL,
  },
});

Order.hasMany(Table, { foreignKey: "Order_id", sourceKey: "id" });
Table.belongsTo(Order, { foreignKey: "Order_id", targetKey: "id" });
