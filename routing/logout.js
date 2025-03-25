module.exports.getLogout = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Wylogowano pomyslnie!");
  };
  
