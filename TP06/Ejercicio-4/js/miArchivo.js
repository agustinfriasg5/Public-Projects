document.getElementById('lista').addEventListener('change', cambiar);
function cambiar () {
	const color = document.getElementById('lista').value;
	const imagen = document.getElementById('producto');
	const precio = document.getElementById('precio');
	
	
	switch (color) {
		
		case 'plata' :
			imagen.src = 'img/plata.webp';
			precio.textContent = '40.000';
			break;
			
		case 'verde' :
			imagen.src = 'img/verde.webp';
			precio.textContent = '45.000';
			break;
			
		case 'azul' :
			imagen.src = 'img/azul.webp';
			precio.textContent = '48.000';
			break;
			
		case 'gris' :
			imagen.src = 'img/gris.webp';
			precio.textContent = '42.000';
			break;
			
		case 'bordo' :
			imagen.src = 'img/bordo.webp';
			precio.textContent = '50.000';
			break;
			
		default:
			imagen.src = '';
			precio.textContent = '';
			break;
} }