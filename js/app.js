let color1 = '#B4FC45';
let color2 = '#93DE1F';
let color3 = '#7BB520';
let color4 = '#5B8122';
let color5 = '#405027';
let color6 = '#1E2710';

let int1 = 10;
let int2 = 50;
let int3 = 100;
let int4 = 200;
let int5 = 400;
let int6 = 800;

//https://gist.github.com/johnvilsack/ea991a2645c53209fd4e

function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
	var allTextLines = csv.split(/\r\n|\n/);
	var lines = [];
	while (allTextLines.length) {
		lines.push(allTextLines.shift().split(','));
	}
//	console.log(lines);
//	drawOutput(lines);
	let lolo = separationValues(lines);
	intervals(lolo);
}

const separationValues = (arrayLines) => {
	let result = {}
	
	for (let i = 0; i < arrayLines.length; i++) {
		let line = arrayLines[i].toString();
		arrayLines[i] = line.split(';');
	}
	return arrayLines;
}

const intervals = (optArray) => {
	
	for (let i = 0; i < optArray.length; i++) {
		
		if (optArray[i][1] >= 0 && optArray[i][1] <= int1) {
			
			console.log(`estamos 0-${int1}`);
			drawMap(optArray[i][0], color1);
			
		} else if (optArray[i][1] > int1 && optArray[i][1] <= int2) {
			
			console.log(`estamos ${int1}-${int2}`);
			drawMap(optArray[i][0], color2);
			
		} else if (optArray[i][1] > int2 && optArray[i][1] <= int3) {
			
			console.log(`estamos ${int2}-${int3}`);
			drawMap(optArray[i][0], color3);
			
		} else if (optArray[i][1] > int3 && optArray[i][1] <= int4) {
			
			console.log(`estamos ${int3}-${int4}`);
			drawMap(optArray[i][0], color4);
			
		} else if (optArray[i][1] > int4 && optArray[i][1] <= int5) {
			
			console.log(`estamos ${int4}-${int5}`);
			drawMap(optArray[i][0], color5);
			
		} else if (optArray[i][1] > int5 && optArray[i][1] <= int6) {
			
			console.log(`estamos ${int5}-${int6}`);
			drawMap(optArray[i][0], color6);
			
		}
	}
}

const drawMap = (ccaa, color) => {
	let obj = document.getElementById(ccaa)
	obj.setAttribute('fill', color);
}