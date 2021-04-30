const texto = 'Dacio Lima' // Iterable

var it = texto[Symbol.iterator]() // Iterator

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

for (letra of texto) {
	console.log(letra);
	if (letra === 'o') {
		break;
	} 
}