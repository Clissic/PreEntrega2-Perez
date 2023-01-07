/* alert("Hola, como estas?") */

// BOOLEAN

/* let varBoolean = true
varBoolean = false */

/* if (true) {
    alert("Es boolean es true")
} */
/* 
let numero = "3"

if (numero == 3) //si numero es igual a 3, muestra por consola el valor de numero
{
    console.log(numero)
}
else {
    console.log("No sirve")
}

console.log("No es igual a 3") */



/* let valorIngresado

valorIngresado = prompt("Ingrese un valor entero")
valorIngresado = parseInt(valorIngresado)

if (valorIngresado % 2 == 0) 
{
    console.log("Es par")
}
else
{
    console.log ("Es impar")
} */



/* let opcion = prompt("1 - Registrar Usuario \n2 - Logear Usuario \n3 - Configuracion \n4 - Salir \nIngrese la opcion:")

opcion = parseInt(opcion)

if (opcion == 1){
    alert("Ingresando al menu registrar usuario...")
}
else if (opcion == 2){
    alert("Ingresando al menu logear usuario...")
}
else if (opcion == 3) {
    alert("Ingresando al menu configuracion...")
}
else if (opcion == 4) {
    alert("Saliendo")
}
else {
    alert("Su opcion es invalida")
} */

//Switch

/* let opcion = prompt("1 - Registrar Usuario \n2 - Logear Usuario \n3 - Configuracion \n4 - Salir \nIngrese la opcion:")

opcion = parseInt(opcion)

switch (opcion) {
    case 1:
        alert("Ingresando al menu registrar usuario...")
        break //el break corta el flujo del switch
    case 2:
        alert("Ingresando al menu logear usuario...")
        break
    case 3:
        alert("Ingresando al menu configuracion...")
        break
    case 4:
        alert("Saliendo")
        break
    default:
        alert("Su opcion es invalida")
} */



// Bucles

// for

// Contador, es una variable que la voy a incremenar siepre en un valor fijo. Tiene que estar inicializado en algun valor

// i = i + 1 -> i++ operador incremento (incrementa en 1)
// i = i - 1 -> i-- operador decremento (decrementa en 1)

/* for (let i = 1 ; i <= 20 ; i++) {
    console.log(i)
} */


// while

/* while (SE CUMPLA UNA CONDICION) {
    VOY A EJECUTAR LAS LINEAS DE CODIGO
    }
    DENTRO DEL WHILE (LINEAS DE CODIGO) tengo que procurar que en algun momento se altere la variable de condicion
*/

/* ACUMULADOR
-> ES UNA VARIABLE QUE INCREMENTA O DECREMENTA EN VALORES VARIBLES (PRECIOS EN UN CARRITO POR EJEMPLO)
-> DEBE ESTAR INICIALIZADA (EN EL CASO DE UNA SUMA EN 0)
*/

/* let suma = 0 //acumulador
let numero

numero = prompt("Ingrese un valor")
numero = parseInt(numero)

while (numero != 0) {
    suma = suma + numero
    numero = prompt("Ingrese un valor")
    numero = parseInt(numero)
}

console.log("La suma es: " + suma) */


//do... while

/* 

do {
    sentencias de codigo
} while (condicion)

*/

// AL MENOS UNA VEZ LA SENTENCIA DE CODIGO QUE ESTA EN EL DO SE EJECUTA A DIFERENCIA DEL WHILE QUE SOLO SE EJECUTA SI SE CUMPLE LA CONDICION

/* let numero1
let total=0 //acumulador

do {
    numero1 = prompt("Ingrese un valor")
    numero1 = parseInt(numero1)
    total = total + numero1
} while (numero1 != 0)

console.log (total) */


// EJERCICIO
/* 
let opcion
do {
    opcion = prompt("1 - Registrar Usuario \n2 - Logear Usuario \n3 - Configuracion \n4 - Salir \nIngrese la opcion:")
    opcion = parseInt(opcion)
    switch (opcion) {
    case 1:
        alert("Ingresando al menu registrar usuario...")
        break //el break corta el flujo del switch
    case 2:
        alert("Ingresando al menu logear usuario...")
        break
    case 3:
        alert("Ingresando al menu configuracion...")
        break
    case 4:
        alert("Saliendo")
        break
    default:
        alert("Su opcion es invalida")
    }
} while (opcion != 4) */

let num1 = parseFloat(prompt("Ingrese el primer valor"))
let num2 = parseFloat(prompt("Ingrese el segundo valor"))
let operacion =prompt("Ingrese la operacion + - / *")

alert(calculadora(num1, num2, operacion))

function calculadora (operando1, operando2, operacion) {
    let resultado = "error"
    switch (operacion) {
    case "+":
        resultado = operando1 + operando2
        break;
    case "-":
        resultado = operando1 - operando2
        break;
    case "/":
        resultado = operando1 / operando2
        break;
    case "*":
        resultado = operando1 * operando2
        break;
    default:
        alert("Operación inválida!")
    }
    return resultado
}


let ur
ur = 1572
parseFloat(ur)

console.log(ur)

function Persona (nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}

const persona1 = new Persona (juan, 20, Cerrito)

