var http = require("http");
var url = require("url");

function start(route, handle){
  // Handles requests to the server
  function onRequest(request, response){
    // Get the pathname from the url
    var pathname = url.parse(request.url).pathname;

    console.log("Request for " + pathname + " received.");
    route(handle, pathname);

    // Create the response.
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
