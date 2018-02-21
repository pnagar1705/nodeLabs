var fs = require('fs');

fs.writeFile('createdFromFSModule.txt', "This is the file created using writeFile function offered via FS module", function(err){
	if(err) throw err;
	console.log(err);
})