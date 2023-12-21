// gamepage.js
// Declare y as a global variable
var y;

// Función para generar un número aleatorio
function generateRandomNumber() {
    y = Math.floor(Math.random() * 10 + 1);
}

// Función para comprobar la suposición
function sumbit() {
    // Asegúrate de que y está definido llamando a generateRandomNumber
    generateRandomNumber();

    var x = document.getElementById("guessField").value;

    if (x == y) {
        alert("¡Felicitaciones! Adivinaste correctamente.");
    } else {
        alert("No adivinaste. ¡Inténtalo de nuevo!");
    }
}

// Función para jugar de nuevo
function playagain() {
    // Vuelve a generar un número aleatorio
    generateRandomNumber();
}
