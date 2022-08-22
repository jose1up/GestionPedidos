import { sequelize } from "./src/db/db";
import "./src/db/models/Category";
import "./src/db/models/Product";
import "./src/db/models/Rol";
import "./src/db/models/Person"
import "./src/db/models/Table"
import "./src/db/models/Order"
import "./src/db/models/OrderDetail"


export const init = async () => {
  try {
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
