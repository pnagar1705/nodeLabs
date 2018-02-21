var http = require('http');
var dateTime = require('./currentDateTime')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("changed content-type to text/plain to write on a new line \r\n");
    res.write('Hello World Being ran after restarting node! \r\n');
	res.write("The date and time are currently: " + dateTime.currentDateTime());
	res.end();
}).listen(8080);