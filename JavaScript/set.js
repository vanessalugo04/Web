/* set es una coleccion de valores unicos, es decir, cada valor puede aparecer
solo una vez. Pueden ser de cualquier tipo, valores primitivos u objetos. 
*/

let set = new Set(); //crea un nuevo set vacio
let set2 = {} //esto no es un set, es un objeto vacio

console.log(set); //imprime 0 elementos y vacio
console.log(set2);


set = new Set([1, 2, 3, 4, 5]); //crea un nuevo set con los valores del array

console.log(set);

//metodos comunes
set.add(6); //agrega un elemento al set
console.log(set);

console.log(set.delete(3)); //elimina el elemento con valor 3 del set y retorna un booleano
console.log(set);

console.log(set.has(4)); //retorna true si el set contiene el elemento con valor 4, de lo contrario retorna false

console.log(set.size); //retorna la cantidad de elementos del set

console.log(typeof(set)); //imprime object, porque los sets son objetos en JavaScript
let arreglo = Array.from(set); //convierte el set a un array
console.log(arreglo);
console.log(typeof(arreglo)); //imprime object, porque los arrays son objetos en JavaScript

set.add(1); //no agrega el elemento 1 porque ya existe en el set
console.log(set); //imprime el set sin cambios, porque el elemento 1 ya existe en el set