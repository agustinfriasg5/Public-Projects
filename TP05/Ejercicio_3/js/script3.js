//NOMBRE CAMBIA
let nombreAlumno = document.getElementById('nombrealumno');

let nom = document.getElementById('nombre');

nom.addEventListener('input', nombre);

function nombre () {
	nombreAlumno.textContent = nom.value;
}

 // FECHA CAMBIA

let fechaJs = document.getElementById('fechanueva');

let fechaVieja = document.getElementById('fecha');

fechaVieja.addEventListener('input', fechaAct);

function fechaAct () {
	fechaJs.textContent = fechaVieja.value;
}