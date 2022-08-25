import express from "express";
import morgan from "morgan";
import { init } from "./init";
import routes from "./src/routes";
const server = express();
const port = process.env.PORT || 3000;

server.use(morgan("dev"));
server.use("/api", routes);

const main = async () => {
  await init();
  server.listen(port);
  console.log("running server on port " + port);
};

main();
