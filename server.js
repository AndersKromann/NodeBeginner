var http = require("http");
var url = require("url");

function start(route, handle){
  // Handles requests to the server
  function onRequest(request, response){
    var postData = "";
    // Get the pathname from the url
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    // Adds a listener for new postdata coming in.
    request.addListener("data", function(postDataChunk){
      postData += postDataChunk;
      console.log("Received POST data chunk '" + postDataChunk + "'.");
    });

    // Adds a listener to handle routing of the postdata only when done.
    request.addListener("end", function(){
      route(handle, pathname, response, postData);
    });
  }

  // Starts the server
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

// Makes the start function available in the module
exports.start = start;
