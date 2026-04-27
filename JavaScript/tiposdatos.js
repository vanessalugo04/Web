/*
string: Texto enre comillas
int: numero matematico
bigint: numeros grandes
boolean: un valor que representa verdadero o falso
object: coleccion de pares clave-valor
undefined: variable primitiva sin valor asignado
null: valor primmitivo que representa ausencia de valor
symbol: identificador unico e inmutable
*/

//string
const nombre = 'vane'
console.log(nombre);

//int
const edad = 25;
console.log(edad);

//bigint
const numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande);
const otroNumeroGrande = BigInt('123456789012345678901234567890');
console.log(otroNumeroGrande);

//boolean
const esMayorDeEdad = true;
console.log(esMayorDeEdad);

//objeto
const persona = {
    nombre: 'vane',
    edad: 25,
    esMayorDeEdad: true
}
console.log(persona);

console.log(persona.nombre); //acceder a una propiedad del objeto
console.log(persona['edad']); //otra forma de acceder a una propiedad del objeto
console.log(typeof persona); //tipo de dato del objeto
console.log(typeof persona.nombre); //tipo de dato de una propiedad del objetos


persona.nombre = 'vanessa'; //se puede cambiar el valor de una propiedad de un objeto declarado con const
console.log(persona);

//undefined
let x;
console.log(x);

//null
const y = null;
console.log(y);

//symbol
const simbolo = Symbol('mi simbolo');
console.log(simbolo);

//arreglo
const carros = ['ford', 'chevrolet', 'toyota'];
console.log(carros);
carros.push('honda'); //se puede agregar un nuevo elemento a un arreglo declarado
console.log('Carros actualizados: ' + carros);


//date 
const fecha = new Date('2026-04-26');
console.log(fecha);
console.log('Fecha actual: ' + new Date());