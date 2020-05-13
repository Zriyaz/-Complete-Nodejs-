var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plainnode
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write("<h1>Welcome to kongu engineering college</h1>")
   
   // Send the response body as "Hello World"
   response.end();
}).listen(3000)

// Console will print the message
//console.log('Server running at http://127.0.0.1:8081/');