var http = require('http');

var final = 0;

var server = http.createServer(function(request, response) {

    final = 0;

    const url = "http://n1.nortrix.net/apps/vinhecard/script_servidor.php";

    response.writeHead(200, {"Content-Type": "text/plain"});
            

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
   

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
