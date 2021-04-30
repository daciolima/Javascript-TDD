
// Exemplo de Generator com ajax. Seguindo um fluxo.

function ajax(url) {
	fetch(url)
		.then(data => data.json())
		.then(data => dados.next(data))
}

function* genAjax() {
	console.log('Buscando post...')
	const posts = yield ajax('https://willianjusten.com.br/search.json');
	console.log(posts)  

	console.log('Buscando Github...')
	const github = yield ajax('https://api.github.com/users/daciolima');
	console.log(github) 
}


const dados = genAjax();
dados.next()