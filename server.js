// import built-in Node package
var http = require('http');
var port = 4000;

var server = http.createServer(function (req, res) { // Callback function
    // Response header
    res.writeHead(200, { "Content-Type": "application/json" });
    // send response
    res.end("Hello World\n");

    var song = {
    	id: 12345,
    	favorite: false,
    	title: "Hello World",
    	artist: "Node programmer",
    	album: "Node EP"
    };
    res.end(JSON.stringify(song));
});

server.listen(port, function () { // Callback function
    console.log("Starting server at " + port);
});