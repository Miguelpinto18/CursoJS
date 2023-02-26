 
 // ENTREGA 1: Debe estar compuestar por un condicional, un ciclo y una funcion y tiene que estar relacionada con el proyecto final


/* Si bien mi proyecto final seguramente sea una Ecommerce, preferi hacer este ejercicio para la primera entrega 
ya que senti que para la segunda entrega iba a tener mas recursos para hacer un carrito mas completo, ademas me parecio algo 
mas desafiante y divertido con los recursos aprendidos hasta ahora */


// Introduccion
alert("Bienvenido al juego Adivia Adivinador");   
alert("Deberas adivinar el numero que estoy pensando, se encuentra entre el 1 y el 10. Y recuerda, solo tienes 3 oportunidades");


// En este punto guardamos en una constante un numero al azar "elegido" por la pc (Se busco informacion en google para este proceso)
function randomIntPcChoice (min,max){ 
    return Math.floor(Math.random() * (max - min +1 ) + min);
}
const randomNumber = randomIntPcChoice(1,10); 

// Establecemos la variable INTENTOS, la cual se ira incrementando
let intentos = 0

// Imprimo randomNumber para que puedas probar rapidamente las posibles opciones de juego (ganar en la primera, errar todas, etc)
console.log(randomNumber);

// Definimos la funcion correrJuego la cual correra mientras los intentos no sean mayor a 3 y establecera Cuando se gana y avisara cada vez que el usuario se equivoque.
function correrJuego () {
    while (intentos < 3){
        let eleccionUsuario = parseInt(prompt("Elige un numero del 1 al 10, estoy seguro que no adivinaras"))
        intentos = (intentos + 1);

        if (eleccionUsuario == randomNumber){
            alert("Felicidades, adivinaste!, el numero era " + randomNumber + " Bien hecho");
            break;
        }

        if (intentos > 3){
            alert("Se te acabaron los intentos, el numero a adivinar era " + randomNumber + " lo siento pero perdiste!");
        }

        // Este IF evitara que una vez realizado el ultimo intento corra el IF que se encuentra debajo de este
        if (intentos == 3){
            alert("Se te acabaron los intentos, el numero a adivinar era " + randomNumber + " lo siento pero perdiste!");
            break;
        }

        if (eleccionUsuario != randomNumber){
            alert("El numero elegido no es correcto, vuelve a intentar")
            
        }
    }
} 

correrJuego();







