var http = require("http");
var url = require("url");

function start(route, handle){
  // Handles requests to the server
  function onRequest(request, response){
    var postData = "";
    // Get the pathname from the url
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response, request);
  }

  // Starts the server
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// Makes the start function available in the module
exports.start = start;
