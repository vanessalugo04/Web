<!DOCTYPE html>
<html>
    <body>
        <?php
        //if
        if (5 > 3){
            echo "Ten un buen dia <br>";
        }

        //if una linea
        if (2 === 2) echo "2 es igual a 2 <br>";

        //if ... else
        if (5 > 3){
            echo "Ten un buen dia <br>";
        } else {
            echo "No tengas un buen dia LOL <br>";
        }

        // if else una linea
        (2 * 2 == 4) ? "correcto <br>" : "incorrecto <br>";
        
        //if .. elseif .. else
        if (5 < 3){
            echo "Hola <br>";
        } elseif (5 < 10) {
            echo "Ola de mar <br>";
        } else{
            echo "adios <br>";
        }

        //switch
        $color = "rojo";
        switch($color){
            case "rojo":
                echo "color rojo <br>";
            case "azul":
                echo "color azul <br>";
            default:
                echo "color desconocido <br>";
        }
        ?>
    </body>
</html>