async function userGets() {
	const dacio = fetch('https://api.github.com/users/daciolima').then(r => r.json())
	const willian = fetch('https://willianjusten.com.br/search.json').then(r => r.json())


	const promisses = await Promise.all([dacio, willian])
	console.log(promisses)
}

userGets()



async function userGets2(users) {
	const promisses = users.map(user => fetch(`https://api.github.com/users/${user}`).then(r => r.json()))


	const pessoa = await Promise.all(promisses)
	console.log(pessoa.map(p => p.name))
}

userGets2(['daciolima'])