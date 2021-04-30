let pessoa = {
	nome: 'Dacio',
	idade: 41
}

let agente = new Proxy(pessoa, {
	get(target, nome) {
		console.log('Alguem está tentando pegar o nome!');
		return target[nome]
		},

	set(target, nome, value) {
		console.log(`Alguém está tentando mudar o nome de ${target.nome} para ${value}`);
		target[nome] = value;
	}
})



console.log(pessoa) // Objeto Real
console.log(pessoa.nome)
console.log(agente) // Objeto proxy
console.log(agente.nome)
console.log(agente.nome = 'Lima')