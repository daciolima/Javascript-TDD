function* genNames() {
	console.log('Chamando primeiro nome: ');
	yield "Dacio",
	console.log('Chamando segundo nome: ');
	yield "Lima",
	console.log('Chamando adjetivo: ');
	yield "É o cara"
}


const adjetivos = genNames()
console.log(adjetivos)

console.log(adjetivos.next())
console.log(adjetivos.next())
console.log(adjetivos.next())