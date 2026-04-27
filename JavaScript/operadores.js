/* operadores
asignacion: =
suma: +
multiplicacion: *
comparacion: >
*/

// asignacion
let a = 1;
console.log('valor de a: ' + a);

//suma
let b = 2;
console.log('valor de b: ' + b);
let c = a + b;
console.log('valor de la suma: '+ c);

//multiplicacion
let d = a * b;
console.log('valor de la multiplicacion: ' + d);

//comparacion
let e = a > b;
console.log('valor de la comparacion a > b: ' + e);

//otros operadores

//resta
console.log('valor de la resta: ' + (a - b));

//division
console.log('valor de la division a/b' + (a / b));

//modulo
console.log('valor del modulo de a % b' + (a % b));

//exponente
console.log('valor del exponente a^b: ' + (a ** b));

//operadores logicos
//and
console.log('valor del operador logico and (a y b son mayores que 0?): ' + (a > 0 && b > 0));
//or
console.log('valor del operador logico or (a es mayor que 0 o b es menor que 0): ' + (a > 0 || b < 0));
//not
console.log('valor del operador logico not (a no es mayor que 0): ' + !(a > 0));

