import express from "express";
import morgan from "morgan";
import routes from "./routes/index.js";

const server = express();

server.use(morgan("dev"));

server.use("/api", routes);

export default server;
