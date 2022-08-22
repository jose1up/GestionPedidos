import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { Person } from "./Person";

export const Rol = sequelize.define("Rol", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Rol.hasMany(Person, { foreignKey: "Rol_id", sourceKey: "id" });
Person.belongsTo(Rol, { foreignKey: "Rol_id", targetKey: "id" });
