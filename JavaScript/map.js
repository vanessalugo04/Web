/* map es una estructura de clave-valor similar a los diccionarios, 
las claves y valores pueden ser de cualquier tipo, y las claves son únicas.
Son iterables y permiten el uso directo de bucles 
*/

let mimap = new Map(); //crea un nuevo map vacio
mimap = new Map([
    ['nombre', 'Vane'], //string
    ['edad', 300], //numero
    ['hobbies', ['programar', 'viajar', 'cocinar']] //array
])

//metodos
mimap.set('profesion', 'desarrolladora'); //agrega un nuevo par clave-valor al map
console.log(mimap);
mimap.set('nombre', 'Vanessa'); //actualiza el valor de la clave 'nombre' a 'Vanessa'
console.log(mimap);

mimap.get('nombre'); //retorna el valor asociado a la clave 'nombre'
console.log(mimap.get('nombre')); //imprime 'Vanessa'
console.log(mimap.get('apellido')); //imprime 300

console.log(mimap.has('edad')); //retorna true si el map contiene la clave 'edad', de lo contrario retorna false

console.log(mimap.size); //retorna la cantidad de pares clave-valor en el map

mimap.delete('hobbies'); //elimina el par clave-valor con la clave 'hobbies' del map
console.log(mimap);

console.log(mimap.keys()); //imprime un iterador con las claves del maps
console.log(mimap.values()); //imprime un iterador con los valores del map
console.log(mimap.entries()); //imprime un iterador con los pares clave-valor del map

mimap.clear(); //elimina todos los pares clave-valor del map
console.log(mimap); //imprime un map vacio

