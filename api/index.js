import express from "express";
import morgan from "morgan";
import { init } from "./init";
import routes from "./src/routes";
import cors from "cors"
const server = express();
const port = process.env.PORT || 3000;




server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");   
  res.header(  
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(cors());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use("/api", routes);

const main = async () => {
  await init();
  server.listen(port);
  console.log("running server on port " + port);
};

main();
