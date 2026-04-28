<!DOCTYPE html>
<html>
    <body>
        <?php
        //metodos comunes para cadenas 
        echo strlen("Hola <br>"); //cantidad de caracteres

        echo str_word_count("Conteo de palabras <br>");  //cantidad de palabras

        $txt = "El mejor platillo son las enchiladas verdes <br>";
        var_dump(str_contains($txt, "enchiladas")); //busca una palabra en el texto y devuelve booleano

        echo strpos ("Los tacos son deberian ser eternos", "taco"); //busca texto especifico y devuelve la posicion de la primera coicidencia

        var_dump(str_starts_with($txt, "El mejor")); //comprueba si comienza por una subcadena especifica

        var_dump(str_starts_with($txt, "el mejor")); //realiza la busqueda distinguiendo entre mayusculas y minusculass

        var_dump(str_ends_with($txt, "verdes")); //comprueba si la variable termina en una subcadena especifica

        //modificar cadenas
        $x = "Modifica esta cadena";
        echo "Texto original: $x <br>";
        echo strtoupper($x); //convierte a mayusculas
        echo "Texto en mayusculas: $x <br>";

        echo strtolower($x);
        echo "Texto en minusculas: $y <br>";

        echo str_replace("cadena", "string", $x); //reemplaza una subcadena por otra
        echo "Texto con reemplazo en subcadena: $x <br>";

        echo strrev($x);
        echo "Cadena invertida: $x <br>";
        echo strrev($x);

        echo trim($x);
        echo "Eliminacion de espacios: $x <br>";

        $y = explode(" ", $x); //separar cadena por un caracter especifico
        print_r($y);

        ?>

    </body>
</html>