var FilesFromDir = require("../lib/getFilesFromDir.js");

describe("Get files from directory", function(){
	it("should be able to get a list of files from the directory", function(){
		var filesFromDir = new FilesFromDir("./files");
		expect(filesFromDir.files).toBeDefined();
		console.log(filesFromDir);
		expect(Array.isArray(filesFromDir.files)).toBe(true);
	});
});