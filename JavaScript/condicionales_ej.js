// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = prompt('Ingresa tu nombre: ');
const visNombre = document.getElementById('res-nombre');

if (nombre === 'Vane') {
    visNombre.innerText = 'Hola Vane';
} else {
    visNombre.innerText = 'Hola desconocido';
}

// 2. Verifica si un numero es positivo, negativo o cero e imprime
const numero = Number(prompt('Ingresa un número: '));
const visNumero = document.getElementById('res-numero');

if (numero > 0) {
    visNumero.innerText = 'El número es positivo';
} else if (numero === 0) {
    visNumero.innerText = 'El número es cero';
} else {
    visNumero.innerText = 'El número es negativo';
}

// 3. Imprime si el usuario y contraseña coincide
const usuario = prompt('Ingresa tu usuario: ');
const contraseña = prompt('Ingresa tu contraseña: ');
const visLogin = document.getElementById('res-login');

if (usuario === 'admin' && contraseña === '1234') {
    visLogin.innerText = 'Bienvenido admin';
} else {
    visLogin.innerText = 'Usuario o contraseña incorrectos';
}   

// 4. Verifica si una persona puede votar  o no
const edad = Number(prompt('Ingresa tu edad para votar: '));
const visVoto = document.getElementById('res-voto');

if (edad >= 18) {
    visVoto.innerText = 'Puedes votar';
} else {
    visVoto.innerText = 'No puedes votar';
}

// 5. Usa el operador ternario para indicar si es adulto o no
// (Reutilizamos la variable 'edad' que ya pediste arriba)
const visTernario = document.getElementById('res-ternario');
const esAdulto = (edad >= 18) ? 'Eres adulto' : 'No eres adulto';

visTernario.innerText = esAdulto;

// 6. Muestra estacion del año
const mes = prompt('Ingresa el mes: ');
const visEstacion = document.getElementById('res-estacion');

switch (mes.toLowerCase()) {
    case 'diciembre':
    case 'enero':
    case 'febrero':
        visEstacion.innerText = 'Es invierno';
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        visEstacion.innerText = 'Es primavera';
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        visEstacion.innerText = 'Es verano';
        break;
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        visEstacion.innerText = 'Es otoño';
        break;
    default:
        visEstacion.innerText = 'Mes no válido';
}

// 7. Usar switch para un saludo diferente dependiendo el idioma
const idioma = prompt('Ingresa tu idioma: ');
const visIdioma = document.getElementById('res-idioma');

switch (idioma.toLowerCase()) {
    case 'español': 
        visIdioma.innerText = 'Hola';
        break;
    case 'ingles':
        visIdioma.innerText = 'Hello';
        break;
    default:
        visIdioma.innerText = 'Idioma no reconocido';
}