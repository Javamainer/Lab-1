module.exports.getHome = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Witamy na stronie glowniej!");
  };
  