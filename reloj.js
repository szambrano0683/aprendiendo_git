// Obtener los elementos del index.html por su ID
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let seg = document.getElementById("seg");

// Función que actualiza la hora cada segundo
setInterval(() => {
    let tiempoActual = new Date(); // Crea un objeto con la hora del sistema

    // Obtiene las horas, minutos y segundos y agrega un 0 si son menores a 10
    let horas = (tiempoActual.getHours() < 10 ? "0" : "") + tiempoActual.getHours();
    let minutos = (tiempoActual.getMinutes() < 10 ? "0" : "") + tiempoActual.getMinutes();
    let segundos = (tiempoActual.getSeconds() < 10 ? "0" : "") + tiempoActual.getSeconds();

    // Muestra los valores en los elementos HTML
    hrs.textContent = horas;
    min.textContent = minutos;
    seg.textContent = segundos;
}, 1000);