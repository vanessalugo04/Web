//switch
const edad = Number(prompt('Ingresa tu edad: ')); //castea el string a numero

const visualizador = document.getElementById('mensaje-resultado'); //selecciona el elemento del DOM con el id mensaje-resultado

/*DOM: Document Object Model, es una representación estructurada de un documento HTML o XML.
Permite a los desarrolladores acceder y manipular el contenido, la estructura y el estilo de una
página web utilizando JavaScript. El DOM representa la página como un árbol de nodos,
donde cada nodo corresponde a un elemento HTML, atributo o texto.
A través del DOM, los desarrolladores pueden modificar dinámicamente el contenido de la página,
agregar o eliminar elementos, cambiar estilos y responder a eventos del usuario. 
*/

switch (true) { //busca el caso verdadero
    case (edad === 18):
        visualizador.innerText = 'Tienes 18 años';
        break;
    
    case (edad < 18 && edad > 10):
        visualizador.innerText = 'Eres un adolescente';
        break;
    
    case (edad > 0 && edad <= 10):
        visualizador.innerText = 'Eres un niño';
        break;
    
    case (edad > 18):
        visualizador.innerText = 'Eres mayor de edad';
        break;

    default:
        visualizador.innerText = 'Edad no válida';
}

