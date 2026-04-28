/* las variables contienen datos para
que puedan ser usados. Debe comenzar por $ seguido de una letra o guin bajo,
no puede comenzar con un numero
*/
<?php
$x  = 22;
$y = "hola";

echo "El valor de x es: $x";

/* No hace falta especificar el tipo de dato. Los tipos de datos son
String: Secuencia de caracteres
Int: Debe tener al menos un digito sin decimales y se puede especificar la notacion
Float: Numero con decimal o numero en forma exponencial
Boolean: representa verdadero o falso
Array: matrcies
Object: contiene una instancia de una clase
Null: variable vacia o establecida con null
Resource: Hace referencia a recursos externos
Mixed: Cualquier valor
*/

var_dump(5);
var_dump("John");
var_dump(3.14);
var_dump(true);
var_dump([2, 3, 56]);
var_dump(NULL);

//asignacion multiple
$a = $b = $c = 10; 

//conversiones
$a = 5;       // Integer
$b = 5.34;    // Float
$c = "hello"; // String
$d = true;    // Boolean
$e = NULL;    // NULL

$a = (string) $a;
$b = (string) $b;
$c = (string) $c;
$d = (string) $d;
$e = (string) $e;


var_dump($a);
var_dump($b);
var_dump($c);
var_dump($d);
var_dump($e);

//constantes: no se pueden modificar ni anular su defnicon
define("GREETING", "Welcome to W3Schools.com!");
echo GREETING;

/*constantes magicas: informacion actual del script, como nombre del archivo, nombre del 
directorio, numero de linea, nombre de funcion, nombre de la clase, etc.
Comienzan y erminan con giobles bajos dobles. No distinguen entre mayusculas
y minusculas
__class__ = Retorna nombre de la clase
__dir__ = Retorna el directorio de la fila
__file__ = nombre del archivo
__function__ = nombre de la funcion en que esta
__line__ = numero de linea
__method__= el nombre del metodo
__namespace__
__trait__ 
ClassName::class

*/


?>