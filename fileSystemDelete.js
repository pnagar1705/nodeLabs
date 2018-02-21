var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) {
	  console.log(err);
  }//throw err;
  console.log('File deleted!');
}); 