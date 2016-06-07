var http = require("http");

function start(){
  // Handles requests to the server
  function onRequest(request, response){
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
  }

  // Starts the server
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// Makes the start function available in the module
exports.start = start;
