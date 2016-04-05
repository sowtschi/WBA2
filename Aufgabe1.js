var fs = require('fs');

fs.readFile(__dirname+"/wolkenkratzer.json", function(err, data){
	var kratzer=JSON.parse(data.toString());

	for (var i=0; i<kratzer.wolkenkratzer.length; i++) {
		console.log("Name: "+kratzer.wolkenkratzer[i].name);
		console.log("Stadt: "+kratzer.wolkenkratzer[i].stadt);
		console.log("Hoehe: "+kratzer.wolkenkratzer[i].hoehe);
		console.log("----------------");
	};
});



