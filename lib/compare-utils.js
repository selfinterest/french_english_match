var utils = {};

var isFrenchPattern = /Fr\d{4}/;

utils.isThisFileFrench = function(filename){
	var test = isFrenchPattern.test(filename);
	return test;
}

var captureNamePattern = /(.+\d{4})Fr(.*)/;

utils.areTheseFilesAFrenchEnglishPair = function(file1, file2){
	var files = {
		file1: null,
		file2: null
	}
	
	
	if(utils.isThisFileFrench(file1)) {
		files.file1 = "french";
	} else {
		files.file1 = "english";
	}
	
	if(utils.isThisFileFrench(file2)) {
		files.file2 = "french";
	} else {
		files.file2 = "english";
	}

	if(files.file1 === files.file2) return false;

	return true;
}


var captureEnglishNamePattern = /(.+)(\d{4})(.*)/;

utils.filesMatch = function(file1, file2){
	if(!utils.areTheseFilesAFrenchEnglishPair(file1, file2)) return false;
	//We have to basically find the english file and convert it to French
	var english, french;
	
	if(utils.isThisFileFrench(file1)) {
		french = file1;
		english = file2;
	}
	
	if(utils.isThisFileFrench(file2)) {
		french = file2;
		english = file1;
	}

	if(!english || !french) throw new Error("Something has gone wrong.");

	var matches = english.match(captureEnglishNamePattern);
	if(!matches) return false;
	//construct a french name
	var frenchName = matches[1] + "Fr" + matches[2] + matches[3];
	if(frenchName == french) return true;
	return false;



}
module.exports = utils;

