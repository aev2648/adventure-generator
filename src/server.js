var http = require('http');
var port = process.env.PORT || process.env.NODE_PORT || 3000;

var onRequest = function(request, response){
    console.log(request.url);
    
    var headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    }
    
    response.writeHead(200, headers);
    
    if(request.url === '/locations.json'){
        response.write("waka flacka flame was here");
        response.end();
    } else {
        response.writeHead(404, headers);
        response.write(JSON.stringify({'error':'URL not recognized'}));
        response.end();
    }
};

http.createServer(onRequest).listen(port);

console.log("listening on localhost: " + port);