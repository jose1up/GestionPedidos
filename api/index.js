import server from "./src/app.js";

const PORT = process.env.PORT || 3001;

server.listen(PORT, async () => {

  console.log("server is running on port", PORT);

})