describe("Process file module", function(){
	
	var ProcessFiles, files; 
	beforeEach(function(){
		ProcessFiles = require("../lib/processFiles");
	});

	it("should, given a list of files, set an array of filenames without extension or path", function(){
		var files = [
			"bob.pdf",
			"/something/joe.pdf"
		];
		var process = new ProcessFiles(files);
		expect(Array.isArray(process.filenamesOnly)).toBe(true);
		expect(process.filenamesOnly.length).toBe(2);
		expect(process.filenamesOnly[0]).toBe("bob");
		expect(process.filenamesOnly[1]).toBe("joe");		
	});

	describe("Processing with a list with pairs", function(){
		var files, processFiles;
		beforeEach(function(){
			files = [
				"Report1989May.pdf",
				"ReportFr1989May.pdf",
				"Nothing.pdf"
			];
			processFiles = new ProcessFiles(files);
		});

		it("should be able to find the stupid pair", function(){
			processFiles.process();
			console.log(processFiles.pairs);
			expect(processFiles.pairs).toBeDefined();
			var pairs = processFiles.pairs;
			expect(Array.isArray(pairs["Report1989May"])).toBe(true);
			//expect(Array.isArray(processFiles.pairs["Report1989May"])).toBe(true);
		});
	});

	describe("Processing a list with no pairs", function(){
		var files, processFiles;
		beforeEach(function(){
			files = [
				"Report1989May.pdf",
				"Nothing.pdf",
				"ReportFr2000May.pdf"
			];
			processFiles = new ProcessFiles(files);
			var pairs = processFiles.pairs;
			expect(pairs).toEqual({});	
		})
	});
})