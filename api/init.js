import { sequelize } from "./src/db/db";
import "./src/db/models/Category.js";
import "./src/db/models/Product";

export const init = async () => {
  try {
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
