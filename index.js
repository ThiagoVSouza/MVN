

var net = require('net');
// var http = require('http');

var server = net.createServer(function(socket) {

    // socket.write('Echo server\r\n');
    socket.pipe(socket);
    
    console.log('Recebido: '+socket);
    
    /*
    
    socket.on('data', function(chunk) {
        socket.write(chunk);
    });
    
   socket.on('end', socket.end);
    
    */
   
    
});

server.listen(1234);

console.log('Server running');




/*

var net = require('net');

var server = net.createServer(function(socket) {

    socket.write('Echo server\r\n');
    
    socket.on('data', function(chunk) {
        socket.write(chunk);
    });
    socket.on('end', socket.end);

});

server.listen(5000);

*/

/*
var http = require('http');

var final = 0;

var server = http.createServer(function(request, response) {

    final = 0;

    
    response.writeHead(200, {"Content-Type": "text/plain"});

    let body = [];

    request.on('data', (chunk) => {

      body.push(chunk);

    }).on('end', () => {

        body = Buffer.concat(body).toString();

        // response.write('Chegou no BODY : '+body+'<br/>');
        
        const url = "http://n1.nortrix.net/apps/vinhecard/script_servidor.php?i="+body;

        http.get(url, res => {

            res.setEncoding("utf8");
            let body1 = "";
            res.on("data", data => {
                body1 += data;
            });
    
            res.on("end", () => {
    
               // response.end('Finalizou:'+body1+'<br/>');    
               response.end(body1);    
     
            });
    
    
        });



        // response.end('Finalizou:'+body+'<br/>');


    });

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

*/

/*

var net = require('net');
var http = require('http');

net.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it as data from the server
        sock.write('"' + data + '"');
        // Enviado:
        
        

        const url = "http://n1.nortrix.net/apps/vinhecard/script_servidor.php?i="+data;

        http.get(url, res => {

            res.setEncoding("utf8");
            let body1 = "";
            res.on("data", data => {
                body1 += data;
            });
    
            res.on("end", () => {
    
               // response.end('Finalizou:'+body1+'<br/>');    
               response.end(body1);    
     
            });
    
    
        });

        

    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {

        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
        sock.write('Fim:');
        
    });
    
}).listen(5000);

*/


/*

var http = require('http');

var final = 0;

var server = http.createServer(function(request, response) {

    final = 0;

    
    response.writeHead(200, {"Content-Type": "text/plain"});

    let body = [];

    request.on('data', (chunk) => {

      body.push(chunk);

    }).on('end', () => {

        body = Buffer.concat(body).toString();

        // response.write('Chegou no BODY : '+body+'<br/>');
        
        const url = "http://n1.nortrix.net/apps/vinhecard/script_servidor.php?i="+body;

        http.get(url, res => {

            res.setEncoding("utf8");
            let body1 = "";
            res.on("data", data => {
                body1 += data;
            });
    
            res.on("end", () => {
    
               // response.end('Finalizou:'+body1+'<br/>');    
               response.end(body1);    
     
            });
    
    
        });



        // response.end('Finalizou:'+body+'<br/>');


    });

    */

    /*

    http.get(url, res => {

        console.log("Chegou no GET", port);
        response.write('Chegou no GET <br/>');

        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });

        res.on("end", () => {

            console.log("Chegou no END", port);

            response.write('Chegou no GET <br/>');
            response.end('Finalizou:'+body+'<br/>');


            //

            // response.write('Chegou no END <br/>');

            //

            //  body = JSON.parse(body);
            // response.writeHead(200, {"Content-Type": "text/plain"});
            // response.end("Resposta: "+body.results[0].formatted_address);



        });


    });

    */

    // response.writeHead(200, {"Content-Type": "text/plain"});
    // response.end("Hello World 5");


    /*


    http.get(url, res => {



        res.setEncoding("utf8");
        let body = "";

        res.on("data", data => {
            body += data;
        });

        console.log("Chegou no ON", port);

        res.on("end", () => {

            body = JSON.parse(body);


            console.log(
                `City: ${body.results[0].formatted_address} -`,
                `Latitude: ${body.results[0].geometry.location.lat} -`,
                `Longitude: ${body.results[0].geometry.location.lng}`
             );


            // response.writeHead(200, {"Content-Type": "text/plain"});
            // response.end("Hello World : "+body.results[0].formatted_address);

        });


    });

    // console.log('Chegou no fim')

    */

/*

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

*/
