var fs = require("fs");
var readStream = fs.createReadStream('./createdFromFSModule.txt');

readStream.on('open', function() {
	console.log("File was opened");
});