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

let arrayData = [
	["andalucia", "0"],
	["aragon", "0"],
	["asturias", "0"],
	["baleares", "0"],
	["canarias", "0"],
	["cantabria", "0"],
	["castilla-la-mancha", "0"],
	["castilla-y-leon", "0"],
	["catalunya", "0"],
	["ceuta", "0"],
	["valencia", "0"],
	["extremadura", "0"],
	["galicia", "0"],
	["madrid", "0"],
	["melilla", "0"],
	["murcia", "0"],
	["navarra", "0"],
	["pais-vasco", "0"],
	["la-rioja", "0"]
	];
	
const legend = (int1, int2, int3, int4, int5, int6) => {
	
	let colorPalet = ['', color1, color2, color3, color4, color5, color6];		
	let int = ['', int1, int2, int3, int4, int5, int6];	
	
	console.log(int);
		
	for (let i = 1; i < 7; i++) {
		let color = document.getElementById(`color${i}`).setAttribute('fill', colorPalet[i]);
		let interval = document.getElementsByClassName(`int${i}`);
		for (let j = 0; j < interval.length; j++) {
			interval[j].innerHTML = int[i].toString();
		}
	}
}

const customIntervals = (int, valor) =>{
	//console.log(int);
	//console.log(valor);
	
	switch (int) {
		case 1:
			int1 = Number(valor);
			break;
		case 2:
			int2 = Number(valor);
			break;
		case 3:
			int3 = Number(valor);
			break;
		case 4:
			int4 = Number(valor);
			break;
		case 5:
			int5 = Number(valor);
			break;
		case 6:
			int6 = Number(valor);
			break;
		default:
			break;
	}
	legend(int1, int2, int3, int4, int5, int6);
	drawDataInMap(arrayData);
}

const drawDataInMap = (optArray) => {
	
	for (let i = 0; i < optArray.length; i++) {
		
		if (optArray[i][1] >= 0 && optArray[i][1] <= int1) {
			drawMap(optArray[i][0], color1);
			
		} else if (optArray[i][1] > int1 && optArray[i][1] <= int2) {

			drawMap(optArray[i][0], color2);
			
		} else if (optArray[i][1] > int2 && optArray[i][1] <= int3) {
			drawMap(optArray[i][0], color3);
			
		} else if (optArray[i][1] > int3 && optArray[i][1] <= int4) {
			drawMap(optArray[i][0], color4);
			
		} else if (optArray[i][1] > int4 && optArray[i][1] <= int5) {
			drawMap(optArray[i][0], color5);
			
		} else if (optArray[i][1] > int5 && optArray[i][1] <= int6) {
			drawMap(optArray[i][0], color6);
			
		}
	}
}

const drawMap = (ccaa, color) => {
	let obj = document.getElementById(ccaa)
	obj.setAttribute('fill', color);
}

// ---------------------------fuente: https://gist.github.com/johnvilsack/ea991a2645c53209fd4e
//Toma el CSV en el input upload file y genera un array bidimensional con los datos

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
//	drawOutput(lines);
	arrayData = separationValues(lines); //custom
	drawDataInMap(arrayData); //custom
}


//custom: Añado función para separar el array en dos dimensiones.
const separationValues = (arrayLines) => {
	let result = {}
	
	for (let i = 0; i < arrayLines.length; i++) {
		let line = arrayLines[i].toString();
		arrayLines[i] = line.split(';');
	}
	return arrayLines;
	console.log(arrayLines);
}

//--------------------------------------------------