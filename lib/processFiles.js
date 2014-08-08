var path = require("path"), utils = require("./compare-utils.js");

function ProcessFiles(files){
	this.pairs = {};
	this.filenamesOnly = files.map(function(file){
		return path.basename(file, '.pdf');
	});
}

ProcessFiles.prototype.process = function(){
	this.filenamesOnly.forEach(function(filename){
		this.filenamesOnly.forEach(function(filename2){
			var pair = utils.filesMatch(filename, filename2);
			if(pair) {
				this.registerPair(filename, filename2);
			}
		}.bind(this));
	}.bind(this));
}

ProcessFiles.prototype.registerPair = function(file1, file2){
	var english;
	if(utils.isThisFileFrench(file1)){
		english = file2;
	} else {
		english = file1;
	}
	if(this.pairs[english]) return; //already registered
	this.pairs[english] = [file1, file2];
}

module.exports = ProcessFiles;