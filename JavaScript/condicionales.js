/* Los condicionales permiten realizar diferentes acciones
para diferentes condiciones. 
if
if ... else
if ... else if ... else
switch
ternary
*/

//if
let edad = 18;
if (edad >= 18) {
    console.log('Eres mayor de edad');
}

//if ... else
if (edad >=18) {
    console.log('Eres mayor de edad');
} else {
    console.log('No eres mayor de edad');
}

//if ... else if ... else
if (edad < 18) {
    console.log('Eres menor de edad');
} else if (edad === 18) {
    console.log('Tienes 18 años');
} else {
    console.log('Eres mayor de edad');
}

