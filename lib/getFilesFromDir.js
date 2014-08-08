var fs = require("fs");

function GetFilesFromDir(dir){
	var directory = fs.readdirSync(dir);
	this.files = directory;
}

module.exports = GetFilesFromDir;