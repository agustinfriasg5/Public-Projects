/* Ejercicio 1.a */
/* El color de fondo de la página debe cambiar cuando se seleccione un color 
en el input color. Para ello cree una función de nombre cambiarColorFondo() donde 
acceda al elemento mediante el id y realice los cambios, además, utilice un listener 
que llame a dicha función. Comente el código justificando el evento elegido.*/

const btnColor=document.getElementById('btncolor');

btncolor.addEventListener('input', cambiarColorFondo);

function cambiarColorFondo ()
{
	const color = btnColor.value
	console.log ("Cambia color del fondo");
	document.body.style.backgroundColor = color;
	
}




/********************************************/

/* Ejercicio 1.b */
/* Modifique el estilo del borde del primer input cuando reciba y pierda el foco. 
Para este ejercicio acceda al elemento mediante un selector CSS (input[type="text"]), 
y nombre a las funciones de la siguiente manera: obtieneFoco() y pierdeFoco(). 
Los cambios de estilos serán los siguientes:
    I.	Cuando reciba el foco, cambiar el CSS de su border a: '0.4em dashed red'
    II.	Cuando pierda el foco, cambiar el borde a:  '0.2em solid green'
 */
let foco = document.querySelector('input[type="text"]');

foco.addEventListener('focus', obtieneFoco);
foco.addEventListener('blur', pierdeFoco);

function obtieneFoco (){
	foco.style.border = '0.4em dashed red';
	console.log ("Obtiene el Foco");
}

function pierdeFoco () {
	foco.style.border = '0.2em solid green';
	console.log ("Pierde el Foco");
}



/*******************************************/

/* Ejercicio 1.c */
/* c.	Implemente el modo oscuro y modo claro con las imágenes del sol y luna que se 
muestran en la página. Note que la imagen del sol está oculta mediante CSS. Con JavaScript 
programe que, al hacer clic en la imagen de la luna, el color de fondo de la página cambie 
a negro, las letras a color blanco y se muestre la imagen del sol. Realice lo opuesto con 
la imagen del sol para volver a como estaba la página normalmente.
*/

let modo_oscuro=document.getElementById ('luna');

modo_oscuro.addEventListener ('click', modoOscuro);

function modoOscuro () {
	document.body.style.backgroundColor = '#000000';
	document.body.style.color = '#FFFFFF';
	modo_oscuro.style.display = 'none';
	modo_claro.style.display = 'block';
	console.log ("Cambia de tema claro a tema oscuro");
}
 let modo_claro=document.getElementById ('sol');
 
 sol.addEventListener ('click', modoClaro);
 
 function modoClaro () {
	document.body.style.backgroundColor = '#FFFFFF';
	document.body.style.color = '#000000';
	modo_claro.style.display = 'none';
	modo_oscuro.style.display = 'block';
	console.log ("Cambia de temas oscuro a tema claro");
 }
