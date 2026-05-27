/* El ciclo for requiere de tres expresiones separadas por punto y coma:
for (exp1; exp2; exp3){
}
*/

let text = ''; 
for (let i = 0; i < 5; i++){
    text += 'The number is ' + i + '<br>'; 
}
console.log(text); 


let altura = 10; 

for (let i = 1; i <= altura; i++) {

    let espacios = ' '.repeat(altura - i);
    let asteriscos = '* '.repeat(i);
    console.log(espacios + asteriscos);
}

let i = 0;
while (i  < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

/*for...in  
Bucle que itera sobre las propiedades enumerables de un objeto, se suele usar para iterar
sobre las claves de los objetos
*/

const persona = {nombre: 'vane', edad: 22, ciudad: 'Madrid'};
let  text2 = '';
for (let x in persona){
  text2 += persona[x] + ' ';
  console.log(text2);
}


/*for...of
Bucle que itera sobre los valores de objetos iterables como matrices, arrays, maps, nodos 
for (variable of iterable){}
variable: En cada iteración, el valor de la siguiente propiedad se asigna a la variable.
iterable: onjeto iterable que se va recorrer
*/

const colores = ['rojo', 'verde', 'azul'];
for (let color of colores){
  console.log(color);
}

//OBJETO ITERADOR 
/* Un objeto iterador un objeto que proporciona una forma estándar de acceder a 
los elementos de forma secuencial .
Debe tener un método next() */

/* el metodo next() devuelve un objeto con dos propiedades:
value: almacena el siguiente valor de la secuenca
done: devuelve false si hay mas elementos sobre los que iterar, y true si ya no hay
*/

//funcion que crea un iterador a partir de un array
function crearIterador(array) {
  let indice = 0;
  
  return {
    next: function() {
      if (indice < array.length) {
        return { value: array[indice++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

//metodo iterador.from() crea un objeto iterador a partir de un objeto iterable
const myIterator = Iterator.from([1, 2, 3]);

// Iterate over the elements
let text = "";
for (const x of myIterator) {
  text += x;
}