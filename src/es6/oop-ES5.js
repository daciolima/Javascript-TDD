
// Herança Prototipal ES5
// Classe construtiva. Pode-se criar objetos a partir dela
function Animal(tipo, som) {
	this.tipo = tipo;
	this.som = som
}

const cachorro = new Animal('Cachorro', 'late');

console.log(cachorro);
console.log(cachorro.som);

Animal.prototype.hello = function() {
	console.log(`${som} - EU sou um ${tipo}`)
}

const cachorro2 = new Animal('Cachorro2', 'late2');
const gato = new Animal('Gato', 'mia');

console.log(cachorro2);
console.log(cachorro2.som);

console.log(gato);
console.log(gato.som);



