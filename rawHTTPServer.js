const http = require("http");
const localPort = "localhost:3000";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello, World!");
});

server.listen(8080, () => {
  console.log("we are ready to take requests");
});
