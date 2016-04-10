var fs = require('fs');
var chalk = require('chalk');

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data){
	var kratzer=JSON.parse(data.toString());
		kratzer.wolkenkratzer.sort(function(a,b){
		return a.hoehe > b.hoehe;
   });
fs.writeFile(__dirname+"/wolkenkratzer_sortiert.json", JSON.stringify(kratzer), function(err) {console.log("Gesichert!")});
	for (var i=0; i<kratzer.wolkenkratzer.length; i++) {
		console.log(chalk.blue("Name: ")+chalk.yellow(kratzer.wolkenkratzer[i].name));
		console.log(chalk.magenta("Stadt: ")+chalk.green(kratzer.wolkenkratzer[i].stadt));
		console.log(chalk.cyan("Hoehe: ")+chalk.gray(kratzer.wolkenkratzer[i].hoehe));
		console.log("----------------");
	};
});



