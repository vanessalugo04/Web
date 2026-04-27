/* Un array es un tipo de objeto  diseñado para almacenar colecciones de datos.
Es una lista de elementos, los elementos se ordenan segun su indice, tienen 
tamaño dinamico, y pueden almacenar diferentes tipos de datos. */

let array = [1, 'hola', true, null, undefined, {nombre: 'Vane'}, [1, 2, 3]];
console.log(array);

let array2 = new Array(1, 2, 3);
console.log(array2);

const arreglo = [5, 6, 7, 8, 9];
console.log(arreglo[0]); //accede al primer elemento del array
console.log(arreglo[4]); //accede al quinto elemento del array

//metodos comunes
arreglo.push(10); //agrega un elemento al final del array
console.log(arreglo);
arreglo.unshift(4); //agrega un elemento al inicio del array
arreglo.unshift(10, 11, 12); //agrega varios elementos al inicio del array;
console.log(arreglo);
arreglo.pop(); //elimina el ultimo elemento del array
arreglo.shift(); //elimina el primer elemento del array
console.log(arreglo);
arreglo.splice(1, 2); //elimina elementos a partir del indice 1, elimina 2 elementos
console.log(arreglo);
console.log(arreglo.length); //devuelve la cantidad de elementos del array
arreglo.concat([11, 12, 13]); //concatena el array con otro array, devuelve un nuevo array
console.log(arreglo);
arreglo = [] //vaciar el array
