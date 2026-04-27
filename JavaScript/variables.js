/*
Los nombres de las variables pueden comenzar por letras, $ o guión bajo
*/

//var: casi no se usa
var hola_mundo = 'Hola Mundo con var';
console.log(hola_mundo);

//let: se puede reasignar, pero no redeclarar
let saludo;
saludo = 'Hola'
console.log(saludo);
saludo = 'Hola Mundo';
console.log(saludo);

//const: su valor no se puede cambiar, ni redeclarar
const PI = 3.14;
console.log(PI);
//PI = 3.1416; // Esto generará un error, no se puede reasignar una constante

//ejemplo con let y const
const a = 5;
const b = 10;
let total
total = a + b;
console.log(total); 

/*Se usa let para el ambito de bloque, es decir, van entre {} y solo se pueden
acceder a estas variables dentro del bloque. Estas variables se pueden incializar sin
tener un valor, y son mutables. Es recomendable para usar dentro de bucles pero no 
a lo largo del codigo.

const tambien se usa en el ambito de bloque. Estas variables se deben inicializar con un valor,
y no son mutables. Se recomienda para que el codigo sea mas legible, y permite 
cambiar propiedades del objeto. Tambien se recomienda para un nuevo objeto, una nueva
funcion, nuevo array o una expresion regular
*/
