// WeakSet só aceita objetos unicos
let obj1 = {
	nome: 'Dacio',
	idade: 41
}

let obj2 = {
	nome: 'Wal',
	idade: 39
}

let wm = new WeakMap()

wm.set(obj1, 'Info Dacio')
wm.set(obj2, 'Info Wal')

console.log(wm)