const http = require("http");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({
      agent: "OpenClaw",
      status: "running",
      type: "AI agent",
      message: "OpenClaw IA actif"
    }));
  }
});

server.listen(process.env.PORT || 3000);
