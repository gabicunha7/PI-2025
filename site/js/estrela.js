
document.addEventListener('click', function(e){
	var estrelas = e.target.parentElement.getElementsByClassName('star-icon');
	estrelas = Array.from(estrelas);
	var classeEstrela = e.target.classList;

	if(!classeEstrela.contains('ativo') && classeEstrela.contains('star-icon')){
		estrelas.forEach(function(estrela){
			estrela.classList.remove('ativo');
		});
		classeEstrela.add('ativo');
		console.log(e.target.getAttribute('data-avaliar'));
	}
})
