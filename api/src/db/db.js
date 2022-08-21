import { Sequelize } from "sequelize";
import "dotenv/config";

const { USER, PASSWORD, DB } = process.env;

console.log("user: " + USER, "password: " + PASSWORD, "db: " + DB);

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

const TestingDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

TestingDB()