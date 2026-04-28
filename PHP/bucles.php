<?php
//while

echo "Primer while\n";
$i = 1;
while ($i < 6){
    echo  "$i\n";
    $i++;
}


//break: detiene el programa aunque la condicion sea verdadera
echo "while con break\n";
$i = 1;
while ($i < 6) {
  if ($i == 3) break;
  echo "$i\n" ;
  $i++;
}

//continue: se salta la instruccion actual y continua
echo "while con continue\n";
$i = 0;
while ($i < 6) {
  $i++;
  if ($i == 3) continue;
  echo "$i\n";
}

//do while
echo "do while\n";
$i = 1;

do {
  echo $i;
  $i++;
} while ($i < 6);

//for 
echo "for";
for ($x = 0; $x <= 10; $x++) {
  echo "$x <br>";
}

//foreach
// Para matrices indexadas
$colores = ["rojo", "verde"];

foreach ($colores as $color) {
  echo "$color <br>";
}

//para arrays asociativos
$personas = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

foreach ($personas as $clave => $valor) {
  echo "$clave : $valor <br>";
}



?>