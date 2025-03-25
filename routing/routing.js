const home = require("./home");
const product = require("./product");
const logout = require("./logout");
const statusCode = require("../constants/statusCode");

module.exports.handleRequest = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    home.getHome(req, res);
  } else if (req.url === "/product" && req.method === "GET") {
    product.getProduct(req, res);
  } else if (req.url === "/logout" && req.method === "GET") {
    logout.getLogout(req, res);
  } else {
    res.writeHead(statusCode.NOT_FOUND, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
};
