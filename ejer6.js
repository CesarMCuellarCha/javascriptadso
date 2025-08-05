/**
 * Leer dos números y hacer operaciones básicas
 */

const prompt = require("prompt-sync")()

const numero1 = parseFloat(prompt("Ingrese un Número: "))
const numero2= parseFloat(prompt("Ingrese otro Número: "))
const suma = numero1 + numero2
console.log(`La suma de ${numero1} + ${numero2} es ${suma}`)

const resta = numero1-numero2
console.log(`La resta de ${numero1} - ${numero2} es ${resta}`)

const multiplicacion = numero1*numero2
console.log(`La multiplicación de ${numero1} * ${numero2} es ${multiplicacion}`)

const division = Math.floor(numero1/numero2)
console.log(`La division de ${numero1} / ${numero2} es ${division}`)

const exponente = (numero1 ** numero2).toFixed(2)
console.log(`El resultado de ${numero1}  elevado a ${numero2} es ${exponente}`)