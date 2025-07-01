let ojocerrado = document.getElementById('ojo');
let texto = document.getElementById('pass');

ojocerrado.addEventListener('mousedown', cambiar);
ojocerrado.addEventListener('mouseup', cambiar);

function cambiar () {
	if (texto.type == 'password') {
	texto.type = 'text';
	ojocerrado.src = 'img/openeye.png';
	}
	else {
		texto.type = 'password';
		ojocerrado.src = 'img/closeeye.png';
	}
}