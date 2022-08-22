import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Person } from "./Person";

export const Table = sequelize.define("Table", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type:DataTypes.BOOLEAN
  },

});


Table.hasMany(Person , {foreignKey: "Table_id", sourceKey: "id"})
Person.belongsTo(Table,{foreignKey: "Table_id", targetKey: "id"})