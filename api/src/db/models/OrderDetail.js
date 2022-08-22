import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Order } from "./Order";
import { Product } from "./Product";

export const OrderDetail = sequelize.define("OrderDetail", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  count: {
    type: DataTypes.INTEGER,
  },
});

OrderDetail.hasMany(Order, { foreignKey: "OrderDetail_id", sourceKey: "id" });
Order.belongsTo(OrderDetail, { foreignKey: "OrderDetail_id", targetKey: "id" });

OrderDetail.hasMany(Product, { foreignKey: "OrderDetail_id", sourceKey: "id"})
Product.belongsTo(OrderDetail,{ foreignKey: "OrderDetail_id", targetKey: "id"})
