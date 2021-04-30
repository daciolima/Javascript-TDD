
// Intro Promises

var defer = new Promise((resolve, reject) => {
	setTimeout(() => {
		if(true) {
			resolve('Está trabalhando');
		} else {
			reject('Error')
		}
	}, 2000)
});


defer
	.then((data) => {
		console.log(data);
		return 'foo';
	})
	.then((data) => console.log(data))
	.catch((err) => console.log(err))


// Promises Exemplo real

var posts = fetch('https://willianjusten.com.br/search.json');

// pending
// resolved
// rejected

posts
	.then(data => data.json())
	.then(data => data.map((post) => {
		console.log(post.title)
	}))



// Multiplas Promises
const moedas = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({moeda: 'Real', valor: 1.00 })
	})
})

const paises = new Promise((resolve, reject) => {
	resolve(['Brasil', 'Inglaterra', 'EUA'])
})


// Promise que retorna dados de todas as Promises
Promise
	.all([moedas, paises])
	.then(responses => {console.log(responses)})


// Promise que retorna os objetos da primeira Promise resolvida
Promise
	.race([moedas, paises])
	.then(responses => {console.log(responses)})

