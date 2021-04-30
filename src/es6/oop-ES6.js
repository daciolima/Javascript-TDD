// Herança Prototipal ES6
class Animal {
	
	// Constructor
	constructor(tipo, som) {
		this.tipo = tipo;
		this.som = som;
	}


	// Metodo comum
	hello() {
		console.log(`${this.som} - Eu sou um ${this.tipo}`);
	};

	// Metodo Static
	static info() {
		console.log('Este é um retorno de um método Static')
	};

	// getter and setter
	get name() {
		console.log('Este é meu cachorro')
	}

	set nickname(nick) {
		this.nick = nick
	}
}

const dog = new Animal('cachorro', 'late');
const cat = new Animal('gato', 'mia');

dog.hello()
cat.hello()
Animal.info()
dog.name;
dog.nickname = 'Lulu';
console.log(dog.nick)


// Classe usando extends
class Reptil extends Animal {

	constructor(tipo, som, comportamento) {
		super(tipo, som)
		this.comportamento = comportamento;
	}

	acao() {
		console.log(`Eu sou um ${this.tipo}, e faço ${this.som}. Meu comportamento é ${this.comportamento}`)
	}
}

const jacare = new Animal('jacare', 'grosno', 'nado')
jacare.hello()

const cobra = new Reptil('cobra', 'grosno', 'rastejar')
cobra.acao()