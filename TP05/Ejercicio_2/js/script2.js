// Función Sumar
const suma = document.getElementById('suma'); 

suma.addEventListener('click', sumar);

function sumar() {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let result = num2 + num1;
    window.alert(result);
}

// Función Restar 
 let resta = document.getElementById('resta')
 
 resta.addEventListener('click', () => {

	let num1 = parseInt(document.getElementById('num1').value);
	let num2 = parseInt(document.getElementById('num2').value);
	let result = num1 - num2;
	window.alert(result);
 })
