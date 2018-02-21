var fs = require('fs');

fs.appendFile('createdFromFSModule.txt', "appendFile function offered via FS module is used to update the existing file", function(err){
	if(err) throw err;
	console.log(err);
})