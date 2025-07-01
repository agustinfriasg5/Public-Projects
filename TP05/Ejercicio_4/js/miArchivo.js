let boton=window.document.getElementById('boton');

boton.addEventListener('click', calcular);

function calcular ()
{
		let monto=parseInt(document.getElementById("precio").value);
		let cuota=parseInt(document.getElementById("cuota").value);
		
		console.log(precio);
		console.log(cuota);
	
		let result = monto/cuota;
		
		document.getElementById("valores").innerHTML="Valor de cuota: $"+result;
}