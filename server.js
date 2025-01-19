const http = require("node:http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end("<h1>Hello world</h1>");
});

server.listen(port, console.log(`listening on port ${port}`));
