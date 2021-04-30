let a = 2;
let b = 4;
let c = 120;

function soma() {
  return a + b + c;
}

//console.log(soma());


const arr = ['Dacio', 'lima', 41, 'Joao Pessoa']


//const [name, lastname, age, city] = arr 
//console.log(name)
//console.log(lastname)
//console.log(age)
//console.log(city)



let y = 250;
let z = 32;

console.log("y:", y);
console.log("z:", z);

[z, y] = [y, z]

console.log("y:", y);
console.log("z:", z);

let front = ['react', 'vue', 'angular']; 
let back = ['python', 'ruby', 'nodejs'];

console.log(...front);

console.log(...'dacioLima');
const nome = [...'dacioLima'];
console.log(nome);

let fullStack = [...front, 'RxJS', ...back]
console.log(fullStack)



function produto(pao, queijo, verdura) {
	console.log(`Esse sanduiche é que gosto ${pao} - ${queijo} e ${verdura} `)
}

const ingredientes = ['bola', 'mussarela', 'tomate e cebola']

produto(...ingredientes)


function mutiplicar(mult, ...args) {
	return args.map(ter => ter * mult);
}

console.log(mutiplicar(2, 4, 6, 8))






