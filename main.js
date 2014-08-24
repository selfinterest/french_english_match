var optimist = require("optimist");
var argv = optimist.argv;
var dir = argv._;
var path = require("path");
if(dir.length == 0) throw new Error("Directory name must be supplied.");

dir = dir[0];
dir = path.resolve(dir);

var GetFilesFromDir = require("./lib/getFilesFromDir.js");
var getFilesFromDir = new GetFilesFromDir(dir);

var ProcessFiles = require("./lib/processFiles.js");
var processFiles = new ProcessFiles(getFilesFromDir.files);
processFiles.process();
console.log(processFiles.pairs + "\n");


