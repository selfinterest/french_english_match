function FindPairs(){


}

FindPairs.prototype.setFileList = function(fileList){
	this.fileList = fileList;
}

FindPairs.prototype.setEnglishFile = function(englishFile){
	this.englishFile = englishFile;
}

FindPairs.prototype.findFrenchFile = function(){
	if(!this.fileList || !this.englishFile) throw new Error("Both english file and file list must be set.");
}

module.exports = FindPairs;