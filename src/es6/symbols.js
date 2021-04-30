// Symbol é um tipo primitivo como Array e String

// Symbol tem identificadores únicos

let foo = Symbol('name')
let bar = Symbol('name')

console.log(foo === bar) 


let obj = {
	[Symbol('name')]: 'Dacio',
	[Symbol('age')]: '41',
	city: 'Joao Pessoa'
}

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj))

const symbols = Object.getOwnPropertySymbols(obj)
console.log(symbols)

const data = symbols.map(sym => obj[sym])
console.log(data)