/* Load the HTTP library */
const http = require("http");

/* Create an HTTP server to hand;e responses */
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Yo wadup");
  response.end();
}).listen(8888);
