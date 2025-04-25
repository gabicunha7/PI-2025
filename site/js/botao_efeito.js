var btn = document.querySelector('.btn'); //pegar a classe que atribui para o link botão

btn.onmousemove = function(e){
	var x = e.pageX - btn.offsetLeft; // guardar a posição do mouse eixo x horizontal
	var y = e.pageY - btn.offsetTop; // guardar a posição do mouse eixo y vertical

	btn.style.setProperty('--eixox', x + 'px') // usar css no js, variavel no css 0-0
	btn.style.setProperty('--eixoy', y + 'px')
}; // movimento do mouse