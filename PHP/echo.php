

<!DOCTYPE html>
<html>
<body>
<?php

/*Se puede usar echo o print para mostrar datos en pantalla, aunque echo es mas rapido que print.
echo no tiene valor de retono y puede tomar varios parametros, print retorna 1 y solo puede
tomar un parametro
*/


//echo
echo "Hola mundo con echo <br>";
echo ("Hola mundo con echo <br>");

/*Hay diferencia entre comillas dobles y simples. Con las dobles se puede insertar variables 
de manera directa y dentro del echo. Con las simples debe ser por fuera despues de usar . como 
operador
*/


$txt = "Hola mundo con echo y variable <br>";
echo "El primer texto: $txt <br>";

$txt2 = "Hola mundo con echo y variable <br>";
echo 'El segundo texto: ' . $txt2 . '<br>';


//print
print "Hola mundo con print <br>";
print ("Hola mundo con print <br>");


//diferencia del uso de comillas
print "El primer texto: $txt <br> ";
print 'El segundo texto: ' . $txt2 . '<br>';




?>
</body>
</html>