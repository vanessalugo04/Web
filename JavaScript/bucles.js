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

while (i < 10) {
  text += "The number is " + i;
  i++;
}

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);