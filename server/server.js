const express = require("express");

const server = express();
const port = 3000;



server.use("/getPost", express.static(__dirname + "/assets"));
server.use("/post", express.static(__dirname + "/assets"));
server.use(require('./components/api'))

server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
