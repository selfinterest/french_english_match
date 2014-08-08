describe("comparison utilities", function(){
	var util;
	beforeEach(function(){
		util = require("../lib/compare-utils.js");
	});

	it("should be able to tell if a file is French from the filename", function(){
		var filename = "test1989May";
		
		var isFrench = util.isThisFileFrench(filename);
		expect(isFrench).toBe(false);

		isFrench = util.isThisFileFrench("testFr1989May");
		expect(isFrench).toBe(true);
	});

	it("should be able to compare a file to another file to see if they are a french english pair", function(){
		var english = "test1989May";
		var french = "testFr1989May";

		var isFrenchEnglishPair = util.areTheseFilesAFrenchEnglishPair(english, french);
		expect(isFrenchEnglishPair).toBe(true);
		english = "testFr1989May";
		french = "testFr2001June";
		isFrenchEnglishPair = util.areTheseFilesAFrenchEnglishPair(english, french);
		expect(isFrenchEnglishPair).toBe(false);

		english = "test1989May";
		french = "test2001May";
		isFrenchEnglishPair = util.areTheseFilesAFrenchEnglishPair(english, french);
		expect(isFrenchEnglishPair).toBe(false);

	});

	it("should be able to compare two files to see if they are a MATCHING pair", function(){
		var english = "test1989May";
		var french = "testFr1989May";
		var isMatchingFrenchEnglishPair = util.filesMatch(english, french);
		expect(isMatchingFrenchEnglishPair).toBe(true);
		english = "test1989May";
		french = "testFr2001May";
		isMatchingFrenchEnglishPair = util.filesMatch(english, french);
		expect(isMatchingFrenchEnglishPair).toBe(false);

		//How about a non French/English pair?
		var french1 = "testFr1989May";
		var french2 = "testFr2001May";
		isMatchingFrenchEnglishPair = util.filesMatch(french1, french2);
		expect(isMatchingFrenchEnglishPair).toBe(false);


		var english1 = "test1989May";
		var english2 = "test2001May";
		isMatchingFrenchEnglishPair = util.filesMatch(english1, english2);
		expect(isMatchingFrenchEnglishPair).toBe(false);

		//What if given a malformed filename?
		var malformed1 = "blahblahblah";
		var malformed2 = "blahblahblah";
		isMatchingFrenchEnglishPair = util.filesMatch(malformed1, malformed2);
		expect(isMatchingFrenchEnglishPair).toBe(false);
	});


})


