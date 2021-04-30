// WeakSet só aceita objetos unicos
let obj1 = {
	nome: 'Dacio',
	idade: 41
}

let obj2 = {
	nome: 'Wal',
	idade: 39
}


let ws = new WeakSet([obj1, obj2])
console.log(ws)