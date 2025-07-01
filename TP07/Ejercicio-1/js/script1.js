let sueldos = [786300, 852630.56, 756250.30, 927650.45, 1253000.75, 950000.50]; 

const diezPorciento = document.getElementById('diez');
const quincePorciento = document.getElementById('quince');
let resultadoPorciento = 0;
let resultadoFinal = 0;
let primerContador = 0;
let segundoContador = 0;



for (let i = 0; i < sueldos.length; i++) {
	resultadoPorciento = sueldos[i] *.10;
	resultadoFinal  = resultadoPorciento + sueldos[i];
	primerContador = primerContador + 1;
	diezPorciento.innerHTML  = diezPorciento.innerHTML + '<p> Sueldo ' + primerContador + ': $' + resultadoFinal.toFixed(2) + '</p>';
}

for (let i = 0; i < sueldos.length; i++) {
	resultadoPorciento = sueldos[i] * .15;
	resultadoFinal  = resultadoPorciento + sueldos[i];
	segundoContador = segundoContador + 1;
	quincePorciento.innerHTML  = quincePorciento.innerHTML + '<p> Sueldo ' + segundoContador + ': $' + resultadoFinal.toFixed(2) + '</p>';
}
