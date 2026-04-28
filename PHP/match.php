<?php
/*match funciona para comprobar multiples condicionales como switch. match es más legible que 
switch, ademas retorna un valor, se interrumpe automaticamente sin necesidad de break. match usa
comparacion estricta ===  y switch comparación flexible ==
*/

$color = "rojo";

$text = match($color) {
  "rojo" => "El color es rojo",
  "azul" => "El color es azul",
  "verde" => "El color es verde",
  default => "sin color",
};

echo $text;

?>