
// Set aceita primitivos, string e objetos
// Mesmo estando com valores repetidos, o Set imprimi valores únicos.
let mySet = new Set(['Dacio', 'Wal', 'Isaac', 'Isaac'])

console.log(mySet)
mySet.add('Vera')
console.log(mySet)

// Deletar elementos
mySet.delete('Vera')

// Retornar boolean se existir o elemento
console.log(mySet.has('Isaac'))
console.log(mySet.has('Vera'))


let it = mySet.values()
//console.log(it.next())


for (nome of it) {
	console.log(nome)
} 
