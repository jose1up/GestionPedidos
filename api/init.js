import { sequelize } from "./src/db/db";
import "./src/db/models/Category.js";

export const init = async () => {
  try {
    await sequelize.sync()
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
