//programa para adivinar un numero magico
alert("Bienvenido al juego adivina el numero ");
alert("Elije un numero del 1 al 20");
let numero=parseInt(prompt("ingrese un numero"));

while(numero != 18){
    if (numero >= 21 ){
        alert("ingrese un numero valido");
        if (numero <= 0 ) {
            alert("ingrese un numero valido");
        }
    }
    numero=parseInt(prompt("ingrese otro numero"));
}
alert("Felicitaciones encontraste el numero");
 