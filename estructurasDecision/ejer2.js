const prompt = require("prompt-sync")()

const numero = prompt("Ingrese un número: ")

if((numero>=10 && numero<=99) || (numero>=-99 && numero<=-10)){
    console.log(`El número ${numero} tiene dos digitos`)
}else{
    console.log(`El número ${numero} no tiene dos digitos`)
}