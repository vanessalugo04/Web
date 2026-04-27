//concatenacion

let nombre = 'Vanessa';
let saludo = 'Hola ' + nombre + '!';
console.log(saludo);
console.log('Tipo de dato de saludo: ' + typeof saludo);

//longitud
console.log('Longitud de saludo: ' + saludo.length);

//mayusculas y minusculas
console.log('Saludo en mayusculas: ' + saludo.toUpperCase());
console.log('Saludo en minusculas: ' + saludo.toLowerCase());

//acceso a un caracter
console.log('Primer caracter de saludo: ' + saludo[0]);
console.log('Ultimo caracter de saludo: ' + saludo[saludo.length - 1]);

//index
console.log('Indice de la letra "o" en saludo: ' + saludo.indexOf('o'));

//reemplazo
console.log('Saludo reemplazando "Hola" por "Adios": ' + saludo.replace('Hola', 'Adios')); //reemplaza hola por adios

//subcadena
console.log('Subcadena de saludo desde el indice 5: ' + saludo.substring(5));
console.log('Subcadena de saludo desde el indice 5 hasta el 10: ' + saludo.substring(5, 10));

//inclusión
console.log('¿Saludo incluye "Vanessa"? ' + saludo.includes('Vanessa'));

//slicing
console.log('Saludo con slicing desde el indice 0 hasta el 5: ' + saludo.slice(0, 5));

//template literals
let mensaje = `Hola, soy ${nombre}
este es mi curso de JavaScript`
console.log(mensaje);
