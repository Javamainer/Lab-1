const http = require("http");
const config = require("./config.js");
const routing = require("./routing/routing.js");

const server = http.createServer((req, res) => {
  routing.handleRequest(req, res);
});

server.listen(config.PORT, () => {
  console.log(`Serwer działa na porcie ${config.PORT}`);
});
