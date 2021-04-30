
// entries varre um objeto retornando chave e valor

const animals = {
	cachorro: 3,
	gato: 4,
	coelho: 7
}

const animalMap = new Map(Object.entries(animals))
console.log(animals)

console.log(animalMap.size)
console.log(animalMap.has('cachorro'))
console.log(animalMap.get('gato'))


// values retorna array com valores
console.log("Total de animais: ", Object.values(animals).reduce((a, b) => a + b) )
