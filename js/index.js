// Simulador interactivo básico en JavaScript

// Declaramos algunas variables iniciales
let nombreUsuario = prompt("¡Bienvenido! Por favor, ingresa tu nombre:");

// Bienvenida al usuario
alert("Hola " + nombreUsuario + ", bienvenido al simulador interactivo.");

// Variable de control para el ciclo
let continuar = true;

// Ciclo que sigue preguntando hasta que el usuario elija salir
while (continuar) {
    // Pregunta básica al usuario
    let opcion = prompt(
        "¿Qué te gustaría hacer? Ingresa el número correspondiente:\n1. Jugar\n2. Recibir un consejo\n3. Salir"
    );

    // Condicional que controla las opciones
    if (opcion == "1") {
        alert("¡Vamos a jugar! Adivina el número entre 1 y 5.");
        let numeroAleatorio = Math.floor(Math.random() * 5) + 1;
        let intento = prompt("Ingresa tu número:");

        if (intento == numeroAleatorio) {
            alert("¡Felicidades! Adivinaste el número " + numeroAleatorio);
        } else {
            alert("Lo siento, el número era " + numeroAleatorio);
        }
    } else if (opcion == "2") {
        alert("Consejo del día: Nunca dejes de aprender y mejorar tus habilidades.");
    } else if (opcion == "3") {
        alert("Gracias por participar, " + nombreUsuario + ". ¡Hasta la próxima!");
        continuar = false; // Termina el ciclo
    } else {
        alert("Opción no válida. Por favor, elige una opción del 1 al 3.");
    }
}