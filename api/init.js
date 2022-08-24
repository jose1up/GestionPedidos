import { sequelize } from "./src/db/db";
import "./src/db/models/Category";
import "./src/db/models/Product";
import "./src/db/models/Rol";
import "./src/db/models/Person"
import "./src/db/models/Table"
import "./src/db/models/Order"
import "./src/db/models/OrderDetail"
import {dbReloadProducts} from "./src/db/seeders/Product";
import { dbReloadCategory } from "./src/db/seeders/category";
import { dbReloadRol } from "./src/db/seeders/rol";


export const init = async () => {
  try {
    await sequelize.sync({ alter: true, force:true });
    await dbReloadCategory()
    await dbReloadProducts()
    await dbReloadRol()
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// const dbReloadProducts = async () => {
    
//   await Product.findOrCreate({
//       where: {
//           name: data.meals[0].strMeal,
//           img: data.meals[0].strMealThumb,
//           description: data.meals[0].strInstructions
//       }
//   })
// }