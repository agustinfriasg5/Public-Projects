let lista = document.getElementById('listaIdiomas');
lista.addEventListener('change', cambiar);

function cambiar () {
		let idiomaElegido = listaIdiomas.value 
		switch (idiomaElegido) {
		case "en": 
		document.getElementById('lbl-usuario').innerHTML = 'User';
		document.getElementById('lbl-pass').innerHTML = 'Password';
		document.getElementById('lbl-pass2').innerHTML = 'Repeat Password';
		document.getElementById('lbl-lista').innerHTML = 'Language';
		document.getElementById('titulo').innerHTML = 'Register';
		document.getElementById('lbl-acepto').innerHTML = 'Accept all terms and conditions';
		document.getElementById('boton').value = 'Submit';
		break;
		
		case "es":
		document.getElementById('lbl-usuario').innerHTML = 'Usuario';
		document.getElementById('lbl-pass').innerHTML = 'Contraseña';
		document.getElementById('lbl-pass2').innerHTML = 'Repetir Contraseña';
		document.getElementById('lbl-lista').innerHTML = 'Lenguaje';
		document.getElementById('lbl-acepto').innerHTML = 'Acepta términos y condiciones';
		document.getElementById('titulo').innerHTML = 'Registro';
		document.getElementById('boton').value = 'Enviar';
		break;
		
		case "it":
		document.getElementById('lbl-usuario').innerHTML = 'utente';
		document.getElementById('lbl-pass').innerHTML = 'password';
		document.getElementById('lbl-pass2').innerHTML = 'Ripeti la password';
		document.getElementById('lbl-lista').innerHTML = 'lingua';
		document.getElementById('lbl-acepto').innerHTML = 'accettare termini e condizioni';
		document.getElementById('titulo').innerHTML = 'documentazione';
		document.getElementById('boton').value = 'Inviare';
		break;
}}

function check (event) {
	event.preventDefault();
let pass = document.getElementById('pass').value;
let pass2 = document.getElementById('pass2').value;
let acepto = document.getElementById('acepto').checked;
let mensaje = document.getElementById('mensaje');

if (pass === pass2 && acepto) {
	document.getElementById('idiomasform').submit();
} else if (pass !== pass2 && acepto) {
	mensaje.innerHTML = 'Las contraseñas no coinciden'; 
} else if (pass === pass2 && !acepto) {
	mensaje.innerHTML = 'No acepta terminos y condiciones';
} else {
	mensaje.innerHTML = 'Las contraseñas no coinciden y No acepta terminos y condiciones';
}
}

document.getElementById('idiomasform').addEventListener('submit', check);